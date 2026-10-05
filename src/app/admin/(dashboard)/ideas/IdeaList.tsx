'use client';

import { useState, useTransition } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Trash2, X } from 'lucide-react';
import { toast } from 'sonner';
import { deleteIdea, updateIdea } from '../../actions';
import { RichTextEditor } from '@/components/RichTextEditor';

export function IdeaList({ ideas }: { ideas: any[] }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const selectedIdea = ideas.find(i => i.id === selectedId);

  const handleDelete = (id: string) => {
    if (confirm('Delete this idea?')) {
      startTransition(async () => {
        await deleteIdea(id);
        setSelectedId(null);
        toast.success('Idea deleted');
      });
    }
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ideas.map(idea => (
          <div 
            key={idea.id} 
            onClick={() => setSelectedId(idea.id)}
            className="bg-[#141414] hover:bg-[#1a1a1a] border border-white/10 hover:border-white/20 rounded-2xl p-6 cursor-pointer transition-colors"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-medium text-lg pr-4">{idea.title}</h3>
              <span className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 whitespace-nowrap">
                {idea.category}
              </span>
            </div>
            <p className="text-sm text-white/50 line-clamp-2 mb-4">
              {idea.description ? idea.description.replace(/<[^>]*>?/gm, '').substring(0, 100) : 'No description.'}
            </p>
            {idea.target_date && (
              <div className="text-[10px] uppercase tracking-wider text-white/40 flex items-center gap-1 font-bold">
                <Calendar size={12} /> {new Date(idea.target_date).toLocaleDateString()}
              </div>
            )}
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedIdea && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-full md:w-[700px] bg-[#0a0a0a] border-l border-white/10 z-50 shadow-2xl flex flex-col"
            >
              <div className="flex justify-between items-start p-8 pb-4 shrink-0 border-b border-white/5">
                <div>
                  <h2 className="text-2xl font-medium mb-2">{selectedIdea.title}</h2>
                  <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                    {selectedIdea.category}
                  </span>
                </div>
                <button onClick={() => setSelectedId(null)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-8 bg-[#050505]">
                <RichTextEditor 
                  value={selectedIdea.description || ''} 
                  onChange={(val) => {
                    // handled internally by tiptap
                  }}
                  onBlur={() => {
                    const el = document.querySelector('.ProseMirror');
                    if (el) {
                      startTransition(async () => {
                        await updateIdea(selectedIdea.id, el.innerHTML);
                        toast.success('Idea saved');
                      });
                    }
                  }}
                />
              </div>

              <div className="shrink-0 p-6 border-t border-white/10 flex justify-between items-center bg-[#0a0a0a]">
                <div className="text-xs text-white/40">
                  Added {new Date(selectedIdea.created_at).toLocaleDateString()}
                </div>
                <button 
                  onClick={() => handleDelete(selectedIdea.id)}
                  disabled={isPending}
                  className="flex items-center gap-2 text-sm text-red-400 hover:text-red-300 transition-colors disabled:opacity-50"
                >
                  <Trash2 size={16} /> Delete Idea
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
