import React from 'react';
import Image from 'next/image';
import { getPayload } from 'payload';
import configPromise from '@/payload.config';
import TeamTabs from './TeamTabs';

export default async function AboutPage() {
  const payload = await getPayload({ config: configPromise });
  const aboutData = await payload.findGlobal({ slug: 'about-page' }) as any;

  const pageTitle = aboutData?.pageTitle || 'About Us';
  const pageSubtitle = aboutData?.pageSubtitle || 'We are The Connecting Link — bridging the gap between those who need help and those who can provide it.';
  const heroImageUrl = aboutData?.heroImageUrl || 'https://picsum.photos/seed/ngoabout/1200/800';
  const mission = aboutData?.mission || { title: 'Our Mission', text: '' };
  const vision = aboutData?.vision || { title: 'Our Vision', text: '' };
  const story = aboutData?.story || { title: 'Our Story', paragraphs: [] };
  const teamSection = aboutData?.teamSection || { title: '', subtitle: '', tabs: [], members: [] };

  return (
    <div className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">{pageTitle}</h1>
          <p className="text-gray-600 font-medium text-lg max-w-2xl mx-auto">
            {pageSubtitle}
          </p>
        </div>

        {/* Hero Image Section */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden mb-20 shadow-lg">
          <Image src={heroImageUrl} alt="Our Team" fill className="object-cover" referrerPolicy="no-referrer" />
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-20">
          <div className="bg-orange-50 p-10 rounded-3xl border border-orange-100">
            <h2 className="font-serif text-3xl font-bold mb-6 text-orange-900">{mission.title}</h2>
            <p className="text-orange-800 font-medium leading-relaxed text-lg">
              {mission.text}
            </p>
          </div>
          <div className="bg-blue-50 p-10 rounded-3xl border border-blue-100">
            <h2 className="font-serif text-3xl font-bold mb-6 text-blue-900">{vision.title}</h2>
            <p className="text-blue-800 font-medium leading-relaxed text-lg">
              {vision.text}
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <h2 className="font-serif text-3xl font-bold mb-6">{story.title}</h2>
          <div className="prose prose-lg text-gray-600 mx-auto font-medium leading-relaxed text-left">
            {(story.paragraphs || []).map((p: any, idx: number) => (
              <p key={idx} className={idx < (story.paragraphs?.length || 0) - 1 ? 'mb-6' : ''}>
                {p.text}
              </p>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-gray-900 mb-6">{teamSection.title}</h2>
            <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
              {teamSection.subtitle}
            </p>
          </div>
          
          <TeamTabs tabs={teamSection.tabs || []} members={teamSection.members || []} />
        </div>

      </div>
    </div>
  );
}
