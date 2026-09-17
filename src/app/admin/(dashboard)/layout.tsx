import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase-server';
import Link from 'next/link';
import { 
  LayoutDashboard, 
  Inbox, 
  Users, 
  Briefcase, 
  CheckSquare, 
  Calendar, 
  Lightbulb, 
  PenTool, 
  Wrench,
  LogOut
} from 'lucide-react';
import { SignOutButton } from './SignOutButton';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) {
    redirect('/admin/login');
  }

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

  return (
    <div className="min-h-screen bg-[#000000] text-white flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 flex flex-col fixed h-full bg-[#000000] z-10">
        <div className="p-8 border-b border-white/10">
          <h1 className="text-xl tracking-tighter font-medium">Command Center</h1>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-6 flex flex-col gap-2 px-4">
          {navItems.map((item) => (
            <Link 
              key={item.href} 
              href={item.href}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-white/60 hover:text-white hover:bg-white/5 transition-colors"
            >
              <item.icon size={18} />
              <span className="text-sm font-medium">{item.label}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-white/10">
          <SignOutButton />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64 p-12">
        {children}
      </main>
    </div>
  );
}
