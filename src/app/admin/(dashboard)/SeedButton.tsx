'use client';

import { useTransition } from 'react';
import { toast } from 'sonner';
import { seedAction } from '../actions';

export function SeedButton() {
  const [isPending, startTransition] = useTransition();

  const handleSeed = () => {
    startTransition(async () => {
      await seedAction();
      toast.success('Test data seeded successfully!');
    });
  };

  return (
    <button 
      onClick={handleSeed}
      disabled={isPending}
      className="text-xs bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full transition-colors border border-white/10 disabled:opacity-50"
    >
      {isPending ? 'Seeding...' : '+ Seed Test Data'}
    </button>
  );
}
