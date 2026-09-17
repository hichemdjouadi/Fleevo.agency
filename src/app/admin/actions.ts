'use server';

import { createClient } from '@/lib/supabase-server';
import { revalidatePath } from 'next/cache';
import { createTrelloProjectCard } from '@/lib/trello';

export async function markMessageRead(id: string, isRead: boolean) {
  const supabase = await createClient();
  await supabase.from('messages').update({ is_read: isRead }).eq('id', id);
  revalidatePath('/admin/inbox');
  revalidatePath('/admin');
}

export async function deleteMessage(id: string) {
  const supabase = await createClient();
  await supabase.from('messages').delete().eq('id', id);
  revalidatePath('/admin/inbox');
  revalidatePath('/admin');
}

export async function updateLeadStatus(id: string, status: string) {
  const supabase = await createClient();
  
  // If moving to 'Won', trigger Auto-Flow
  if (status === 'Won') {
    // 1. Get the lead details
    const { data: lead } = await supabase.from('leads').select('*').eq('id', id).single();
    
    if (lead) {
      // 2. Create the Project
      const { data: project } = await supabase.from('projects').insert({
        lead_id: lead.id,
        client_name: lead.business_name,
        project_type: lead.niche ? `${lead.niche} Website` : 'Website Build',
        status: 'Not Started',
        notes: `Converted from lead.\nOriginal notes: ${lead.notes || 'None'}`
      }).select().single();

      // 3. Create Trello Card
      await createTrelloProjectCard(lead.business_name, project.project_type, lead.notes);
    }
  }

  await supabase.from('leads').update({ 
    status,
    last_contacted_at: new Date().toISOString() 
  }).eq('id', id);
  
  revalidatePath('/admin/leads');
  revalidatePath('/admin/projects');
}

export async function logLeadContact(id: string) {
  const supabase = await createClient();
  await supabase.from('leads').update({ 
    last_contacted_at: new Date().toISOString() 
  }).eq('id', id);
  revalidatePath('/admin/leads');
}

export async function updateProjectStatus(id: string, status: string) {
  const supabase = await createClient();
  await supabase.from('projects').update({ 
    status,
    last_updated_at: new Date().toISOString()
  }).eq('id', id);
  revalidatePath('/admin/projects');
}

export async function deleteProject(id: string) {
  const supabase = await createClient();
  await supabase.from('projects').delete().eq('id', id);
  revalidatePath('/admin/projects');
}
