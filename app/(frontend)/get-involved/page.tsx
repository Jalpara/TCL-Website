'use client';

import React, { useState } from 'react';
import { Handshake, Heart, Mail, MessageSquare } from 'lucide-react';

export default function GetInvolvedPage() {
  const [activeTab, setActiveTab] = useState('volunteer');

  const bannerContent = {
    volunteer: {
      title: 'BE THE LINK.',
      subtitle: 'Your time, skills and kindness can connect someone to the support they need.',
      bgColor: 'bg-blue-500',
    },
    partner: {
      title: 'PARTNER WITH US.',
      subtitle: 'Collaborate with us to amplify our impact and reach more communities.',
      bgColor: 'bg-violet-500',
    },
    contact: {
      title: 'GET IN TOUCH.',
      subtitle: 'Have a general inquiry? We would love to hear from you.',
      bgColor: 'bg-orange-400',
    }
  }[activeTab] || { title: '', subtitle: '', bgColor: 'bg-blue-500' };

  return (
    <div className="bg-[#FDFDFD] py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className={`text-center mb-12 ${bannerContent.bgColor} text-white py-16 px-6 rounded-[2rem] relative overflow-hidden shadow-sm transition-colors duration-500`}>
          {/* subtle background pattern */}
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          <div className="relative z-10">
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 tracking-widest uppercase text-white drop-shadow-sm">{bannerContent.title}</h1>
            <p className="text-lg md:text-xl font-bold text-white/90 max-w-2xl mx-auto">{bannerContent.subtitle}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden min-h-[600px]">
          {/* Sidebar */}
          <div className="lg:col-span-4 bg-gray-50 p-8 flex flex-col border-r border-gray-100">
            <div className="flex flex-col gap-3">
              <button 
                onClick={() => setActiveTab('volunteer')}
                className={`flex items-start text-left gap-4 p-5 rounded-2xl transition-all border ${activeTab === 'volunteer' ? 'bg-white border-blue-500 shadow-sm' : 'border-transparent hover:bg-gray-100'}`}
              >
                <div className={`mt-0.5 ${activeTab === 'volunteer' ? 'text-blue-500' : 'text-gray-400'}`}><Heart size={24} /></div>
                <div>
                  <h3 className={`font-bold text-lg leading-tight ${activeTab === 'volunteer' ? 'text-blue-500' : 'text-gray-700'}`}>Volunteer</h3>
                  <p className="text-sm font-medium text-gray-500 mt-1">Join the movement</p>
                </div>
              </button>

              <button 
                onClick={() => setActiveTab('partner')}
                className={`flex items-start text-left gap-4 p-5 rounded-2xl transition-all border ${activeTab === 'partner' ? 'bg-white border-purple-500 shadow-sm' : 'border-transparent hover:bg-gray-100'}`}
              >
                <div className={`mt-0.5 ${activeTab === 'partner' ? 'text-purple-500' : 'text-gray-400'}`}><Handshake size={24} /></div>
                <div>
                  <h3 className={`font-bold text-lg leading-tight ${activeTab === 'partner' ? 'text-purple-600' : 'text-gray-700'}`}>Partner</h3>
                  <p className="text-sm font-medium text-gray-500 mt-1">Collaborate with us</p>
                </div>
              </button>

              <button 
                onClick={() => setActiveTab('contact')}
                className={`flex items-start text-left gap-4 p-5 rounded-2xl transition-all border ${activeTab === 'contact' ? 'bg-white border-orange-500 shadow-sm' : 'border-transparent hover:bg-gray-100'}`}
              >
                <div className={`mt-0.5 ${activeTab === 'contact' ? 'text-orange-500' : 'text-gray-400'}`}><MessageSquare size={24} /></div>
                <div>
                  <h3 className={`font-bold text-lg leading-tight ${activeTab === 'contact' ? 'text-orange-600' : 'text-gray-700'}`}>Contact</h3>
                  <p className="text-sm font-medium text-gray-500 mt-1">General inquiries</p>
                </div>
              </button>
            </div>
          </div>

          {/* Form Content */}
          <div className="lg:col-span-8 p-8 md:p-12">
            {activeTab === 'volunteer' && (
              <div className="animate-in fade-in duration-500">
                <h2 className="text-2xl md:text-3xl font-bold text-blue-500 uppercase tracking-widest mb-10">Volunteer Application</h2>
                <form className="flex flex-col gap-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="font-bold text-sm text-gray-700">First Name</label>
                      <input type="text" className="w-full border border-gray-200 rounded-xl p-3 bg-gray-50 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-bold text-sm text-gray-700">Last Name</label>
                      <input type="text" className="w-full border border-gray-200 rounded-xl p-3 bg-gray-50 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-bold text-sm text-gray-700">Email Address</label>
                    <input type="email" className="w-full border border-gray-200 rounded-xl p-3 bg-gray-50 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
                  </div>
                  
                  <div className="flex flex-col gap-3">
                    <label className="font-bold text-sm text-gray-700 mb-1">Which initiatives interest you?</label>
                    <div className="flex flex-wrap gap-4">
                      {['The Shared Plate', 'The Better Choice', 'The Common Ground', 'The Learning Circle'].map((interest) => (
                        <label key={interest} className="flex items-center gap-2 border border-gray-200 rounded-full px-5 py-2.5 text-sm font-medium cursor-pointer hover:border-blue-500 hover:bg-blue-50 transition-colors">
                          <input type="checkbox" className="rounded text-blue-500 focus:ring-blue-500 accent-blue-500 w-4 h-4" />
                          {interest}
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-bold text-sm text-gray-700">What is your expertise/skills?</label>
                    <input type="text" placeholder="e.g. Teaching, Social Media, Event Management..." className="w-full border border-gray-200 rounded-xl p-3 bg-gray-50 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="font-bold text-sm text-gray-700">Why do you want to join The Connecting Link?</label>
                    <textarea rows={4} className="w-full border border-gray-200 rounded-xl p-3 bg-gray-50 focus:bg-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"></textarea>
                  </div>

                  <div className="pt-2">
                    <button type="button" className="bg-blue-500 text-white font-bold py-4 px-8 rounded-full hover:bg-blue-700 transition-colors shadow-sm w-full md:w-auto">
                      Submit Application
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === 'partner' && (
              <div className="animate-in fade-in duration-500">
                <h2 className="text-2xl md:text-3xl font-bold text-purple-600 uppercase tracking-widest mb-10">Partner With Us</h2>
                <form className="flex flex-col gap-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="font-bold text-sm text-gray-700">Organization Name</label>
                      <input type="text" className="w-full border border-gray-200 rounded-xl p-3 bg-gray-50 focus:bg-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-bold text-sm text-gray-700">Contact Person</label>
                      <input type="text" className="w-full border border-gray-200 rounded-xl p-3 bg-gray-50 focus:bg-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-bold text-sm text-gray-700">Email Address</label>
                    <input type="email" className="w-full border border-gray-200 rounded-xl p-3 bg-gray-50 focus:bg-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all" />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="font-bold text-sm text-gray-700">Partnership Proposal</label>
                    <textarea rows={6} className="w-full border border-gray-200 rounded-xl p-3 bg-gray-50 focus:bg-white focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all" placeholder="Tell us how we can collaborate..."></textarea>
                  </div>

                  <div className="pt-2">
                    <button type="button" className="bg-purple-600 text-white font-bold py-4 px-8 rounded-full hover:bg-purple-700 transition-colors shadow-sm w-full md:w-auto">
                      Send Proposal
                    </button>
                  </div>
                </form>
              </div>
            )}

            {activeTab === 'contact' && (
              <div className="animate-in fade-in duration-500">
                <h2 className="text-2xl md:text-3xl font-bold text-orange-600 uppercase tracking-widest mb-10">General Inquiry</h2>
                <form className="flex flex-col gap-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <label className="font-bold text-sm text-gray-700">Full Name</label>
                      <input type="text" className="w-full border border-gray-200 rounded-xl p-3 bg-gray-50 focus:bg-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="font-bold text-sm text-gray-700">Email Address</label>
                      <input type="email" className="w-full border border-gray-200 rounded-xl p-3 bg-gray-50 focus:bg-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" />
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label className="font-bold text-sm text-gray-700">Message</label>
                    <textarea rows={6} className="w-full border border-gray-200 rounded-xl p-3 bg-gray-50 focus:bg-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all" placeholder="How can we help you?"></textarea>
                  </div>

                  <div className="pt-2">
                    <button type="button" className="bg-orange-500 text-white font-bold py-4 px-8 rounded-full hover:bg-orange-600 transition-colors shadow-sm w-full md:w-auto">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
