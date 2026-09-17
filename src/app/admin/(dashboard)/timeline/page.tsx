import { createClient } from '@/lib/supabase-server';
import { Calendar as CalendarIcon, Briefcase, Lightbulb, PenTool } from 'lucide-react';

export default async function TimelinePage() {
  const supabase = await createClient();

  // Fetch all upcoming dates
  const { data: projects } = await supabase.from('projects').select('id, client_name, due_date').not('due_date', 'is', null);
  const { data: ideas } = await supabase.from('ideas').select('id, title, target_date').not('target_date', 'is', null);
  const { data: content } = await supabase.from('content_posts').select('id, title, scheduled_date').not('scheduled_date', 'is', null);

  // Combine and sort
  const timeline: any[] = [];
  
  projects?.forEach(p => timeline.push({ id: `p_${p.id}`, title: `Project Due: ${p.client_name}`, date: new Date(p.due_date), type: 'project' }));
  ideas?.forEach(i => timeline.push({ id: `i_${i.id}`, title: `Idea Target: ${i.title}`, date: new Date(i.target_date), type: 'idea' }));
  content?.forEach(c => timeline.push({ id: `c_${c.id}`, title: `Post: ${c.title}`, date: new Date(c.scheduled_date), type: 'content' }));

  timeline.sort((a, b) => a.date.getTime() - b.date.getTime());

  // Split into past and future
  const now = new Date();
  const upcoming = timeline.filter(item => item.date >= now);
  const past = timeline.filter(item => item.date < now).reverse();

  const getIcon = (type: string) => {
    if (type === 'project') return <Briefcase size={16} className="text-blue-400" />;
    if (type === 'idea') return <Lightbulb size={16} className="text-yellow-400" />;
    return <PenTool size={16} className="text-pink-400" />;
  };

  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-10">
        <h1 className="text-3xl tracking-tighter font-medium mb-2">Timeline</h1>
        <p className="text-white/60">Forecasting future projects, content, and ideas.</p>
      </header>

      <div className="space-y-12">
        <div>
          <h2 className="text-xs tracking-[0.2em] uppercase text-white/40 mb-6 flex items-center gap-2">
            <CalendarIcon size={14} /> Upcoming
          </h2>
          {upcoming.length === 0 ? (
            <div className="p-8 text-center text-white/20 border border-white/5 rounded-3xl bg-[#0a0a0a]">
              Nothing scheduled ahead.
            </div>
          ) : (
            <div className="relative border-l border-white/10 ml-4 space-y-8 pb-4">
              {upcoming.map(item => (
                <div key={item.id} className="relative pl-8">
                  <div className="absolute -left-[17px] top-1 bg-black p-1 rounded-full border border-white/10">
                    {getIcon(item.type)}
                  </div>
                  <div className="bg-[#111111] border border-white/10 rounded-2xl p-5">
                    <div className="text-xs text-white/40 mb-1">{item.date.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</div>
                    <div className="font-medium">{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div>
          <h2 className="text-xs tracking-[0.2em] uppercase text-white/40 mb-6 flex items-center gap-2">
            Past
          </h2>
          <div className="relative border-l border-white/5 ml-4 space-y-6">
            {past.map(item => (
              <div key={item.id} className="relative pl-8 opacity-50">
                <div className="absolute -left-[17px] top-1 bg-black p-1 rounded-full border border-white/5">
                  {getIcon(item.type)}
                </div>
                <div>
                  <div className="text-xs text-white/40 mb-1">{item.date.toLocaleDateString()}</div>
                  <div className="text-sm">{item.title}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
