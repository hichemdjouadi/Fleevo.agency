'use client';

import { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import { LeadCard } from './LeadCard';
import { updateLeadStatus } from '../../actions';
import { toast } from 'sonner';

const statuses = ['New', 'Contacted', 'In Discussion', 'Won', 'Lost'];

export function LeadBoard({ initialLeads }: { initialLeads: any[] }) {
  const [leads, setLeads] = useState(initialLeads);

  const onDragEnd = async (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    const newStatus = destination.droppableId;
    
    // Optimistic update
    const leadIndex = leads.findIndex(l => l.id === draggableId);
    if (leadIndex === -1) return;

    const updatedLead = { ...leads[leadIndex], status: newStatus };
    const newLeads = [...leads];
    newLeads.splice(leadIndex, 1);
    
    // Find the right place to insert in the array based on destination index.
    // Actually, just changing the status is enough since we map by status.
    // The exact visual order might shuffle slightly unless we sort, but this is simple kanban.
    newLeads.push(updatedLead);
    setLeads(newLeads);

    try {
      await updateLeadStatus(draggableId, newStatus);
      toast.success(`Lead moved to ${newStatus}`);
    } catch (e) {
      toast.error('Failed to move lead');
      setLeads(initialLeads); // Revert on failure
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex gap-6 h-full min-w-max">
        {statuses.map(status => {
          const columnLeads = leads.filter(l => l.status === status);
          
          return (
            <div key={status} className="w-80 flex flex-col h-full bg-[#0a0a0a] rounded-3xl border border-white/5">
              <div className="p-5 pb-3 flex justify-between items-center shrink-0 border-b border-white/5">
                <h2 className="font-medium flex items-center gap-2">
                  {status}
                  <span className="text-xs bg-white/10 text-white/60 px-2 py-0.5 rounded-full">{columnLeads.length}</span>
                </h2>
              </div>
              
              <Droppable droppableId={status}>
                {(provided, snapshot) => (
                  <div 
                    ref={provided.innerRef} 
                    {...provided.droppableProps}
                    className={`flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar transition-colors ${snapshot.isDraggingOver ? 'bg-white/[0.02]' : ''}`}
                  >
                    {columnLeads.length === 0 && !snapshot.isDraggingOver ? (
                      <div className="text-center text-white/30 text-sm py-8 border border-dashed border-white/10 rounded-xl">
                        Drop here
                      </div>
                    ) : null}

                    {columnLeads.map((lead, index) => (
                      <Draggable key={lead.id} draggableId={lead.id} index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`${snapshot.isDragging ? 'opacity-80 rotate-2 scale-105 shadow-2xl' : ''}`}
                            style={{ ...provided.draggableProps.style }}
                          >
                            <LeadCard lead={lead} hideStatusSelect={true} />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          );
        })}
      </div>
    </DragDropContext>
  );
}
