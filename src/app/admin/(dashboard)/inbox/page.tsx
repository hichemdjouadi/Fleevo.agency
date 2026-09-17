import { createClient } from '@/lib/supabase-server';
import { MessageCard } from './MessageCard';

export default async function InboxPage() {
  const supabase = await createClient();
  const { data: messages } = await supabase
    .from('messages')
    .select('*')
    .order('created_at', { ascending: false });

  const unreadCount = messages?.filter(m => !m.is_read).length || 0;

  return (
    <div className="max-w-4xl mx-auto">
      <header className="mb-10 flex justify-between items-end">
        <div>
          <h1 className="text-3xl tracking-tighter font-medium mb-2">Inbox</h1>
          <p className="text-white/60">Contact form submissions from your website.</p>
        </div>
        <div className="text-sm bg-white/10 px-3 py-1 rounded-full">
          {unreadCount} unread
        </div>
      </header>

      <div className="border border-white/10 rounded-3xl overflow-hidden bg-black">
        {messages?.length === 0 ? (
          <div className="p-12 text-center text-white/40">
            No messages in your inbox.
          </div>
        ) : (
          messages?.map((message) => (
            <MessageCard key={message.id} message={message} />
          ))
        )}
      </div>
    </div>
  );
}
