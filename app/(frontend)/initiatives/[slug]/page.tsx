import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowRight, Activity, Users, HeartHandshake, Building, Handshake, Clock } from 'lucide-react';
import { getPayload } from 'payload';
import configPromise from '@/payload.config';

export default async function InitiativeDetailPage({ params }: { params: { slug: string } }) {
  const payload = await getPayload({ config: configPromise });

  const { docs } = await payload.find({
    collection: 'initiatives',
    where: {
      slug: {
        equals: params.slug,
      },
    },
  });

  const initiative = docs[0] as any;

  if (!initiative) {
    return notFound();
  }

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
  const imgUrl = initiative.coverImage?.url || 'https://picsum.photos/seed/food1/1200/600';

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
          <div className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: initiative.description_html || initiative.shortDescription }} />
        </div>
      </section>

      {/* 03 WHAT WE DO */}
      {/* Keeping some static filler for the layout if dynamic data isn't full enough yet */}
      <section className="py-24 px-6 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className={`text-sm font-bold tracking-widest uppercase mb-4 block ${tagColorText}`}>What We Do</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-gray-900">Our Activities</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, idx) => (
              <div key={idx} className="bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gray-50 ${tagColorText}`}>
                  <Activity size={28} />
                </div>
                <h3 className="font-serif text-2xl font-bold text-gray-900 mb-4">Core Activity {idx + 1}</h3>
                <p className="text-gray-600 font-medium leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
