'use client';

import { useState, useEffect } from 'react';
import { Command } from 'cmdk';
import { useRouter } from 'next/navigation';
import { Search, Briefcase, Lightbulb, Users, PenTool, LayoutDashboard } from 'lucide-react';
import { supabase } from '@/lib/supabase';

// We need a browser client to fetch search data. Let's build a simple search component.
// Instead of fetching on every keystroke, we can fetch all basic metadata on mount 
// because it's a solo agency dashboard (small data volume).

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [leads, setLeads] = useState<any[]>([]);
  const [projects, setProjects] = useState<any[]>([]);
  const [ideas, setIdeas] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  useEffect(() => {
    if (open) {
      // Fetch data for palette
      const fetchData = async () => {
        // We will just use the standard fetch API for server actions or browser client
        const res = await fetch('/api/search');
        if (res.ok) {
          const data = await res.json();
          setLeads(data.leads || []);
          setProjects(data.projects || []);
          setIdeas(data.ideas || []);
        }
      };
      fetchData();
    }
  }, [open]);

  const runCommand = (command: () => void) => {
    setOpen(false);
    command();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-32">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
      
      <Command 
        className="relative w-full max-w-2xl bg-[#111111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        shouldFilter={true}
      >
        <div className="flex items-center px-4 py-3 border-b border-white/10">
          <Search size={18} className="text-white/40 mr-3 shrink-0" />
          <Command.Input 
            placeholder="Search leads, projects, ideas, or commands..." 
            className="flex-1 bg-transparent text-white focus:outline-none placeholder:text-white/30 text-sm"
            autoFocus
          />
          <div className="text-[10px] text-white/30 tracking-widest uppercase border border-white/10 px-1.5 py-0.5 rounded">ESC</div>
        </div>

        <Command.List className="max-h-[400px] overflow-y-auto custom-scrollbar p-2">
          <Command.Empty className="py-12 text-center text-sm text-white/40">No results found.</Command.Empty>

          <Command.Group heading="Navigation" className="text-xs text-white/40 px-2 py-1.5 font-medium tracking-wide">
            <Command.Item 
              onSelect={() => runCommand(() => router.push('/admin'))}
              className="flex items-center gap-3 px-3 py-2.5 rounded-xl cursor-pointer aria-selected:bg-white/10 aria-selected:text-white text-white/80 transition-colors mt-1"
            >
              <LayoutDashboard size={14} /> Morning Briefing
            </Command.Item>
          </Command.Group>

          {leads.length > 0 && (
            <Command.Group heading="Leads (CRM)" className="text-xs text-white/40 px-2 py-1.5 font-medium tracking-wide mt-2">
              {leads.map(lead => (
                <Command.Item 
                  key={lead.id} 
                  value={`lead ${lead.business_name}`}
                  onSelect={() => runCommand(() => router.push('/admin/leads'))}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer aria-selected:bg-white/10 aria-selected:text-white text-white/80 transition-colors mt-1"
                >
                  <div className="flex items-center gap-3"><Users size={14} className="text-blue-400" /> {lead.business_name}</div>
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/5">{lead.status}</span>
                </Command.Item>
              ))}
            </Command.Group>
          )}

          {projects.length > 0 && (
            <Command.Group heading="Projects" className="text-xs text-white/40 px-2 py-1.5 font-medium tracking-wide mt-2">
              {projects.map(proj => (
                <Command.Item 
                  key={proj.id} 
                  value={`project ${proj.client_name}`}
                  onSelect={() => runCommand(() => router.push('/admin/projects'))}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer aria-selected:bg-white/10 aria-selected:text-white text-white/80 transition-colors mt-1"
                >
                  <div className="flex items-center gap-3"><Briefcase size={14} className="text-purple-400" /> {proj.client_name}</div>
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/5">{proj.status}</span>
                </Command.Item>
              ))}
            </Command.Group>
          )}

          {ideas.length > 0 && (
            <Command.Group heading="Ideas" className="text-xs text-white/40 px-2 py-1.5 font-medium tracking-wide mt-2">
              {ideas.map(idea => (
                <Command.Item 
                  key={idea.id} 
                  value={`idea ${idea.title}`}
                  onSelect={() => runCommand(() => router.push('/admin/ideas'))}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl cursor-pointer aria-selected:bg-white/10 aria-selected:text-white text-white/80 transition-colors mt-1"
                >
                  <div className="flex items-center gap-3"><Lightbulb size={14} className="text-yellow-400" /> {idea.title}</div>
                  <span className="text-[10px] px-2 py-0.5 rounded-md bg-white/5">{idea.category}</span>
                </Command.Item>
              ))}
            </Command.Group>
          )}

        </Command.List>
      </Command>
    </div>
  );
}

