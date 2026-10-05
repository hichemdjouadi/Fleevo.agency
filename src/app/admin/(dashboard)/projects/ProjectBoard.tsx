'use client';

import { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from '@hello-pangea/dnd';
import { ProjectCard } from './ProjectCard';
import { updateProjectStatus } from '../../actions';
import { toast } from 'sonner';

const statuses = ['Not Started', 'In Progress', 'Client Review', 'Completed'];

export function ProjectBoard({ initialProjects }: { initialProjects: any[] }) {
  const [projects, setProjects] = useState(initialProjects);

  const onDragEnd = async (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;
    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    const newStatus = destination.droppableId;
    
    // Optimistic update
    const projectIndex = projects.findIndex(p => p.id === draggableId);
    if (projectIndex === -1) return;

    const updatedProject = { ...projects[projectIndex], status: newStatus };
    const newProjects = [...projects];
    newProjects.splice(projectIndex, 1);
    
    newProjects.push(updatedProject);
    setProjects(newProjects);

    try {
      await updateProjectStatus(draggableId, newStatus);
      toast.success(`Project moved to ${newStatus}`);
    } catch (e) {
      toast.error('Failed to move project');
      setProjects(initialProjects);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="flex gap-6 h-full min-w-max">
        {statuses.map(status => {
          const columnProjects = projects.filter(p => p.status === status);
          
          return (
            <div key={status} className="w-80 flex flex-col h-full bg-[#0a0a0a] rounded-3xl border border-white/5">
              <div className="p-5 pb-3 flex justify-between items-center shrink-0 border-b border-white/5">
                <h2 className="font-medium flex items-center gap-2">
                  {status}
                  <span className="text-xs bg-white/10 text-white/60 px-2 py-0.5 rounded-full">{columnProjects.length}</span>
                </h2>
              </div>
              
              <Droppable droppableId={status}>
                {(provided, snapshot) => (
                  <div 
                    ref={provided.innerRef} 
                    {...provided.droppableProps}
                    className={`flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar transition-colors ${snapshot.isDraggingOver ? 'bg-white/[0.02]' : ''}`}
                  >
                    {columnProjects.length === 0 && !snapshot.isDraggingOver ? (
                      <div className="text-center text-white/30 text-sm py-8 border border-dashed border-white/10 rounded-xl">
                        Drop here
                      </div>
                    ) : null}

                    {columnProjects.map((project, index) => (
                      <Draggable key={project.id} draggableId={project.id} index={index}>
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`${snapshot.isDragging ? 'opacity-80 rotate-2 scale-105 shadow-2xl' : ''}`}
                            style={{ ...provided.draggableProps.style }}
                          >
                            <ProjectCard project={project} hideStatusSelect={true} />
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
