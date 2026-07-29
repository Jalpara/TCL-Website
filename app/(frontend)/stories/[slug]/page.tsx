import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getPayload } from 'payload';
import configPromise from '@/payload.config';

export default async function StoryDetailPage({ params }: { params: { slug: string } }) {
  const payload = await getPayload({ config: configPromise });

  const { docs } = await payload.find({
    collection: 'stories',
    where: {
      slug: {
        equals: params.slug,
      },
    },
  });

  const story = docs[0] as any;

  if (!story) {
    return notFound();
  }

  // Format date
  const dateObj = new Date(story.createdAt);
  const formattedDate = dateObj.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  // Map theme color
  const theme = story.initiative?.themeColor || 'blue';
  const tagColorMap: Record<string, string> = {
    orange: 'bg-orange-500',
    purple: 'bg-purple-500',
    green: 'bg-green-500',
    blue: 'bg-blue-500',
  };
  const tagColor = tagColorMap[theme] || 'bg-blue-500';

  return (
    <div className="py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-500 hover:text-brand-dark font-bold mb-8 transition-colors bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100">
          <ArrowLeft size={16} strokeWidth={2.5} /> Back to Home
        </Link>
        
        <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden">
           <div className="h-64 md:h-96 relative flex items-center justify-center text-center overflow-hidden">
              <Image src={story.featuredImage?.url || 'https://picsum.photos/seed/meal1/1200/600'} alt={story.title} fill className="object-cover" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 bg-brand-dark/40 mix-blend-multiply" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-8 z-10">
                <span className={`text-xs font-bold uppercase tracking-wider text-white px-4 py-1.5 rounded-full mb-6 ${tagColor}`}>
                  {story.initiative?.title || 'Story'}
                </span>
                <h1 className="font-serif text-3xl md:text-5xl font-bold text-white max-w-3xl">{story.title}</h1>
              </div>
           </div>
           
           <div className="p-8 md:p-12">
              <div className="flex items-center gap-4 text-sm font-medium text-gray-500 mb-10 pb-10 border-b border-gray-100">
                <span>By {story.author || 'TCL Team'}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                <span>{formattedDate}</span>
              </div>

              <div className="prose prose-lg text-gray-600 max-w-none mb-12">
                {/* Normally we'd render Lexical rich text here. For now, since we seeded summary, we'll show summary, or raw HTML if available. */}
                {story.content_html ? (
                  <div dangerouslySetInnerHTML={{ __html: story.content_html }} />
                ) : (
                  <p className="mb-6 leading-relaxed font-medium text-lg">{story.summary}</p>
                )}
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
