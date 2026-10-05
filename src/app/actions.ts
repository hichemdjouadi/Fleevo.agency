"use server";

import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const resend = new Resend(process.env.RESEND_API_KEY);
const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
const telegramChatId = process.env.TELEGRAM_CHAT_ID;
const trelloKey = process.env.TRELLO_API_KEY;
const trelloToken = process.env.TRELLO_TOKEN;
const trelloListId = '697a36b5212fb7c1c35f5be4'; // "Leads" list on Design Light Work board

export async function submitAuditRequest(formData: {
  name: string;
  email: string;
  budget: string;
  interests: string[];
  details: string;
}) {
  if (!supabaseUrl || !supabaseKey) {
    return { error: "Database configuration is missing." };
  }

  const supabase = createClient(supabaseUrl, supabaseKey);
  const { name, email, budget, interests, details } = formData;
  
  if (!name || !email) {
    return { error: "Name and email are required." };
  }

  const compiledNotes = `Interests: ${interests.join(', ')}\nBudget: ${budget}\nProject Details: ${details}`.trim();

  try {
    // 1. Insert into Supabase
    const { data: insertedLead, error: submitError } = await supabase
      .from('leads')
      .insert([
        { 
          business_name: name, 
          contact_email: email,
          notes: compiledNotes,
          niche: "Inbound Lead",
          status: "New"
        }
      ])
      .select();

    if (submitError) throw submitError;

    // Run external notifications in parallel so the user doesn't wait
    Promise.allSettled([
      sendTelegramNotification(name, email, budget, interests, details),
      createTrelloCard(name, compiledNotes, email),
      sendResendEmail(name, email, budget, interests, details)
    ]).then(results => {
      // Log errors but don't block the UI
      results.forEach(r => {
        if (r.status === 'rejected') console.error('Notification failed:', r.reason);
      });
    });

    return { success: true };
  } catch (err: any) {
    console.error("Lead submission error:", err);
    return { error: err.message || "Failed to submit request." };
  }
}

async function sendTelegramNotification(name: string, email: string, budget: string, interests: string[], details: string) {
  if (!telegramBotToken || !telegramChatId) return;
  const message = `🚨 *New Audit Request!*\n\n*Name:* ${name}\n*Email:* ${email}\n*Budget:* ${budget}\n*Interests:* ${interests.join(', ')}\n*Details:* ${details}`;
  
  const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
  await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: telegramChatId,
      text: message,
      parse_mode: 'Markdown'
    })
  });
}

async function createTrelloCard(name: string, notes: string, email: string) {
  if (!trelloKey || !trelloToken || !trelloListId) return;
  
  const desc = `${notes}\n\nEmail: ${email}`;
  const url = `https://api.trello.com/1/cards?idList=${trelloListId}&key=${trelloKey}&token=${trelloToken}&name=${encodeURIComponent(name)}&desc=${encodeURIComponent(desc)}`;
  
  await fetch(url, { method: 'POST' });
}

async function sendResendEmail(name: string, email: string, budget: string, interests: string[], details: string) {
  if (!process.env.RESEND_API_KEY) return;
  
  await resend.emails.send({
    from: 'Acme <onboarding@resend.dev>', // Resend free tier requires this default sender
    to: ['hichemdjouadi@gmail.com'], // Or the user's registered Gmail with Resend
    subject: `New Lead: ${name}`,
    html: `
      <h2>New Audit Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Budget:</strong> ${budget}</p>
      <p><strong>Interests:</strong> ${interests.join(', ')}</p>
      <p><strong>Details:</strong> ${details}</p>
    `
  });
}
