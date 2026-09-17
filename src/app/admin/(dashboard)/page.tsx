import { createClient } from '@/lib/supabase-server';
import { seedTestData } from './seed';
import { revalidatePath } from 'next/cache';

export default async function AdminDashboardPage() {
  const supabase = await createClient();
  
  const { count: unreadMessages } = await supabase
    .from('messages')
    .select('*', { count: 'exact', head: true })
    .eq('is_read', false);

  const { count: activeProjects } = await supabase
    .from('projects')
    .select('*', { count: 'exact', head: true })
    .neq('status', 'Completed');

  const handleSeed = async () => {
    'use server';
    await seedTestData();
    revalidatePath('/admin');
  };

  return (
    <div className="max-w-5xl mx-auto">
      <header className="mb-12 flex justify-between items-start">
        <div>
          <h1 className="text-4xl tracking-tighter font-medium mb-2">Good morning, Jondi.</h1>
          <p className="text-white/60">Here is your daily briefing.</p>
        </div>
        <form action={handleSeed}>
          <button type="submit" className="text-xs bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full transition-colors border border-white/10">
            + Seed Test Data
          </button>
        </form>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {/* Messages Card */}
        <div className="bg-[#111111] border border-white/10 rounded-3xl p-6">
          <h3 className="text-xs tracking-[0.2em] uppercase text-white/60 mb-4">Inbox</h3>
          <div className="flex items-end gap-3">
            <span className="text-5xl font-light tracking-tighter">{unreadMessages || 0}</span>
            <span className="text-white/60 mb-2">unread</span>
          </div>
        </div>

        {/* Projects Card */}
        <div className="bg-[#111111] border border-white/10 rounded-3xl p-6">
          <h3 className="text-xs tracking-[0.2em] uppercase text-white/60 mb-4">Active Projects</h3>
          <div className="flex items-end gap-3">
            <span className="text-5xl font-light tracking-tighter">{activeProjects || 0}</span>
            <span className="text-white/60 mb-2">in progress</span>
          </div>
        </div>

        {/* Tasks Card (Placeholder for Trello integration) */}
        <div className="bg-[#111111] border border-white/10 rounded-3xl p-6">
          <h3 className="text-xs tracking-[0.2em] uppercase text-white/60 mb-4">Tasks</h3>
          <div className="flex items-end gap-3">
            <span className="text-5xl font-light tracking-tighter">-</span>
            <span className="text-white/60 mb-2">overdue</span>
          </div>
        </div>

        {/* Deadline Card */}
        <div className="bg-[#111111] border border-white/10 rounded-3xl p-6">
          <h3 className="text-xs tracking-[0.2em] uppercase text-white/60 mb-4">Next Deadline</h3>
          <div className="flex flex-col justify-end h-[60px]">
            <span className="text-lg font-medium">None scheduled</span>
          </div>
        </div>
      </div>
    </div>
  );
}
