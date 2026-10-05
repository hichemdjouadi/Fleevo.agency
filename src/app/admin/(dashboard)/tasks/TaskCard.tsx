'use client';

import { useTransition } from 'react';
import { ExternalLink, Check, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import { completeTaskAction } from '../../actions';

export function TaskCard({ task }: { task: any }) {
  const [isPending, startTransition] = useTransition();

  const handleComplete = () => {
    startTransition(async () => {
      await completeTaskAction(task.id);
      toast.success('Task marked as complete and archived');
    });
  };

  return (
    <div className={`bg-[#141414] hover:bg-[#1a1a1a] border border-white/10 hover:border-white/20 rounded-2xl p-5 transition-all group ${isPending ? 'opacity-50 scale-95 pointer-events-none' : ''}`}>
      <div className="flex gap-4 items-start">
        <button 
          onClick={handleComplete}
          className="mt-1 shrink-0 w-5 h-5 rounded border border-white/20 hover:border-green-400 hover:bg-green-400/20 text-transparent hover:text-green-400 transition-colors flex items-center justify-center"
        >
          <Check size={14} />
        </button>
        <div className="flex-1">
          <div className="flex justify-between items-start mb-1">
            <h3 className="font-medium">{task.name}</h3>
            {task.due && (
              <span className={`text-[10px] font-bold tracking-wider uppercase px-2 py-1 rounded shrink-0 ml-4 ${new Date(task.due) < new Date() ? 'bg-red-500/20 text-red-400' : 'bg-white/10 text-white/60'}`}>
                {new Date(task.due) < new Date() ? 'Overdue' : new Date(task.due).toLocaleDateString()}
              </span>
            )}
          </div>
          {task.desc && (
            <p className="text-sm text-white/50 mb-4 whitespace-pre-wrap line-clamp-2">
              {task.desc}
            </p>
          )}
          
          <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/5">
            <div className="text-xs text-white/40">
              {task.badges?.checkItems > 0 && (
                <span className="flex items-center gap-1">
                  <Check size={12} />
                  {task.badges.checkItemsChecked}/{task.badges.checkItems}
                </span>
              )}
            </div>
            <a 
              href={task.shortUrl} 
              target="_blank" 
              rel="noreferrer"
              className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors opacity-0 group-hover:opacity-100"
            >
              <ExternalLink size={12} /> Open Trello
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
