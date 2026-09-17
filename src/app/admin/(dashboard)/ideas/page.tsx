import { createClient } from '@/lib/supabase-server';
import { revalidatePath } from 'next/cache';
import { Lightbulb, Calendar, Plus } from 'lucide-react';

export default async function IdeaVaultPage() {
  const supabase = await createClient();
  const { data: ideas } = await supabase.from('ideas').select('*').order('created_at', { ascending: false });

  const handleAddIdea = async (formData: FormData) => {
    'use server';
    const supabase = await createClient();
    await supabase.from('ideas').insert({
      title: formData.get('title'),
      category: formData.get('category'),
      description: formData.get('description'),
    });
    revalidatePath('/admin/ideas');
  };

  return (
    <div className="max-w-5xl mx-auto flex gap-12">
      <div className="flex-1">
        <header className="mb-10">
          <h1 className="text-3xl tracking-tighter font-medium mb-2">Idea Vault</h1>
          <p className="text-white/60">Frictionless scratchpad for templates, marketing, and ventures.</p>
        </header>

        <div className="grid grid-cols-1 gap-4">
          {ideas?.map(idea => (
            <div key={idea.id} className="bg-[#111111] border border-white/10 rounded-2xl p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-lg">{idea.title}</h3>
                <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">
                  {idea.category}
                </span>
              </div>
              <p className="text-sm text-white/60 mb-4 whitespace-pre-wrap">{idea.description}</p>
              {idea.target_date && (
                <div className="text-xs text-white/40 flex items-center gap-1">
                  <Calendar size={12} /> Target: {new Date(idea.target_date).toLocaleDateString()}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <aside className="w-80">
        <div className="bg-[#111111] border border-white/10 rounded-3xl p-6 sticky top-12">
          <h3 className="font-medium mb-6 flex items-center gap-2"><Plus size={16} /> New Idea</h3>
          <form action={handleAddIdea} className="space-y-4">
            <div>
              <input name="title" placeholder="Idea Title" required className="w-full bg-black border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-white/30" />
            </div>
            <div>
              <select name="category" className="w-full bg-black border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-white/30">
                <option value="Template Idea">Template Idea</option>
                <option value="Marketing">Marketing</option>
                <option value="Future Venture">Future Venture</option>
                <option value="General">General</option>
              </select>
            </div>
            <div>
              <textarea name="description" placeholder="Description & Notes" rows={4} className="w-full bg-black border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-white/30"></textarea>
            </div>
            <button type="submit" className="w-full bg-white text-black font-medium p-3 rounded-xl hover:bg-white/90 transition-colors text-sm">Save Idea</button>
          </form>
        </div>
      </aside>
    </div>
  );
}
