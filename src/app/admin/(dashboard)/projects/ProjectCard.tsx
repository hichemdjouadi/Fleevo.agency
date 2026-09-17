'use client';

import { useState, useTransition } from 'react';
import { updateProjectStatus, deleteProject } from '../../actions';
import { Calendar, AlertTriangle, Trash2 } from 'lucide-react';

export function ProjectCard({ project }: { project: any }) {
  const [isPending, startTransition] = useTransition();
  const [isExpanded, setIsExpanded] = useState(false);

  const statuses = ['Not Started', 'In Progress', 'Client Review', 'Completed'];

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    startTransition(() => {
      updateProjectStatus(project.id, e.target.value);
    });
  };

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this project?')) {
      startTransition(() => {
        deleteProject(project.id);
      });
    }
  };

  // Going Cold logic (if not completed and not updated in 7 days)
  const now = new Date();
  const lastUpdated = project.last_updated_at ? new Date(project.last_updated_at) : new Date(project.created_at);
  const diffTime = Math.abs(now.getTime() - lastUpdated.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  const isGoingCold = diffDays > 7 && project.status !== 'Completed';

  return (
    <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 transition-all">
      <div className="flex justify-between items-start">
        <div className="flex-1 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
          <div className="flex items-center gap-3 mb-1">
            <h3 className="font-medium text-xl">{project.client_name}</h3>
            <span className="text-sm px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/60">
              {project.project_type || 'General'}
            </span>
            {isGoingCold && (
              <span className="flex items-center gap-1 text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded-full">
                <AlertTriangle size={12} />
                Idle ({diffDays}d)
              </span>
            )}
          </div>
          <div className="flex items-center gap-4 text-sm text-white/50">
            {project.due_date && (
              <span className="flex items-center gap-1">
                <Calendar size={14} /> Due {new Date(project.due_date).toLocaleDateString()}
              </span>
            )}
            <span>Added {new Date(project.created_at).toLocaleDateString()}</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <select 
            value={project.status}
            onChange={handleStatusChange}
            disabled={isPending}
            className="bg-black border border-white/20 rounded-lg px-3 py-1.5 text-sm outline-none focus:border-white/50"
          >
            {statuses.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      {isExpanded && (
        <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2">
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/40 mb-2">Project Notes</h4>
            <div className="bg-black/50 p-4 rounded-xl text-sm min-h-[100px] border border-white/5 whitespace-pre-wrap">
              {project.notes || 'No notes added yet.'}
            </div>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/40 mb-2">Actions</h4>
            <div className="bg-black/50 p-4 rounded-xl text-sm border border-white/5 flex flex-col gap-2">
              <button 
                onClick={handleDelete}
                disabled={isPending}
                className="flex items-center gap-2 text-red-400 hover:bg-red-400/10 px-3 py-2 rounded-lg transition-colors w-full text-left"
              >
                <Trash2 size={16} /> Delete Project
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
