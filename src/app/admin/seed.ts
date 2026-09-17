'use server';

import { createClient } from '@/lib/supabase-server';

export async function seedTestData() {
  const supabase = await createClient();
  
  // Seed a message
  await supabase.from('messages').insert({
    sender_name: 'Test Client',
    sender_email: 'hello@testclient.com',
    message_body: 'Hey Jondi, love your templates! Do you do custom setups for real estate agencies? Let me know your rates.',
    is_read: false
  });

  // Seed a "Going Cold" lead (created 10 days ago)
  const tenDaysAgo = new Date();
  tenDaysAgo.setDate(tenDaysAgo.getDate() - 10);
  
  await supabase.from('leads').insert({
    business_name: 'Elite Realty Partners',
    contact_email: 'jordan@eliterealty.com',
    niche: 'Real Estate',
    website_url: 'eliterealty.com',
    status: 'Contacted',
    notes: 'Jordan is interested in the brutalist template but needs IDX integration. Sent proposal last week.',
    created_at: tenDaysAgo.toISOString(),
    last_contacted_at: tenDaysAgo.toISOString()
  });

  // Seed a fresh lead
  await supabase.from('leads').insert({
    business_name: 'Dr. Sarah Dental',
    contact_email: 'dr.sarah@dental.com',
    niche: 'Dental',
    status: 'New',
    notes: 'Found via Twitter.',
  });

  // Seed Resources (Toolbox)
  const resources = [
    { title: 'Free For Dev', url: 'https://free-for.dev/#/', category: 'Dev Tools', description: 'Massive compilation of software that have free tiers.' },
    { title: 'Catalin Vintila', url: 'https://catalinvintila.design/', category: 'Design Inspiration', description: 'Saved for exceptional design aesthetics and direction.' },
    { title: 'Haoqi Design', url: 'https://haoqi.design/', category: 'Design Inspiration', description: 'Great reference for high-end aesthetics.' },
    { title: 'Coolify', url: 'https://coolify.io/', category: 'Hosting', description: 'Self-hosting OVHcloud VPS managed via Coolify.' },
    { title: 'Linear', url: 'https://linear.app/', category: 'Management', description: 'Excellent for tracking tasks, bugs, and features.' }
  ];

  await supabase.from('resources').insert(resources);
}
