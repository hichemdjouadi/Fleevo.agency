'use server';

import { createClient } from '@/lib/supabase-server';
import { revalidatePath } from 'next/cache';

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
  await supabase.from('leads').update({ 
    status,
    last_updated_at: new Date().toISOString() // We use last_updated_at in projects but leads use last_contacted_at, let's update that
  }).eq('id', id);
  revalidatePath('/admin/leads');
}

export async function logLeadContact(id: string) {
  const supabase = await createClient();
  await supabase.from('leads').update({ 
    last_contacted_at: new Date().toISOString() 
  }).eq('id', id);
  revalidatePath('/admin/leads');
}
