'use client';

import { LogOut } from 'lucide-react';
import { createBrowserClient } from '@supabase/ssr';
import { useRouter } from 'next/navigation';

const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export function SignOutButton() {
  const router = useRouter();

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push('/admin/login');
    router.refresh();
  };

  return (
    <button 
      onClick={handleSignOut}
      className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-white/60 hover:text-red-400 hover:bg-red-400/10 transition-colors"
    >
      <LogOut size={18} />
      <span className="text-sm font-medium">Sign Out</span>
    </button>
  );
}
