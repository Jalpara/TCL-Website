import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, MapPin, Clock, Leaf, Users, Handshake, Heart, Search, Shield, BookOpen, Utensils } from 'lucide-react';

const iconMap: Record<string, any> = {
  Leaf, Users, Handshake, Heart, Search, Shield, BookOpen, Utensils
};

const bgClassMap: Record<string, string> = {
  orange: 'bg-orange-50 text-orange-500',
  purple: 'bg-purple-50 text-purple-500',
  green: 'bg-green-50 text-green-500',
  blue: 'bg-blue-50 text-blue-500',
};

const tagColorMap: Record<string, string> = {
  orange: 'bg-orange-500',
  purple: 'bg-purple-500',
  green: 'bg-green-500',
  blue: 'bg-blue-500',
};

const textClassMap: Record<string, string> = {
  orange: 'text-orange-500',
  purple: 'text-purple-500',
  green: 'text-green-500',
  blue: 'text-blue-500',
};

export const EntityShowcase = ({ title, subtitle, entityType, displayMode, limit, selectedInitiatives, selectedStories, selectedEvents }: any) => {
  if (entityType === 'initiatives') {
    // Ideally these would be fetched dynamically if displayMode === 'latest', but for now we assume they are passed as props from a server component
    const initiatives = displayMode === 'manual' ? selectedInitiatives : []; // This would need a DB fetch if latest

    return (
      <section className="py-20 bg-[#F8F9FA] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">{title}</h2>
            <Link href="/initiatives" className="font-bold text-brand-dark flex items-center gap-2 hover:opacity-80">
              View all initiatives <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {initiatives?.map((item: any, idx: number) => {
              const IconComp = iconMap[item.icon] || Leaf;
              return (
                <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                  <div className={`w-20 h-20 rounded-2xl flex items-center justify-center mb-6 ${bgClassMap[item.themeColor] || bgClassMap['blue']}`}>
                    <IconComp size={32} />
                  </div>
                  <h4 className="font-bold font-serif text-xl mb-3 text-gray-900">{item.title}</h4>
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1 font-medium">{item.shortDescription}</p>
                  <Link href={`/initiatives/${item.slug}`} className="font-bold text-sm text-gray-800 flex items-center gap-1 hover:text-brand-dark transition-colors border-b border-transparent hover:border-brand-dark pb-0.5">
                    Explore <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  if (entityType === 'stories') {
    const stories = displayMode === 'manual' ? selectedStories : [];

    return (
      <section className="py-20 bg-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">{title}</h2>
            <Link href="/stories" className="font-bold text-brand-dark flex items-center gap-2 hover:opacity-80">
              View all stories <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {stories?.map((story: any, idx: number) => {
              const theme = story.initiative?.themeColor || 'blue';
              return (
                <div key={idx} className="rounded-2xl overflow-hidden shadow-sm border border-gray-100 bg-white hover:shadow-md transition-shadow group flex flex-col">
                  <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                    <Image src={story.featuredImage?.url || `https://picsum.photos/seed/${story.slug}/600/400`} alt={story.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <span className={`self-start text-[10px] font-bold uppercase tracking-wider text-white px-3 py-1 rounded-full mb-4 ${tagColorMap[theme] || tagColorMap['blue']}`}>
                      {story.initiative?.title || 'Story'}
                    </span>
                    <h4 className="font-serif font-bold text-xl mb-3 text-gray-900 leading-tight">{story.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">{story.summary}</p>
                    <Link href={`/stories/${story.slug}`} className="font-bold text-sm text-brand-dark flex items-center gap-1 hover:opacity-80">
                      Read more <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  if (entityType === 'events') {
    const events = displayMode === 'manual' ? selectedEvents : [];

    return (
      <section className="py-20 bg-[#F8F9FA] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-center justify-between mb-12 gap-4">
            <h2 className="font-serif text-3xl md:text-4xl font-bold">{title}</h2>
            <Link href="/events" className="font-bold text-brand-dark flex items-center gap-2 hover:opacity-80">
              View all events <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {events?.map((event: any, idx: number) => {
              const d = new Date(event.startDate);
              const dateStr = d.getDate().toString().padStart(2, '0');
              const monthStr = d.toLocaleString('default', { month: 'short' }).toUpperCase();
              const timeStr = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
              const IconComp = iconMap[event.initiative?.icon] || Leaf;
              const theme = event.initiative?.themeColor || 'blue';

              return (
                <div key={idx} className="flex bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                  <div className="flex flex-col items-center justify-center px-4 py-4 bg-gray-50 border-r border-gray-100 min-w-[80px]">
                    <span className="text-3xl font-serif font-bold text-gray-800">{dateStr}</span>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-1">{monthStr}</span>
                  </div>
                  <div className="p-5 flex flex-col justify-center flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`mt-0.5 ${textClassMap[theme] || textClassMap['blue']}`}><IconComp size={18} /></div>
                      <h4 className="font-bold text-gray-900 text-[15px] leading-snug">{event.title}</h4>
                    </div>
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center text-xs text-gray-500 font-medium gap-2">
                        <MapPin size={12} className="text-gray-400" /> {event.location?.name || 'Location TBD'}
                      </div>
                      <div className="flex items-center text-xs text-gray-500 font-medium gap-2 mb-4">
                        <Clock size={12} className="text-gray-400" /> {timeStr}
                      </div>
                    </div>
                    <Link href={`/events/${event.slug}`} className="text-xs font-bold flex items-center text-brand-dark hover:opacity-80 transition-opacity">
                      Join us <ArrowRight size={14} className="ml-1" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

  return null;
};
