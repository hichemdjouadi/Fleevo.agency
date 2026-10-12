"use server";

import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const telegramBotToken = process.env.TELEGRAM_BOT_TOKEN;
const telegramChatId = process.env.TELEGRAM_CHAT_ID;
const trelloKey = process.env.TRELLO_API_KEY;
const trelloToken = process.env.TRELLO_TOKEN;
const trelloListId = process.env.TRELLO_LIST_ID || '697a36b5212fb7c1c35f5be4';
const notificationEmail = process.env.LEAD_NOTIFICATION_EMAIL || 'contact@fleevo.net';
const resendFromEmail = process.env.RESEND_FROM_EMAIL || 'Fleevo <onboarding@resend.dev>';

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function submitAuditRequest(formData: {
  name: string;
  email: string;
  timeline?: string;
  budget?: string;
  interests: string[];
  details: string;
}) {
  if (!supabaseUrl || !supabaseKey) {
    return { error: "Database configuration is missing." };
  }

  const supabase = createClient(supabaseUrl, supabaseKey);
  const { name, email, timeline, budget, interests, details } = formData;
  const targetTimeline = (timeline || budget || "Not specified").trim();
  
  if (!name || !email) {
    return { error: "Name and email are required." };
  }

  const compiledNotes = `Interests: ${interests.join(', ')}\nTimeline: ${targetTimeline}\n${details}`.trim();

  try {
    // 1. Insert into Supabase
    const { error: submitError } = await supabase
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

    // Await all notification dispatches so serverless lambdas do not freeze prematurely
    const dispatchResults = await Promise.allSettled([
      sendTelegramNotification(name, email, targetTimeline, interests, details),
      createTrelloCard(name, compiledNotes, email),
      sendResendEmail(name, email, targetTimeline, interests, details)
    ]);

    dispatchResults.forEach((result, idx) => {
      if (result.status === 'rejected') {
        console.error(`Notification channel ${idx} failed:`, result.reason);
      }
    });

    return { success: true };
  } catch (err: any) {
    console.error("Lead submission error:", err);
    return { error: err.message || "Failed to submit request." };
  }
}

async function sendTelegramNotification(name: string, email: string, timeline: string, interests: string[], details: string) {
  if (!telegramBotToken || !telegramChatId) return;
  const message = `🚨 <b>New Project Inquiry</b>\n\n<b>Name:</b> ${escapeHtml(name)}\n<b>Email:</b> ${escapeHtml(email)}\n<b>Timeline:</b> ${escapeHtml(timeline)}\n<b>Needs:</b> ${escapeHtml(interests.join(', '))}\n<b>Details:</b>\n${escapeHtml(details)}`;
  
  const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      chat_id: telegramChatId,
      text: message,
      parse_mode: 'HTML'
    })
  });
  if (!res.ok) {
    throw new Error(`Telegram webhook failed with status ${res.status}`);
  }
}

async function createTrelloCard(name: string, notes: string, email: string) {
  if (!trelloKey || !trelloToken || !trelloListId) return;
  
  const desc = `${notes}\n\nEmail: ${email}`;
  const url = `https://api.trello.com/1/cards?idList=${trelloListId}&key=${trelloKey}&token=${trelloToken}&name=${encodeURIComponent(name)}&desc=${encodeURIComponent(desc)}`;
  
  const res = await fetch(url, { method: 'POST' });
  if (!res.ok) {
    throw new Error(`Trello webhook failed with status ${res.status}`);
  }
}

async function sendResendEmail(name: string, email: string, timeline: string, interests: string[], details: string) {
  if (!process.env.RESEND_API_KEY) return;
  
  const resend = new Resend(process.env.RESEND_API_KEY);
  const formattedDetails = escapeHtml(details).replace(/\n/g, "<br />");
  await resend.emails.send({
    from: resendFromEmail,
    to: [notificationEmail],
    subject: `New Lead: ${name}`,
    html: `
      <h2>New Project Inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Timeline:</strong> ${escapeHtml(timeline)}</p>
      <p><strong>Needs:</strong> ${escapeHtml(interests.join(', '))}</p>
      <p><strong>Details:</strong><br />${formattedDetails}</p>
    `
  });
}
