import { NextResponse } from 'next/server';
import { createClient } from '@/lib/supabase-server';

export async function GET() {
  const supabase = await createClient();

  // Parallel fetch for speed
  const [
    { data: leads },
    { data: projects },
    { data: ideas }
  ] = await Promise.all([
    supabase.from('leads').select('id, business_name, status').order('created_at', { ascending: false }).limit(20),
    supabase.from('projects').select('id, client_name, status').order('created_at', { ascending: false }).limit(20),
    supabase.from('ideas').select('id, title, category').order('created_at', { ascending: false }).limit(20)
  ]);

  return NextResponse.json({
    leads: leads || [],
    projects: projects || [],
    ideas: ideas || []
  });
}
