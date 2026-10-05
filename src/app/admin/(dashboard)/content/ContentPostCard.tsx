'use client';

import { useState, useTransition } from 'react';
import { updateContentDraft } from '../../actions';
import { Calendar } from 'lucide-react';
import { toast } from 'sonner';

export function ContentPostCard({ post }: { post: any }) {
  const [isPending, startTransition] = useTransition();
  const [draft, setDraft] = useState(post.draft_body || '');

  const handleBlur = () => {
    if (draft !== post.draft_body) {
      startTransition(async () => {
        await updateContentDraft(post.id, draft);
        toast.success('Draft auto-saved');
      });
    }
  };

  return (
    <div className="bg-[#111111] border border-white/10 rounded-2xl p-6">
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
        value={draft}
        onChange={(e) => setDraft(e.target.value)}
        onBlur={handleBlur}
        disabled={isPending}
        className="w-full bg-black/50 border border-white/5 rounded-xl p-4 text-sm text-white/80 focus:outline-none focus:border-white/20 min-h-[120px] transition-colors" 
        placeholder="Start drafting your post here..."
      />
    </div>
  );
}
