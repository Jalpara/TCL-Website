'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const teamData = {
  executive: [
    { name: 'Sarah Jenkins', role: 'Executive Director', img: 'https://picsum.photos/seed/sarah/400/400' },
    { name: 'David Chen', role: 'Operations Head', img: 'https://picsum.photos/seed/david/400/400' },
    { name: 'Maya Patel', role: 'Program Director', img: 'https://picsum.photos/seed/maya/400/400' },
    { name: 'James Wilson', role: 'Finance Director', img: 'https://picsum.photos/seed/james/400/400' },
  ],
  board: [
    { name: 'Robert Kiyosaki', role: 'Board Chair', img: 'https://picsum.photos/seed/robert/400/400' },
    { name: 'Elena Rodriguez', role: 'Vice Chair', img: 'https://picsum.photos/seed/elena/400/400' },
    { name: 'Michael Chang', role: 'Board Member', img: 'https://picsum.photos/seed/michael/400/400' },
  ],
  advisors: [
    { name: 'Dr. Anita Desai', role: 'Public Health Advisor', img: 'https://picsum.photos/seed/anita/400/400' },
    { name: 'John Smith', role: 'Legal Advisor', img: 'https://picsum.photos/seed/john/400/400' },
  ],
  partners: [
    { name: 'Global Tech Corp', role: 'Technology Partner', img: 'https://picsum.photos/seed/tech/400/400' },
    { name: 'Green Earth Foundation', role: 'Sustainability Partner', img: 'https://picsum.photos/seed/green/400/400' },
    { name: 'Community Health Net', role: 'Healthcare Partner', img: 'https://picsum.photos/seed/health/400/400' },
    { name: 'EduCare International', role: 'Education Partner', img: 'https://picsum.photos/seed/edu/400/400' },
  ],
  volunteers: [
    { name: 'Alex Johnson', role: 'Lead Volunteer', img: 'https://picsum.photos/seed/alex/400/400' },
    { name: 'Sam Taylor', role: 'Community Organizer', img: 'https://picsum.photos/seed/sam/400/400' },
    { name: 'Chris Lee', role: 'Event Coordinator', img: 'https://picsum.photos/seed/chris/400/400' },
    { name: 'Jordan Kim', role: 'Volunteer', img: 'https://picsum.photos/seed/jordan/400/400' },
  ]
};

export default function TeamTabs() {
  const [activeTab, setActiveTab] = useState('executive');

  const tabs = [
    { id: 'executive', label: 'Executive Members' },
    { id: 'board', label: 'Board Members' },
    { id: 'advisors', label: 'Advisors' },
    { id: 'partners', label: 'Partners' },
    { id: 'volunteers', label: 'Volunteers' },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-full font-bold text-sm md:text-base transition-colors ${
              activeTab === tab.id
                ? 'bg-brand-dark text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="animate-in fade-in duration-500 min-h-[400px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {(teamData as any)[activeTab].map((member: any, idx: number) => (
            <div key={idx} className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all group">
              <div className="aspect-square relative overflow-hidden bg-gray-100">
                <Image 
                  src={member.img} 
                  alt={member.name} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="font-serif font-bold text-xl text-gray-900 mb-1">{member.name}</h3>
                <p className="text-gray-500 font-medium text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
