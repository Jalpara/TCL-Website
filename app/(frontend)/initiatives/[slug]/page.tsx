import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Activity, Users, HeartHandshake, Building, Handshake, Clock } from 'lucide-react';
import { getPayload } from 'payload';
import configPromise from '@/payload.config';

export default async function InitiativeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const payload = await getPayload({ config: configPromise });
  const resolvedParams = await params;

  const { docs } = await payload.find({
    collection: 'initiatives',
    where: {
      slug: {
        equals: resolvedParams.slug,
      },
    },
  });

  const initiative = docs[0] as any;

  if (!initiative) {
    return notFound();
  }

  // Fetch related content
  const { docs: stories } = await payload.find({
    collection: 'stories',
    where: { initiative: { equals: initiative.id } },
    limit: 2,
  });

  const { docs: events } = await payload.find({
    collection: 'events',
    where: { initiative: { equals: initiative.id } },
    limit: 3,
  });

  const { docs: otherInitiatives } = await payload.find({
    collection: 'initiatives',
    where: { id: { not_equals: initiative.id } },
    limit: 3,
  });

  const tagColorMap: Record<string, string> = {
    orange: 'bg-orange-500',
    purple: 'bg-purple-500',
    green: 'bg-green-500',
    blue: 'bg-blue-500',
  };
  const tagTextColorMap: Record<string, string> = {
    orange: 'text-orange-500',
    purple: 'text-purple-500',
    green: 'text-green-500',
    blue: 'text-blue-500',
  };

  const theme = initiative.themeColor || 'orange';
  const tagColor = tagColorMap[theme];
  const tagColorText = tagTextColorMap[theme];
  const imgUrl = initiative.coverImage?.url || initiative.imageUrl || 'https://picsum.photos/seed/food1/1200/600';

  return (
    <div className="bg-white">
      {/* 01 HERO */}
      <div className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image src={imgUrl} alt={initiative.title} fill className="object-cover" referrerPolicy="no-referrer" priority />
        <div className="absolute inset-0 bg-brand-dark/70 mix-blend-multiply" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-16">
          <Link href="/initiatives" className="inline-flex items-center gap-2 text-white/80 hover:text-white font-bold mb-8 transition-colors">
            <ArrowLeft size={16} strokeWidth={2.5} /> Back to Initiatives
          </Link>
          <div className="max-w-3xl">
            <span className={`inline-block text-xs font-bold uppercase tracking-wider text-white px-4 py-1.5 rounded-full mb-6 ${tagColor}`}>
              Initiative
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">{initiative.title}</h1>
            <p className="text-xl md:text-2xl font-medium text-white/90 leading-relaxed">{initiative.shortDescription}</p>
          </div>
        </div>
      </div>

      {/* 02 WHY THIS MATTERS */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <span className={`text-sm font-bold tracking-widest uppercase mb-4 block ${tagColorText}`}>Why This Matters</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-gray-900 mb-8">The Problem We&apos;re Solving</h2>
          {initiative.challenge ? (
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">{initiative.challenge}</p>
          ) : (
            <div className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: initiative.description_html || initiative.shortDescription }} />
          )}
        </div>
      </section>

      {/* 03 WHAT WE DO */}
      {initiative.activities && initiative.activities.length > 0 && (
        <section className="py-24 px-6 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className={`text-sm font-bold tracking-widest uppercase mb-4 block ${tagColorText}`}>What We Do</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-gray-900">Our Activities</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {initiative.activities.map((activity: any, idx: number) => (
                <div key={idx} className="bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gray-50 ${tagColorText}`}>
                    <Activity size={28} />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">{activity.title}</h3>
                  <p className="text-gray-600 font-medium leading-relaxed">{activity.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 04 METHODOLOGY */}
      {initiative.methodology && initiative.methodology.length > 0 && (
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <span className={`text-sm font-bold tracking-widest uppercase mb-4 block ${tagColorText}`}>Methodology</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-gray-900">How We Create Impact</h2>
            </div>
            <div className="relative">
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 z-0" />
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {initiative.methodology.map((step: any, idx: number) => (
                  <div key={idx} className="bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm relative">
                    <span className={`text-5xl font-serif font-bold opacity-10 absolute top-4 right-6 ${tagColorText}`}>
                      0{idx + 1}
                    </span>
                    <h4 className="font-bold text-xl text-gray-900 mb-3 relative z-10">{step.title}</h4>
                    <p className="text-gray-600 font-medium relative z-10">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 05 THE ECOSYSTEM */}
      <section className="py-24 px-6 bg-brand-dark text-white">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-sm font-bold tracking-widest uppercase mb-4 block text-gray-400">The Ecosystem</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-16">Who We Connect</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
            
            <div className="flex flex-col items-center gap-4 w-full md:w-1/3">
              <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <Users size={40} className="text-gray-300" />
              </div>
              <h4 className="font-bold text-xl">People In Need</h4>
              <p className="text-gray-400 font-medium">Local communities</p>
            </div>
            
            <div className="text-gray-500 hidden md:block">
              <ArrowRight size={32} />
            </div>
            
            <div className="flex flex-col items-center gap-4 w-full md:w-1/3">
              <div className={`w-32 h-32 rounded-full flex items-center justify-center shadow-lg ${tagColor}`}>
                <HeartHandshake size={48} className="text-white" />
              </div>
              <h4 className="font-bold text-2xl text-white">The Connecting Link</h4>
              <p className="text-gray-400 font-medium">Bridge of action</p>
            </div>

            <div className="text-gray-500 hidden md:block">
              <ArrowRight size={32} />
            </div>

            <div className="flex flex-col items-center gap-4 w-full md:w-1/3">
              <div className="w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                <Building size={40} className="text-gray-300" />
              </div>
              <h4 className="font-bold text-xl">People Who Help</h4>
              <p className="text-gray-400 font-medium">Volunteers & Partners</p>
            </div>
          </div>
        </div>
      </section>

      {/* 06 REAL IMPACT (STORIES) */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className={`text-sm font-bold tracking-widest uppercase mb-4 block ${tagColorText}`}>Real Impact</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-gray-900">Stories That Matter</h2>
            </div>
            <Link href="/stories" className="inline-flex items-center gap-2 font-bold text-brand-dark hover:opacity-80 transition-opacity">
              Read all stories <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stories.map((story: any) => (
              <div key={story.id} className="bg-white rounded-[2rem] p-8 border border-gray-100 shadow-sm flex flex-col sm:flex-row gap-6 items-center">
                <div className="w-full sm:w-1/3 aspect-square relative rounded-2xl overflow-hidden bg-gray-100 flex-shrink-0">
                  <Image src={story.featuredImage?.url || story.imageUrl || 'https://picsum.photos/seed/impact1/400/400'} alt={story.title} fill className="object-cover" referrerPolicy="no-referrer" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-2xl mb-3 text-gray-900">{story.title}</h4>
                  <p className="text-gray-600 font-medium mb-6">{story.summary}</p>
                  <Link href={`/stories/${story.slug}`} className={`font-bold text-sm flex items-center gap-2 hover:opacity-80 ${tagColorText}`}>
                    Read story <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 07 THE NUMBERS */}
      {initiative.impactNumbers && initiative.impactNumbers.length > 0 && (
        <section className="py-24 px-6 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto text-center">
            <span className={`text-sm font-bold tracking-widest uppercase mb-4 block ${tagColorText}`}>The Numbers</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-gray-900 mb-16">Our Impact So Far</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {initiative.impactNumbers.map((stat: any, idx: number) => (
                <div key={idx} className="p-8">
                  <div className={`text-5xl md:text-7xl font-serif font-bold mb-4 ${tagColorText}`}>{stat.value}</div>
                  <div className="text-xl font-bold text-gray-900 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 08 YOU CAN BE THE LINK */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <h2 className="font-serif text-3xl md:text-5xl font-bold text-gray-900 mb-6">You Can Be The Link</h2>
          <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">Join us in making a difference. Whether you have time to give or resources to share, there&apos;s a place for you here.</p>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 text-center">
            <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 bg-gray-50 ${tagColorText}`}>
              <Users size={32} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Volunteer</h3>
            <p className="text-gray-600 font-medium mb-8">Give your time and skills to help us execute our drives and campaigns.</p>
            <Link href="/get-involved" className="inline-flex items-center gap-2 bg-brand-dark text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-colors">
              Become a Volunteer
            </Link>
          </div>
          
          <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100 text-center">
            <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 bg-gray-50 ${tagColorText}`}>
              <Handshake size={32} />
            </div>
            <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Partner</h3>
            <p className="text-gray-600 font-medium mb-8">Collaborate with us as an organization to scale our collective impact.</p>
            <Link href="/get-involved" className="inline-flex items-center gap-2 bg-white text-brand-dark border-2 border-brand-dark px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-colors">
              Partner With Us
            </Link>
          </div>
        </div>
      </section>

      {/* 09 GET INVOLVED (EVENTS) */}
      <section className="py-24 px-6 bg-white border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className={`text-sm font-bold tracking-widest uppercase mb-4 block ${tagColorText}`}>Get Involved</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-gray-900">Upcoming Events</h2>
            </div>
            <Link href="/events" className="inline-flex items-center gap-2 font-bold text-brand-dark hover:opacity-80 transition-opacity">
              View all events <ArrowRight size={18} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {events.map((event: any) => {
              const d = new Date(event.startDate);
              const day = d.getDate();
              const month = d.toLocaleDateString('en-US', { month: 'short' }).toUpperCase();
              const time = d.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
              return (
                <div key={event.id} className="flex flex-col bg-gray-50 rounded-[2rem] border border-gray-100 overflow-hidden hover:shadow-md transition-shadow p-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex flex-col items-center justify-center bg-white shadow-sm border border-gray-100 ${tagColorText}`}>
                      <span className="text-xl font-serif font-bold leading-none">{day}</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider mt-1 text-gray-500">{month}</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-gray-900">{event.title}</h4>
                      <p className="text-sm font-medium text-gray-500 flex items-center gap-1 mt-1">
                        <Clock size={14} /> {time}
                      </p>
                    </div>
                  </div>
                  <Link href={`/events/${event.slug}`} className="mt-auto w-full text-center bg-white border border-gray-200 text-brand-dark py-3 rounded-xl font-bold text-sm hover:bg-gray-50 transition-colors">
                    View Details
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 10 EXPLORE OTHER INITIATIVES */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-gray-900 mb-6">Explore Other Initiatives</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {otherInitiatives.map((item: any) => {
              const themeC = item.themeColor || 'orange';
              return (
                <Link key={item.id} href={`/initiatives/${item.slug}`} className="group bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all">
                  <div className="h-48 relative bg-gray-200 overflow-hidden">
                    <Image src={item.imageUrl || item.coverImage?.url || 'https://picsum.photos/seed/quiet1/600/400'} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-8">
                    <span className={`text-xs font-bold uppercase tracking-wider mb-3 block ${tagTextColorMap[themeC]}`}>
                      {item.title}
                    </span>
                    <h4 className="font-serif font-bold text-xl text-gray-900 mb-2">{item.subtitle || 'Initiative'}</h4>
                    <p className="text-gray-500 font-medium text-sm">{item.shortDescription || item.longDescription}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 11 BE THE LINK (Final CTA) */}
      <section className="py-24 px-6 bg-brand-dark text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-6xl font-bold mb-6">Ready to make an impact?</h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-12 font-medium">Your action, no matter how small, is a crucial link in the chain of change.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/get-involved" className="bg-white text-brand-dark px-10 py-5 rounded-full font-bold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              Become A Link
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
