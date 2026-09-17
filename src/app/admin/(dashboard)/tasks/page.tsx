import { getTrelloTasks } from '@/lib/trello';
import { ExternalLink, CheckSquare } from 'lucide-react';

export default async function TaskHubPage() {
  const tasks = await getTrelloTasks();

  return (
    <div className="max-w-5xl mx-auto">
      <header className="mb-10">
        <h1 className="text-3xl tracking-tighter font-medium mb-2">Task Hub</h1>
        <p className="text-white/60">Live sync with your Trello boards.</p>
      </header>

      {(!tasks || tasks.length === 0) ? (
        <div className="p-12 text-center text-white/40 border border-white/10 rounded-3xl bg-[#111111]">
          No active tasks found in Trello, or credentials are missing/invalid in .env.local.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tasks.map((task: any) => (
            <div key={task.id} className="bg-[#111111] border border-white/10 rounded-2xl p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-medium text-lg">{task.name}</h3>
                {task.due && (
                  <span className={`text-xs px-2 py-1 rounded-full border ${new Date(task.due) < new Date() ? 'bg-red-500/10 text-red-400 border-red-500/20' : 'bg-white/5 border-white/10 text-white/60'}`}>
                    Due {new Date(task.due).toLocaleDateString()}
                  </span>
                )}
              </div>
              <p className="text-sm text-white/60 mb-6 whitespace-pre-wrap line-clamp-3">
                {task.desc || 'No description provided.'}
              </p>
              
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/5">
                <div className="flex items-center gap-4 text-xs text-white/40">
                  {task.badges?.checkItems > 0 && (
                    <span className="flex items-center gap-1">
                      <CheckSquare size={12} />
                      {task.badges.checkItemsChecked}/{task.badges.checkItems}
                    </span>
                  )}
                </div>
                <a 
                  href={task.shortUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <ExternalLink size={14} /> Open in Trello
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
