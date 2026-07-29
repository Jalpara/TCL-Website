import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function StoryDetailPage() {
  const story = {
    title: 'A warm meal, a brighter day',
    tag: 'The Shared Plate',
    tagColor: 'bg-orange-500',
    date: 'May 12, 2026',
    author: 'Volunteer Team',
    img: 'https://picsum.photos/seed/meal1/1200/600',
    content: `
      It was a typical Tuesday morning when our team arrived at the local community center. The line had already started forming. Among them was Mrs. Sharma, an elderly woman who visits us every week. 
      
      Our initiative, The Shared Plate, is about more than just food—it's about connection. When we handed her a freshly packed, warm meal, her smile lit up the room. She told us how these meals have not only helped her sustain herself but also given her a sense of belonging in a community that cares.
      
      This is why we do what we do. Every meal served is a step towards a world where no one has to worry about their next plate of food. Through the dedication of our volunteers and the generosity of our donors, we were able to serve over 500 meals that day alone.
      
      Join us in our mission. A simple act of sharing can truly make someone's day brighter.
    `
  };

  return (
    <div className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-dark font-bold mb-8 transition-colors bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
          <ArrowLeft size={16} strokeWidth={2.5} /> Back to Home
        </Link>
        
        <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
           <div className="h-64 md:h-96 relative flex items-center justify-center text-center overflow-hidden">
              <Image src={story.img} alt={story.title} fill className="object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-brand-dark/40 mix-blend-multiply" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10">
                <span className={`text-xs font-bold uppercase tracking-wider text-white px-4 py-1.5 rounded-full mb-6 ${story.tagColor}`}>
                  {story.tag}
                </span>
                <h1 className="font-serif text-3xl md:text-5xl font-bold text-white max-w-3xl">{story.title}</h1>
              </div>
           </div>
           
           <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 text-sm font-medium text-gray-500 mb-10 pb-10 border-b border-gray-100">
                <span>By {story.author}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                <span>{story.date}</span>
              </div>

              <div className="prose prose-lg text-gray-600 max-w-none mb-12">
                {story.content.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-6 leading-relaxed font-medium text-lg">{paragraph.trim()}</p>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 border-t border-gray-100 pt-8">
                 <Link href="/get-involved" className="bg-brand-dark text-white px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors shadow-sm text-lg flex-1">
                   Be The Link <ArrowRight size={20} />
                 </Link>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
}
