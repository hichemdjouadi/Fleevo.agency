import { createClient } from '@/lib/supabase-server';
import { revalidatePath } from 'next/cache';
import { PenTool, Calendar, Plus } from 'lucide-react';

export default async function ContentPlannerPage() {
  const supabase = await createClient();
  const { data: posts } = await supabase.from('content_posts').select('*').order('scheduled_date', { ascending: true });

  const handleAddPost = async (formData: FormData) => {
    'use server';
    const supabase = await createClient();
    await supabase.from('content_posts').insert({
      title: formData.get('title'),
      platform: formData.get('platform'),
      status: 'Idea',
    });
    revalidatePath('/admin/content');
  };

  return (
    <div className="max-w-5xl mx-auto flex gap-12">
      <div className="flex-1">
        <header className="mb-10">
          <h1 className="text-3xl tracking-tighter font-medium mb-2">Content Planner</h1>
          <p className="text-white/60">Plan and draft content across all platforms.</p>
        </header>

        <div className="grid grid-cols-1 gap-4">
          {posts?.map(post => (
            <div key={post.id} className="bg-[#111111] border border-white/10 rounded-2xl p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-medium text-lg mb-1">{post.title}</h3>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="px-2 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">{post.platform}</span>
                    <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">{post.status}</span>
                  </div>
                </div>
                {post.scheduled_date && (
                  <div className="text-xs bg-white/5 px-3 py-1.5 rounded-lg flex items-center gap-2">
                    <Calendar size={14} />
                    {new Date(post.scheduled_date).toLocaleDateString()}
                  </div>
                )}
              </div>
              <textarea 
                defaultValue={post.draft_body} 
                className="w-full bg-black/50 border border-white/5 rounded-xl p-4 text-sm text-white/80 focus:outline-none focus:border-white/20 min-h-[120px]" 
                placeholder="Start drafting your post here..."
              />
            </div>
          ))}
        </div>
      </div>

      <aside className="w-80">
        <div className="bg-[#111111] border border-white/10 rounded-3xl p-6 sticky top-12">
          <h3 className="font-medium mb-6 flex items-center gap-2"><Plus size={16} /> New Content</h3>
          <form action={handleAddPost} className="space-y-4">
            <div>
              <input name="title" placeholder="Post Topic/Title" required className="w-full bg-black border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-white/30" />
            </div>
            <div>
              <select name="platform" className="w-full bg-black border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-white/30">
                <option value="Twitter/X">Twitter/X</option>
                <option value="LinkedIn">LinkedIn</option>
                <option value="Instagram">Instagram</option>
                <option value="Blog">Blog</option>
              </select>
            </div>
            <button type="submit" className="w-full bg-white text-black font-medium p-3 rounded-xl hover:bg-white/90 transition-colors text-sm">Add to Planner</button>
          </form>
        </div>
      </aside>
    </div>
  );
}
