'use client';

import { useState, useTransition } from 'react';
import { updateLeadStatus, logLeadContact } from '../../actions';
import { ExternalLink, Mail, Clock, AlertTriangle } from 'lucide-react';

export function LeadCard({ lead }: { lead: any }) {
  const [isPending, startTransition] = useTransition();
  const [isExpanded, setIsExpanded] = useState(false);

  const statuses = ['New', 'Contacted', 'In Discussion', 'Won', 'Lost'];

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    startTransition(() => {
      updateLeadStatus(lead.id, e.target.value);
    });
  };

  const handleLogContact = () => {
    startTransition(() => {
      logLeadContact(lead.id);
    });
  };

  // Going Cold logic
  const now = new Date();
  const lastContactDate = lead.last_contacted_at ? new Date(lead.last_contacted_at) : new Date(lead.created_at);
  const diffTime = Math.abs(now.getTime() - lastContactDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
  const isGoingCold = diffDays > 7 && lead.status !== 'Won' && lead.status !== 'Lost';

  return (
    <div className="bg-[#111111] border border-white/10 rounded-2xl p-6 transition-all">
      <div className="flex justify-between items-start">
        <div className="flex-1 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
          <div className="flex items-center gap-3 mb-1">
            <h3 className="font-medium text-xl">{lead.business_name}</h3>
            {isGoingCold && (
              <span className="flex items-center gap-1 text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded-full">
                <AlertTriangle size={12} />
                Going Cold ({diffDays}d)
              </span>
            )}
          </div>
          <div className="flex items-center gap-4 text-sm text-white/50">
            <span>{lead.niche || 'No niche'}</span>
            <span className="flex items-center gap-1"><Mail size={14} /> {lead.contact_email}</span>
            {lead.website_url && (
              <a href={lead.website_url.startsWith('http') ? lead.website_url : `https://${lead.website_url}`} target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-white transition-colors" onClick={(e) => e.stopPropagation()}>
                <ExternalLink size={14} /> Website
              </a>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3">
          <select 
            value={lead.status}
            onChange={handleStatusChange}
            disabled={isPending}
            className="bg-black border border-white/20 rounded-lg px-3 py-1.5 text-sm outline-none focus:border-white/50"
          >
            {statuses.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>

      {isExpanded && (
        <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/40 mb-2">Notes & Details</h4>
            <div className="bg-black/50 p-4 rounded-xl text-sm min-h-[100px] border border-white/5 whitespace-pre-wrap">
              {lead.notes || 'No notes added yet.'}
            </div>
          </div>
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase text-white/40 mb-2">Activity</h4>
            <div className="bg-black/50 p-4 rounded-xl text-sm border border-white/5 flex flex-col gap-4">
              <div>
                <div className="text-white/40 text-xs mb-1">Added</div>
                <div>{new Date(lead.created_at).toLocaleDateString()}</div>
              </div>
              <div>
                <div className="text-white/40 text-xs mb-1">Last Contacted</div>
                <div className="flex items-center justify-between">
                  <span>{lead.last_contacted_at ? new Date(lead.last_contacted_at).toLocaleDateString() : 'Never'}</span>
                  <button 
                    onClick={handleLogContact}
                    disabled={isPending}
                    className="text-xs bg-white/10 hover:bg-white/20 px-2 py-1 rounded transition-colors"
                  >
                    Log Today
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
