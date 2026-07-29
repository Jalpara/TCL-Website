'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { CalendarIcon, List, Grid, MapPin, Clock } from 'lucide-react';
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay } from 'date-fns';

interface EventItem {
  id: string;
  date: string;
  title: string;
  loc: string;
  time: string;
  slug: string;
}

export default function EventsClient({ events: rawEvents }: { events: EventItem[] }) {
  const [view, setView] = useState<'grid' | 'list' | 'calendar'>('grid');

  // Parse dates from serialized props
  const events = rawEvents.map(e => ({ ...e, date: new Date(e.date) }));

  const today = new Date();
  const monthStart = startOfMonth(today);
  const monthEnd = endOfMonth(today);
  const daysInMonth = eachDayOfInterval({ start: monthStart, end: monthEnd });

  return (
    <div className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <div>
            <h1 className="font-serif text-4xl font-bold mb-2">Upcoming Events</h1>
            <p className="text-gray-500 font-medium">Join us in our upcoming initiatives.</p>
          </div>
          <div className="flex bg-gray-100 p-1 rounded-xl">
            <button onClick={() => setView('grid')} className={`p-2.5 rounded-lg transition-colors ${view === 'grid' ? 'bg-white shadow-sm text-brand-dark' : 'text-gray-500 hover:text-gray-900'}`}><Grid size={20} strokeWidth={2.5} /></button>
            <button onClick={() => setView('list')} className={`p-2.5 rounded-lg transition-colors ${view === 'list' ? 'bg-white shadow-sm text-brand-dark' : 'text-gray-500 hover:text-gray-900'}`}><List size={20} strokeWidth={2.5} /></button>
            <button onClick={() => setView('calendar')} className={`p-2.5 rounded-lg transition-colors ${view === 'calendar' ? 'bg-white shadow-sm text-brand-dark' : 'text-gray-500 hover:text-gray-900'}`}><CalendarIcon size={20} strokeWidth={2.5} /></button>
          </div>
        </div>

        {view === 'grid' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <Link href={`/events/${event.slug}`} key={event.id} className="block group">
                <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all">
                  <div className="h-48 bg-[#f3f4f6] relative flex items-center justify-center text-gray-300">
                     <CalendarIcon size={64} strokeWidth={1} />
                     <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2 text-center shadow-sm border border-white">
                       <span className="block font-bold text-2xl leading-none text-brand-dark">{format(event.date, 'dd')}</span>
                       <span className="block font-bold text-[10px] uppercase text-gray-500 mt-1 tracking-widest">{format(event.date, 'MMM')}</span>
                     </div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-bold font-serif text-xl mb-4 group-hover:text-brand-dark transition-colors">{event.title}</h3>
                    <div className="flex flex-col gap-3 text-sm font-medium text-gray-600">
                      <div className="flex items-center gap-3"><MapPin size={18} className="text-gray-400" /> {event.loc}</div>
                      <div className="flex items-center gap-3"><Clock size={18} className="text-gray-400" /> {event.time}</div>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {view === 'list' && (
          <div className="flex flex-col gap-4">
            {events.map((event) => (
              <Link href={`/events/${event.slug}`} key={event.id} className="block group">
                <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col sm:flex-row items-center">
                  <div className="w-full sm:w-48 bg-gray-50 p-8 flex flex-col justify-center items-center sm:border-r border-gray-100 text-center">
                    <span className="font-serif font-bold text-5xl text-brand-dark">{format(event.date, 'dd')}</span>
                    <span className="font-bold text-sm uppercase text-gray-500 mt-2 tracking-widest">{format(event.date, 'MMM yyyy')}</span>
                  </div>
                  <div className="p-8 flex-1 flex flex-col md:flex-row md:items-center justify-between w-full">
                    <div>
                      <h3 className="font-bold font-serif text-2xl mb-4 group-hover:text-brand-dark transition-colors">{event.title}</h3>
                      <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-gray-600">
                        <div className="flex items-center gap-2"><MapPin size={18} className="text-gray-400" /> {event.loc}</div>
                        <div className="flex items-center gap-2"><Clock size={18} className="text-gray-400" /> {event.time}</div>
                      </div>
                    </div>
                    <div className="mt-6 md:mt-0 font-bold bg-brand-dark text-white px-6 py-2.5 rounded-full hidden sm:block group-hover:bg-gray-800 transition-colors">
                      View Details
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {view === 'calendar' && (
          <div className="bg-white rounded-3xl border border-gray-100 p-6 md:p-10 shadow-sm">
            <h2 className="text-3xl font-bold font-serif mb-8 text-center capitalize">{format(today, 'MMMM yyyy')}</h2>
            <div className="grid grid-cols-7 gap-px bg-gray-200 border border-gray-200 rounded-2xl overflow-hidden">
              {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                <div key={day} className="bg-gray-50 p-4 text-center font-bold text-sm text-gray-500 uppercase tracking-widest">{day}</div>
              ))}
              {Array.from({ length: monthStart.getDay() }).map((_, i) => (
                <div key={`pad-${i}`} className="bg-white p-4 min-h-[140px]"></div>
              ))}
              {daysInMonth.map((day, i) => {
                const dayEvents = events.filter(e => isSameDay(e.date, day));
                return (
                  <div key={i} className="bg-white p-3 min-h-[140px] relative border-t border-gray-100 group hover:bg-gray-50 transition-colors">
                    <span className={`font-bold text-sm mb-2 ${isSameDay(day, today) ? 'bg-brand-dark text-white w-8 h-8 rounded-full flex items-center justify-center' : 'text-gray-700 block p-1.5'}`}>
                      {format(day, 'd')}
                    </span>
                    <div className="flex flex-col gap-1.5">
                      {dayEvents.map(e => (
                         <Link href={`/events/${e.slug}`} key={e.id} className="text-xs bg-[#e0f2fe] text-[#0369a1] px-2.5 py-1.5 rounded-lg truncate hover:bg-[#bae6fd] font-bold border border-[#bae6fd] transition-colors block">
                           {e.time} - {e.title}
                         </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
