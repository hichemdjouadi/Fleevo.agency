import { createClient } from '@/lib/supabase-server';
import { ProjectCard } from './ProjectCard';

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: { status?: string };
}) {
  const supabase = await createClient();
  
  let query = supabase.from('projects').select('*').order('created_at', { ascending: false });
  
  if (searchParams.status) {
    query = query.eq('status', searchParams.status);
  }

  const { data: projects } = await query;

  const statuses = ['All', 'Not Started', 'In Progress', 'Client Review', 'Completed'];

  return (
    <div className="max-w-5xl mx-auto">
      <header className="mb-10 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
        <div>
          <h1 className="text-3xl tracking-tighter font-medium mb-2">Active Projects</h1>
          <p className="text-white/60">Track your ongoing client delivery.</p>
        </div>
        
        <div className="flex gap-2 bg-[#111111] p-1 rounded-lg border border-white/10 overflow-x-auto">
          {statuses.map(status => {
            const isActive = searchParams.status === status || (!searchParams.status && status === 'All');
            return (
              <a 
                key={status}
                href={status === 'All' ? '/admin/projects' : `/admin/projects?status=${status}`}
                className={`px-4 py-1.5 rounded-md text-sm whitespace-nowrap transition-colors ${isActive ? 'bg-white/10 text-white font-medium' : 'text-white/50 hover:text-white'}`}
              >
                {status}
              </a>
            );
          })}
        </div>
      </header>

      <div className="space-y-4">
        {projects?.length === 0 ? (
          <div className="p-12 text-center text-white/40 border border-white/10 rounded-3xl bg-[#111111]">
            No projects found in this stage.
          </div>
        ) : (
          projects?.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))
        )}
      </div>
    </div>
  );
}
