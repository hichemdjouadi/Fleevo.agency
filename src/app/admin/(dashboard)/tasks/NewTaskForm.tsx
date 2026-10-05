'use client';

import { useTransition, useRef } from 'react';
import { toast } from 'sonner';
import { Plus } from 'lucide-react';
import { addTaskAction } from '../../actions';

export function NewTaskForm() {
  const [isPending, startTransition] = useTransition();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (formData: FormData) => {
    startTransition(async () => {
      await addTaskAction(formData);
      formRef.current?.reset();
      toast.success('Task added to Trello');
    });
  };

  return (
    <form ref={formRef} action={handleSubmit} className="mb-8 flex gap-3">
      <input 
        name="taskName" 
        placeholder="Add a new task..." 
        required 
        autoComplete="off"
        className="flex-1 bg-black border border-white/10 rounded-xl p-4 text-sm text-white focus:outline-none focus:border-white/30" 
      />
      <button 
        type="submit" 
        disabled={isPending} 
        className="bg-white text-black font-medium px-6 rounded-xl hover:bg-white/90 transition-colors flex items-center gap-2 disabled:opacity-50"
      >
        <Plus size={16} /> {isPending ? 'Adding...' : 'Add'}
      </button>
    </form>
  );
}
