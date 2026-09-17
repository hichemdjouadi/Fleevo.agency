'use client';

import { useState, useTransition } from 'react';
import { Mail, MailOpen, Trash2 } from 'lucide-react';
import { markMessageRead, deleteMessage } from '../../actions';

export function MessageCard({ message }: { message: any }) {
  const [isPending, startTransition] = useTransition();

  const handleToggleRead = () => {
    startTransition(() => {
      markMessageRead(message.id, !message.is_read);
    });
  };

  const handleDelete = () => {
    if (confirm('Are you sure you want to delete this message?')) {
      startTransition(() => {
        deleteMessage(message.id);
      });
    }
  };

  return (
    <div className={`p-6 border-b border-white/10 transition-colors ${message.is_read ? 'bg-transparent opacity-60' : 'bg-[#111111]'}`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-medium text-lg">{message.sender_name}</h3>
          <p className="text-sm text-white/60">{message.sender_email}</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-white/40 mr-4">
            {new Date(message.created_at).toLocaleDateString()}
          </span>
          <button 
            onClick={handleToggleRead}
            disabled={isPending}
            className="p-2 hover:bg-white/10 rounded-full transition-colors disabled:opacity-50"
            title={message.is_read ? 'Mark as unread' : 'Mark as read'}
          >
            {message.is_read ? <MailOpen size={16} /> : <Mail size={16} />}
          </button>
          <button 
            onClick={handleDelete}
            disabled={isPending}
            className="p-2 hover:bg-red-500/20 hover:text-red-400 rounded-full transition-colors disabled:opacity-50 text-white/40"
            title="Delete message"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
      <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.message_body}</p>
    </div>
  );
}
