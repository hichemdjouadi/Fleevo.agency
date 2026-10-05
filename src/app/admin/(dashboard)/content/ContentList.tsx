'use client';

import { useState, useTransition } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Trash2, X, Share } from 'lucide-react';
import { toast } from 'sonner';
import { deleteContentPost, updateContentDraft } from '../../actions';
import { RichTextEditor } from '@/components/RichTextEditor';

export function ContentList({ posts }: { posts: any[] }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const selectedPost = posts.find(p => p.id === selectedId);
  
  const openDrawer = (post: any) => {
    setSelectedId(post.id);
  };

  const handleBlur = () => {
    const el = document.querySelector('.ProseMirror');
    if (selectedPost && el) {
      startTransition(async () => {
        await updateContentDraft(selectedPost.id, el.innerHTML);
        toast.success('Draft auto-saved');
      });
    }
  };

  const handleDelete = (id: string) => {
    if (confirm('Delete this content post?')) {
      startTransition(async () => {
        await deleteContentPost(id);
        setSelectedId(null);
        toast.success('Post deleted');
      });
    }
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map(post => (
          <div 
            key={post.id} 
            onClick={() => openDrawer(post)}
            className="bg-[#141414] hover:bg-[#1a1a1a] border border-white/10 hover:border-white/20 rounded-2xl p-6 cursor-pointer transition-colors flex flex-col"
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-medium pr-4">{post.title}</h3>
              <span className="text-[10px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/60 whitespace-nowrap">
                {post.status}
              </span>
            </div>
            
            <p className="text-sm text-white/50 line-clamp-3 mb-6 flex-1">
              {post.draft_body ? post.draft_body.replace(/<[^>]*>?/gm, '').substring(0, 150) : 'Empty draft...'}
            </p>
            
            <div className="flex items-center justify-between mt-auto pt-3 border-t border-white/5">
              <span className="text-xs text-blue-400 bg-blue-500/10 px-2 py-1 rounded-md">
                {post.platform}
              </span>
              {post.scheduled_date && (
                <div className="text-[10px] uppercase tracking-wider text-white/40 flex items-center gap-1 font-bold">
                  <Calendar size={12} /> {new Date(post.scheduled_date).toLocaleDateString()}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <AnimatePresence>
        {selectedPost && (
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
              <div className="p-8 pb-6 border-b border-white/5 flex justify-between items-start shrink-0">
                <div>
                  <h2 className="text-2xl font-medium mb-3">{selectedPost.title}</h2>
                  <div className="flex gap-2">
                    <span className="text-xs px-2 py-1 rounded-full bg-blue-500/10 text-blue-400">
                      {selectedPost.platform}
                    </span>
                    <span className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/80">
                      {selectedPost.status}
                    </span>
                  </div>
                </div>
                <button onClick={() => setSelectedId(null)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                  <X size={20} />
                </button>
              </div>

              <div className="flex-1 p-8 bg-[#050505] overflow-y-auto">
                <RichTextEditor 
                  value={selectedPost.draft_body || ''}
                  onChange={() => {}}
                  onBlur={handleBlur}
                />
              </div>

              <div className="p-6 shrink-0 border-t border-white/5 flex justify-between items-center bg-[#0a0a0a]">
                <button 
                  onClick={() => handleDelete(selectedPost.id)}
                  disabled={isPending}
                  className="flex items-center gap-2 text-sm text-red-400 hover:text-red-300 transition-colors disabled:opacity-50"
                >
                  <Trash2 size={16} /> Delete Draft
                </button>
                <div className="text-xs text-white/40">
                  Auto-saves when you click away
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
