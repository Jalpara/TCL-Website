import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight, ChevronDown, Leaf, Users, Handshake, Heart, Search, Utensils,
  BookOpen, HeartHandshake, Clock, TreePine, Bookmark, Building, Map as MapIcon, Play, MapPin, Shield
} from 'lucide-react';

export default function Page() {
  return (
    <div className="font-sans text-gray-800">
      <Hero />
      <WhatIs />
      <HowItWorks />
      <Initiatives />
      <Impact />
      <Stories />
      <Events />
      <FAQ />
      <CtaSection />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 px-6 bg-[#fff]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left z-10">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6">
            Connecting People.<br />Creating Impact.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            We connect individuals, communities, volunteers, organisations and changemakers to create meaningful social impact.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-10">
            <Link href="/initiatives" className="bg-brand-dark text-white px-8 py-3.5 rounded-full font-bold hover:bg-gray-800 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
              Explore Initiatives <ArrowRight size={18} />
            </Link>
            <Link href="/get-involved" className="bg-transparent border border-gray-300 text-gray-800 px-8 py-3.5 rounded-full font-bold hover:bg-gray-50 transition-colors w-full sm:w-auto text-center">
              Become a Connecting Link
            </Link>
          </div>
          
          <p className="text-gray-500 font-medium text-sm md:text-base">
            Join a movement that believes <strong className="text-gray-800 font-bold">no one is alone</strong><br className="hidden lg:block"/> in doing good.
          </p>
        </div>

        {/* Right Graphic Representation (Updated to Image) */}
        <div className="flex-1 relative w-full h-[400px] md:h-[450px]">
           <div className="absolute inset-0 rounded-[2rem]">
             <Image 
               src="/assets/hero-graphic.png" 
               alt="People helping each other" 
               fill 
               className="object-cover bg-cover" 
               priority
               referrerPolicy="no-referrer"
             />
           </div>
           
        </div>
      </div>
    </section>
  );
}

function WhatIs() {
  return (
    <section className="py-20 bg-[#FDFDFD] border-t border-gray-100 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-serif text-3xl md:text-4xl font-bold mb-16">What is The Connecting Link?</h2>
        
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Process Diagram */}
          <div className="flex-1 relative w-full flex flex-col md:flex-row items-start justify-between gap-8 md:gap-4">
            <div className="hidden md:block absolute top-[48px] left-16 right-16 border-t-2 border-brand-dark/20 z-0" />
            
            <div className="relative z-10 flex flex-col items-center text-center flex-1 bg-[#FDFDFD] px-2 w-full md:w-auto">
              <div className="w-24 h-24 rounded-[2rem] bg-orange-50 flex items-center justify-center text-orange-500 mb-6 shadow-sm border border-orange-100">
                <Leaf size={40} />
              </div>
              <h4 className="font-serif font-bold text-xl mb-3">People in Need</h4>
              <p className="text-gray-600 text-sm max-w-[200px]">Every day, someone needs support.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center flex-1 bg-[#FDFDFD] px-2 w-full md:w-auto">
              <div className="w-24 h-24 rounded-[2rem] bg-indigo-50 flex items-center justify-center text-indigo-500 mb-6 shadow-sm border border-indigo-100">
                <Handshake size={40} />
              </div>
              <h4 className="font-serif font-bold text-xl mb-3">The Connecting Link</h4>
              <p className="text-gray-600 text-sm max-w-[200px]">We bridge the gap and bring people together.</p>
            </div>

            <div className="relative z-10 flex flex-col items-center text-center flex-1 bg-[#FDFDFD] px-2 w-full md:w-auto">
              <div className="w-24 h-24 rounded-[2rem] bg-green-50 flex items-center justify-center text-green-500 mb-6 shadow-sm border border-green-100">
                <Users size={40} />
              </div>
              <h4 className="font-serif font-bold text-xl mb-3">People Who Can Help</h4>
              <p className="text-gray-600 text-sm max-w-[200px]">Volunteers, donors, partners step in.</p>
            </div>
          </div>

          <div className="lg:w-1/3 text-center lg:text-left">
            <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6">
              We don&apos;t just run initiatives.<br className="hidden lg:block"/> 
              We connect hearts, resources and opportunities to create lasting change.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 font-bold text-brand-dark hover:opacity-80 transition-opacity pb-1 border-b-2 border-brand-dark">
              Know more about us <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { step: '01', title: 'A Need Exists', desc: 'A community or individual faces a challenge.', Icon: Users },
    { step: '02', title: 'We Connect', desc: 'We find the right people and resources.', Icon: Search },
    { step: '03', title: 'Together We Act', desc: 'Volunteers and partners come together to help.', Icon: Handshake },
    { step: '04', title: 'Lives Improve', desc: 'Real impact. Stronger communities.', Icon: Heart },
  ];

  return (
    <section className="py-20 bg-white border-t border-gray-100 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-serif text-3xl md:text-4xl font-bold mb-16">How It Works</h2>
        
        <div className="relative mt-8 max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-4">
          <div className="hidden md:block absolute top-[3rem] left-16 right-16 border-t-[3px] border-dashed border-gray-200 z-0" />
          
          {steps.map((item, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center flex-1 bg-white px-2">
              <div className="relative flex justify-center mb-6">
                 <div className="w-9 h-9 rounded-full bg-brand-dark text-white flex items-center justify-center text-sm font-bold absolute -top-4 -left-4 shadow-lg border-[3px] border-white z-20">
                   {item.step}
                 </div>
                 <div className="w-24 h-24 rounded-full border-2 border-gray-100 bg-white shadow-sm flex items-center justify-center text-gray-700 relative z-10">
                    <item.Icon size={36} strokeWidth={1.5} />
                 </div>
              </div>
              <h4 className="font-bold text-lg mb-3">{item.title}</h4>
              <p className="text-gray-600 text-sm max-w-[200px] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Initiatives() {
  const initiatives = [
    { title: 'The Shared Plate', desc: 'Sharing food. Strengthening communities.', Icon: Utensils, colorClass: 'text-orange-500', bgClass: 'bg-orange-50' },
    { title: 'The Better Choice', desc: 'Supporting healthier choices, stronger futures.', Icon: Shield, colorClass: 'text-purple-500', bgClass: 'bg-purple-50' },
    { title: 'The Common Ground', desc: "This planet is our common ground, We're taking care of it", Icon: Leaf, colorClass: 'text-green-500', bgClass: 'bg-green-50' },
    { title: 'The Learning Circle', desc: 'Creating pathways through knowledge.', Icon: BookOpen, colorClass: 'text-blue-500', bgClass: 'bg-blue-50' },
  ];

  return (
    <section className="py-20 bg-[#F8F9FA] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">Our Initiatives</h2>
          <Link href="/initiatives" className="font-bold text-brand-dark flex items-center gap-2 hover:opacity-80">
            View all initiatives <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {initiatives.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow">
              <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 ${item.bgClass} ${item.colorClass}`}>
                <item.Icon size={32} />
              </div>
              <h4 className="font-bold font-serif text-xl mb-3 text-gray-900">{item.title}</h4>
              <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1 font-medium">{item.desc}</p>
              <Link href="/initiatives/1" className="font-bold text-sm text-gray-800 flex items-center gap-1 hover:text-brand-dark transition-colors border-b border-transparent hover:border-brand-dark pb-0.5">
                Explore <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Impact() {
  const stats = [
    { num: '18,450+', label: 'Meals Shared', Icon: Utensils },
    { num: '3,250+', label: 'People Helped', Icon: HeartHandshake },
    { num: '1,10,000+', label: 'Volunteer Hours', Icon: Handshake },
    { num: '2,150+', label: 'Trees Planted', Icon: Leaf },
  ];

  return (
    <section className="bg-brand-dark text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold inline-block relative">
            Our Impact So Far
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-blue-500 rounded-full" />
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <div className="text-gray-300 mb-4 opacity-80">
                <stat.Icon size={40} strokeWidth={1.5} />
              </div>
              <div className="text-2xl md:text-4xl font-bold text-[#F6AD55] mb-2">{stat.num}</div>
              <div className="text-sm font-bold text-gray-300 uppercase tracking-wide leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Link href="/impact" className="inline-flex items-center gap-2 border border-white/30 text-white hover:bg-white hover:text-brand-dark px-8 py-3 rounded-full font-bold transition-all">
            View detailed report <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Stories() {
  const stories = [
    {
      img: 'https://picsum.photos/seed/meal1/600/400',
      tag: 'The Shared Plate', tagColor: 'bg-orange-500',
      title: 'A warm meal, a brighter day',
      desc: 'How a simple meal brought smiles to a community.'
    },
    {
      img: 'https://picsum.photos/seed/quiet1/600/400',
      tag: 'The Better Choice', tagColor: 'bg-purple-500',
      title: 'From silence to strength',
      desc: 'A story of healing, hope and fighting addiction.'
    },
    {
      img: 'https://picsum.photos/seed/earth1/600/400',
      tag: 'The Common Ground', tagColor: 'bg-green-500',
      title: 'Planting a greener future',
      desc: 'Students came together to revive their local forest patch.'
    },
    {
      img: 'https://picsum.photos/seed/edu1/600/400',
      tag: 'The Learning Circle', tagColor: 'bg-blue-500',
      title: 'Education changes everything',
      desc: 'Supporting a child today to build a better tomorrow.'
    },
  ];

  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">Stories That Inspire</h2>
          <Link href="/stories" className="font-bold text-brand-dark flex items-center gap-2 hover:opacity-80">
            View all stories <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {stories.map((story, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-white hover:shadow-md transition-shadow group flex flex-col">
              <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                <Image src={story.img} alt={story.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className={`self-start text-[10px] font-bold uppercase tracking-wider text-white px-3 py-1 rounded-full mb-4 ${story.tagColor}`}>
                  {story.tag}
                </span>
                <h4 className="font-serif font-bold text-xl mb-3 text-gray-900 leading-tight">{story.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{story.desc}</p>
                <Link href="/stories/1" className="font-bold text-sm text-brand-dark flex items-center gap-1 hover:opacity-80">
                  Read more <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Events() {
  const events = [
    { date: '25', month: 'MAY', title: 'Food Drive', loc: 'Navi Mumbai', time: '10:00 AM', Icon: Utensils, iconColor: 'text-orange-500' },
    { date: '08', month: 'JUN', title: 'Addiction Awareness', loc: 'Navi Mumbai', time: '6:00 PM', Icon: Shield, iconColor: 'text-purple-500' },
    { date: '15', month: 'JUN', title: 'Beach Cleanup Drive', loc: 'Juhu Beach', time: '7:00 AM', Icon: Leaf, iconColor: 'text-green-500' },
    { date: '22', month: 'JUN', title: 'Literacy Camp', loc: 'Nerul, Navi Mumbai', time: '9:00 AM', Icon: BookOpen, iconColor: 'text-blue-500' },
  ];

  return (
    <section className="py-20 bg-[#F8F9FA] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold">Upcoming Events</h2>
          <Link href="/events" className="font-bold text-brand-dark flex items-center gap-2 hover:opacity-80">
            View all events <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, idx) => (
            <div key={idx} className="flex bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="flex flex-col items-center justify-center px-4 py-4 bg-gray-50 border-r border-gray-100 min-w-[80px]">
                <span className="text-3xl font-serif font-bold text-gray-800">{event.date}</span>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">{event.month}</span>
              </div>
              <div className="p-5 flex flex-col justify-center flex-1">
                <div className="flex items-start gap-3 mb-3">
                  <div className={`mt-0.5 ${event.iconColor}`}><event.Icon size={18} /></div>
                  <h4 className="font-bold text-gray-900 text-[15px] leading-snug">{event.title}</h4>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center text-xs text-gray-500 font-medium gap-2">
                    <MapPin size={12} className="text-gray-400" /> {event.loc}
                  </div>
                  <div className="flex items-center text-xs text-gray-500 font-medium gap-2 mb-4">
                    <Clock size={12} className="text-gray-400" /> {event.time}
                  </div>
                </div>
                <Link href="/events/1" className="text-xs font-bold flex items-center text-brand-dark hover:opacity-80 transition-opacity">
                  Join us <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: 'How can I volunteer?',
      a: <>You can volunteer by navigating to the <Link href="/get-involved" className="text-brand-dark font-bold hover:underline transition-all">Become A Link</Link> page and filling out our simple application form. We will match your skills with our current initiatives.</>
    },
    {
      q: 'Where do you operate?',
      a: 'We currently operate across Navi Mumbai, with various events ranging from food drives to beach cleanups happening every week.'
    },
    {
      q: 'Are donations accepted?',
      a: 'Currently, we focus on time and skill donations. We believe active participation creates the most profound impact in our communities.'
    }
  ];

  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 font-medium">Everything you need to know about getting involved.</p>
        </div>
        <div className="flex flex-col gap-6">
          {faqs.map((faq, idx) => (
            <div key={idx} className="p-6 md:p-8 bg-gray-50 rounded-2xl border border-gray-100">
              <h4 className="font-bold font-serif text-xl mb-3 text-gray-900">{faq.q}</h4>
              <p className="text-gray-600 leading-relaxed font-medium">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  return (
    <section className="py-20 bg-white px-6 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center gap-12 xl:gap-8 justify-between">
        <div className="text-center xl:text-left">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">You can be the link.</h2>
          <p className="text-gray-600 text-lg">Every act of kindness creates a<br className="hidden md:block" /> connection that changes lives.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full xl:w-1/2">
          <Link href="/get-involved" className="flex items-center gap-5 p-6 rounded-2xl bg-green-50 border border-green-100 hover:shadow-[0_2px_5px_rgb(0,0,0,0.02)] hover:-translate-y-1 transition-all duration-300 ease-in-out group">
            <div className="text-green-500"><HeartHandshake size={40} strokeWidth={1.5} /></div>
            <div>
              <h4 className="font-bold font-serif text-gray-900 text-xl mb-1 group-hover:text-green-600 transition-colors duration-300 ease-in-out">I Want To Help</h4>
              <p className="text-sm font-medium text-gray-600 flex items-center gap-2">Volunteer your time <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" /></p>
            </div>
          </Link>

          <Link href="/get-involved" className="flex items-center gap-5 p-6 rounded-2xl bg-blue-50 border border-blue-100 hover:shadow-[0_2px_5px_rgb(0,0,0,0.02)] hover:-translate-y-1 transition-all duration-300 ease-in-out group">
            <div className="text-blue-500"><Handshake size={40} strokeWidth={1.5} /></div>
            <div>
              <h4 className="font-bold font-serif text-gray-900 text-xl mb-1 group-hover:text-blue-600 transition-colors duration-300 ease-in-out">I Want To Partner</h4>
              <p className="text-sm font-medium text-gray-600 flex items-center gap-2">Let&apos;s collaborate <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" /></p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
