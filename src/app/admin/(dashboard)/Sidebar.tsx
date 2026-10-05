'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, Inbox, Users, Briefcase, CheckSquare, 
  Calendar, Lightbulb, PenTool, Wrench, Menu, X
} from 'lucide-react';
import { SignOutButton } from './SignOutButton';

const navItems = [
  { label: 'Morning Briefing', href: '/admin', icon: LayoutDashboard },
  { label: 'Inbox', href: '/admin/inbox', icon: Inbox },
  { label: 'CRM', href: '/admin/leads', icon: Users },
  { label: 'Active Projects', href: '/admin/projects', icon: Briefcase },
  { label: 'Task Hub', href: '/admin/tasks', icon: CheckSquare },
  { label: 'Timeline', href: '/admin/timeline', icon: Calendar },
  { label: 'Idea Vault', href: '/admin/ideas', icon: Lightbulb },
  { label: 'Content Planner', href: '/admin/content', icon: PenTool },
  { label: 'Toolbox', href: '/admin/toolbox', icon: Wrench },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 h-16 bg-[#0a0a0a] border-b border-white/10 z-50 flex items-center justify-between px-6">
        <h1 className="text-xl font-bold tracking-tight">Fleevo.</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="text-white/80 p-2 -mr-2">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-40 w-64 bg-[#0a0a0a] border-r border-white/10 flex flex-col 
        transition-transform duration-300 ease-in-out md:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="h-16 md:h-auto p-8 border-b border-white/10 flex items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight hidden md:block">Fleevo.</h1>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-6 flex flex-col gap-2 px-4">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.href} 
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-colors ${
                  isActive 
                    ? 'bg-white/10 text-white font-medium' 
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                <item.icon size={18} />
                <span className="text-sm">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <SignOutButton />
        </div>
      </aside>
    </>
  );
}
