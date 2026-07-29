'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CalendarPlus, MapPin, Clock, Users, ArrowRight } from 'lucide-react';

export default function EventDetailPage() {
  const event = {
    title: 'The Shared Plate - Food Drive',
    date: 'Saturday, July 25, 2026',
    time: '10:00 AM - 2:00 PM',
    loc: 'Central Community Hall, Navi Mumbai',
    desc: 'Join us for our monthly food drive under "The Shared Plate" initiative. We will be cooking and distributing fresh, nutritious meals to over 500 people in need. Volunteers are required for cooking, packing, and distribution. No prior cooking experience is necessary, just a willingness to help.',
    startDate: '20260725T043000Z', 
    endDate: '20260725T083000Z'
  };

  const gcalLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.startDate}/${event.endDate}&details=${encodeURIComponent(event.desc)}&location=${encodeURIComponent(event.loc)}`;

  return (
    <div className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/events" className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-dark font-bold mb-8 transition-colors bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
          <ArrowLeft size={16} strokeWidth={2.5} /> Back to Events
        </Link>
        
        <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
           <div className="h-64 relative flex items-center justify-center p-12 text-center overflow-hidden">
              <Image src="https://picsum.photos/seed/fooddrive/1200/600" alt="Event Cover" fill className="object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-brand-dark/70 mix-blend-multiply" />
              <h1 className="font-serif text-3xl md:text-5xl font-bold text-white relative z-10">{event.title}</h1>
           </div>
           
           <div className="p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                 <div className="flex flex-col gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <div className="w-12 h-12 bg-white text-brand-dark rounded-xl flex items-center justify-center shadow-sm"><Clock size={24} /></div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Date & Time</h4>
                      <p className="text-sm font-medium text-gray-600 leading-relaxed">{event.date}<br/>{event.time}</p>
                    </div>
                 </div>
                 <div className="flex flex-col gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <div className="w-12 h-12 bg-white text-green-600 rounded-xl flex items-center justify-center shadow-sm"><MapPin size={24} /></div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Location</h4>
                      <p className="text-sm font-medium text-gray-600 leading-relaxed">{event.loc}</p>
                    </div>
                 </div>
                 <div className="flex flex-col gap-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                    <div className="w-12 h-12 bg-white text-orange-500 rounded-xl flex items-center justify-center shadow-sm"><Users size={24} /></div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Capacity</h4>
                      <p className="text-sm font-medium text-gray-600 leading-relaxed">50 Volunteers Needed</p>
                    </div>
                 </div>
              </div>

              <div className="prose prose-lg text-gray-600 mb-12 max-w-none">
                <h3 className="font-serif font-bold text-2xl text-gray-900 mb-4">About this Event</h3>
                <p className="font-medium leading-relaxed">{event.desc}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 border-t border-gray-100 pt-8">
                 <Link href="/get-involved" className="bg-brand-dark text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors shadow-sm text-lg flex-1">
                   Register to Volunteer <ArrowRight size={20} />
                 </Link>
                 <a href={gcalLink} target="_blank" rel="noopener noreferrer" className="bg-white text-brand-dark border-2 border-brand-dark px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition-colors text-lg flex-1">
                   <CalendarPlus size={20} /> Add to Calendar
                 </a>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
