'use client';

import { useState } from 'react';
import { 
  format, addMonths, subMonths, startOfMonth, endOfMonth, 
  startOfWeek, endOfWeek, isSameMonth, isSameDay, addDays, isToday 
} from 'date-fns';
import { ChevronLeft, ChevronRight, Briefcase, Lightbulb, PenTool } from 'lucide-react';

export function CalendarGrid({ items }: { items: any[] }) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
  const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));
  const goToday = () => setCurrentDate(new Date());

  const monthStart = startOfMonth(currentDate);
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);

  const days = [];
  let day = startDate;
  
  while (day <= endDate) {
    days.push(day);
    day = addDays(day, 1);
  }

  const getDayItems = (date: Date) => {
    return items.filter(item => isSameDay(item.date, date));
  };

  const getIcon = (type: string) => {
    if (type === 'project') return <Briefcase size={12} />;
    if (type === 'idea') return <Lightbulb size={12} />;
    return <PenTool size={12} />;
  };

  const getColor = (type: string) => {
    if (type === 'project') return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    if (type === 'idea') return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
    return 'bg-pink-500/20 text-pink-400 border-pink-500/30';
  };

  return (
    <div className="bg-[#111111] border border-white/10 rounded-3xl overflow-hidden">
      {/* Header */}
      <div className="flex justify-between items-center p-6 border-b border-white/10">
        <h2 className="text-xl font-medium tracking-tight">
          {format(currentDate, 'MMMM yyyy')}
        </h2>
        <div className="flex items-center gap-2">
          <button onClick={goToday} className="text-xs bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full transition-colors mr-2">
            Today
          </button>
          <button onClick={prevMonth} className="p-1.5 hover:bg-white/10 rounded-full transition-colors">
            <ChevronLeft size={20} />
          </button>
          <button onClick={nextMonth} className="p-1.5 hover:bg-white/10 rounded-full transition-colors">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Weekdays */}
      <div className="grid grid-cols-7 border-b border-white/10 bg-black/20">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
          <div key={day} className="text-center text-xs tracking-wider uppercase text-white/40 py-3 font-medium">
            {day}
          </div>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-7">
        {days.map((day, idx) => {
          const dayItems = getDayItems(day);
          const isCurrentMonth = isSameMonth(day, monthStart);
          const isCurrentDay = isToday(day);

          return (
            <div 
              key={day.toISOString()} 
              className={`min-h-[120px] p-2 border-r border-b border-white/5 transition-colors
                ${!isCurrentMonth ? 'bg-black/50 opacity-50' : 'hover:bg-white/[0.02]'}
                ${idx % 7 === 6 ? 'border-r-0' : ''}
              `}
            >
              <div className="flex justify-between items-start mb-2">
                <span className={`text-sm w-7 h-7 flex items-center justify-center rounded-full
                  ${isCurrentDay ? 'bg-white text-black font-medium' : 'text-white/60'}
                `}>
                  {format(day, 'd')}
                </span>
              </div>
              <div className="flex flex-col gap-1.5 mt-2">
                {dayItems.map(item => (
                  <div 
                    key={item.id} 
                    className={`text-[10px] flex items-center gap-1.5 px-2 py-1 rounded-md border truncate ${getColor(item.type)}`}
                    title={item.title}
                  >
                    {getIcon(item.type)}
                    <span className="truncate font-medium">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
