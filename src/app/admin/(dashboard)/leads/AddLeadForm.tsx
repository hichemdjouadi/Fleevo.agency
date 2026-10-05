'use client';

import { useTransition, useRef, useState } from 'react';
import { Plus } from 'lucide-react';
import { toast } from 'sonner';

export function AddLeadForm({ action }: { action: (data: FormData) => Promise<void> }) {
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      await action(formData);
      formRef.current?.reset();
      setIsOpen(false);
      toast.success('Lead added to CRM');
    });
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => setIsOpen(true)}
        className="bg-white text-black font-medium px-4 py-2 rounded-xl hover:bg-white/90 transition-colors flex items-center gap-2 text-sm shadow-[0_0_20px_rgba(255,255,255,0.1)]"
      >
        <Plus size={16} /> Add Lead
      </button>
    );
  }

  return (
    <form ref={formRef} action={handleSubmit} className="bg-[#111111] p-4 rounded-2xl border border-white/10 flex gap-2 items-center">
      <input name="business_name" placeholder="Client/Business Name" required className="bg-black border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-white/30 w-48 transition-colors placeholder:text-white/20" />
      <input name="contact_email" type="email" placeholder="Email" required className="bg-black border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-white/30 w-48 transition-colors placeholder:text-white/20" />
      <input name="niche" placeholder="Niche (e.g. Dental)" className="bg-black border border-white/10 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:border-white/30 w-36 transition-colors placeholder:text-white/20 hidden md:block" />
      
      <button type="submit" disabled={isPending} className="bg-white text-black font-medium px-4 py-2 rounded-xl hover:bg-white/90 transition-colors text-sm disabled:opacity-50">
        {isPending ? 'Adding...' : 'Save'}
      </button>
      <button type="button" onClick={() => setIsOpen(false)} className="text-white/40 hover:text-white px-2 py-2 text-sm transition-colors">
        Cancel
      </button>
    </form>
  );
}
