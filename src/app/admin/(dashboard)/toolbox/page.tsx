import { createClient } from '@/lib/supabase-server';
import { revalidatePath } from 'next/cache';
import { Wrench, ExternalLink, Plus } from 'lucide-react';

export default async function ToolboxPage() {
  const supabase = await createClient();
  const { data: resources } = await supabase.from('resources').select('*').order('created_at', { ascending: false });

  const handleAddResource = async (formData: FormData) => {
    'use server';
    const supabase = await createClient();
    await supabase.from('resources').insert({
      title: formData.get('title'),
      url: formData.get('url'),
      category: formData.get('category'),
      description: formData.get('description'),
    });
    revalidatePath('/admin/toolbox');
  };

  return (
    <div className="max-w-5xl mx-auto flex gap-12">
      <div className="flex-1">
        <header className="mb-10">
          <h1 className="text-3xl tracking-tighter font-medium mb-2">Toolbox</h1>
          <p className="text-white/60">Curated library of valuable links, inspiration, and tools.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {resources?.map(resource => (
            <div key={resource.id} className="bg-[#111111] border border-white/10 rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-lg">{resource.title}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">
                    {resource.category}
                  </span>
                </div>
                <p className="text-sm text-white/60 mb-6">{resource.description}</p>
              </div>
              <a 
                href={resource.url} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors"
              >
                <ExternalLink size={14} /> Visit Link
              </a>
            </div>
          ))}
        </div>
      </div>

      <aside className="w-80">
        <div className="bg-[#111111] border border-white/10 rounded-3xl p-6 sticky top-12">
          <h3 className="font-medium mb-6 flex items-center gap-2"><Plus size={16} /> Add Tool</h3>
          <form action={handleAddResource} className="space-y-4">
            <div>
              <input name="title" placeholder="Name" required className="w-full bg-black border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-white/30" />
            </div>
            <div>
              <input name="url" type="url" placeholder="https://" required className="w-full bg-black border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-white/30" />
            </div>
            <div>
              <select name="category" className="w-full bg-black border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-white/30">
                <option value="Design Inspiration">Design Inspiration</option>
                <option value="Dev Tools">Dev Tools</option>
                <option value="Hosting">Hosting</option>
                <option value="Management">Management</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <textarea name="description" placeholder="Short description" rows={2} className="w-full bg-black border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-white/30"></textarea>
            </div>
            <button type="submit" className="w-full bg-white text-black font-medium p-3 rounded-xl hover:bg-white/90 transition-colors text-sm">Save to Toolbox</button>
          </form>
        </div>
      </aside>
    </div>
  );
}
