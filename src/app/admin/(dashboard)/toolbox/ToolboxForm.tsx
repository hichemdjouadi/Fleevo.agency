'use client';

import { useTransition, useRef, useState } from 'react';
import { Plus } from 'lucide-react';
import { toast } from 'sonner';

export function ToolboxForm({ action }: { action: (data: FormData) => Promise<void> }) {
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      await action(formData);
      formRef.current?.reset();
      setIsOpen(false);
      toast.success('Resource added to toolbox');
    });
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="bg-white text-black font-medium px-4 py-2 rounded-xl hover:bg-white/90 transition-colors flex items-center gap-2 text-sm"
      >
        <Plus size={16} /> Add Resource
      </button>
    );
  }

  return (
    <form ref={formRef} action={handleSubmit} className="bg-[#111111] p-4 rounded-2xl border border-white/10 flex gap-2 items-center">
      <input name="title" placeholder="Tool Name" required className="bg-black border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-white/30 w-40" />
      <input name="url" placeholder="https://..." required className="bg-black border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-white/30 w-48" />
      <select name="category" className="bg-black border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-white/30 w-40">
        <option value="Design Inspiration">Design Inspiration</option>
        <option value="Dev Tools">Dev Tools</option>
        <option value="Hosting">Hosting</option>
        <option value="Fonts">Fonts</option>
        <option value="Stock Assets">Stock Assets</option>
        <option value="Other">Other</option>
      </select>
      <input name="description" placeholder="Short description (optional)" className="bg-black border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-white/30 w-48 hidden md:block" />
      
      <button type="submit" disabled={isPending} className="bg-white text-black font-medium px-4 py-2 rounded-xl hover:bg-white/90 transition-colors text-sm disabled:opacity-50">
        {isPending ? 'Adding...' : 'Save'}
      </button>
      <button type="button" onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white px-2 py-2">
        Cancel
      </button>
    </form>
  );
}
