'use client';

import { useTransition, useRef } from 'react';
import { toast } from 'sonner';
import { Plus } from 'lucide-react';

export function IdeaForm({ action }: { action: (data: FormData) => Promise<void> }) {
  const [isPending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      await action(formData);
      formRef.current?.reset();
      toast.success('Idea saved to vault');
    });
  };

  return (
    <aside className="w-full md:w-80">
      <div className="bg-[#111111] border border-white/10 rounded-3xl p-6 sticky top-12">
        <h3 className="font-medium mb-6 flex items-center gap-2"><Plus size={16} /> New Idea</h3>
        <form ref={formRef} action={handleSubmit} className="space-y-4">
          <div>
            <input name="title" placeholder="Idea Title" required className="w-full bg-black border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-white/30" />
          </div>
          <div>
            <select name="category" className="w-full bg-black border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-white/30">
              <option value="Template Idea">Template Idea</option>
              <option value="Marketing">Marketing</option>
              <option value="Future Venture">Future Venture</option>
              <option value="General">General</option>
            </select>
          </div>
          <div>
            <textarea name="description" placeholder="Description & Notes" rows={4} className="w-full bg-black border border-white/10 rounded-xl p-3 text-sm text-white focus:outline-none focus:border-white/30"></textarea>
          </div>
          <button type="submit" disabled={isPending} className="w-full bg-white text-black font-medium p-3 rounded-xl hover:bg-white/90 transition-colors text-sm disabled:opacity-50">
            {isPending ? 'Saving...' : 'Save Idea'}
          </button>
        </form>
      </div>
    </aside>
  );
}
