"use server";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

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

  const compiledNotes = `
Interests: ${interests.join(', ')}
Budget: ${budget}
Project Details: ${details}
  `.trim();

  try {
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
      ]);

    if (submitError) throw submitError;
    return { success: true };
  } catch (err: any) {
    console.error("Lead submission error:", err);
    return { error: err.message || "Failed to submit request." };
  }
}
