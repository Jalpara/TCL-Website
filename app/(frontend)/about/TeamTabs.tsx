'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface TeamTab {
  tabId: string;
  tabLabel: string;
}

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  tabId: string;
}

interface TeamTabsProps {
  tabs: TeamTab[];
  members: TeamMember[];
}

export default function TeamTabs({ tabs, members }: TeamTabsProps) {
  const [activeTab, setActiveTab] = useState(tabs[0]?.tabId || 'executive');

  const filteredMembers = members.filter((m) => m.tabId === activeTab);

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
        {tabs.map((tab) => (
          <button
            key={tab.tabId}
            onClick={() => setActiveTab(tab.tabId)}
            className={`px-6 py-3 rounded-full font-bold text-sm md:text-base transition-colors ${
              activeTab === tab.tabId
                ? 'bg-brand-dark text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {tab.tabLabel}
          </button>
        ))}
      </div>

      <div className="animate-in fade-in duration-500 min-h-[400px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredMembers.map((member, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all group">
              <div className="aspect-square relative overflow-hidden bg-gray-100">
                <Image 
                  src={member.imageUrl} 
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
