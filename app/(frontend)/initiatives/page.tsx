import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Utensils, Shield, Leaf, BookOpen, ArrowRight } from 'lucide-react';

export default function InitiativesPage() {
  const initiatives = [
    { 
      title: 'The Shared Plate', 
      desc: 'Food Donation Drives',
      longDesc: 'Combating hunger by rescuing surplus food and distributing freshly cooked meals to underserved communities. We believe no one should go to bed hungry.',
      Icon: Utensils, color: 'text-orange-500', bg: 'bg-orange-50', border: 'border-orange-100',
      img: 'https://picsum.photos/seed/food1/600/400'
    },
    { 
      title: 'The Better Choice', 
      desc: 'Anti Addiction',
      longDesc: 'Providing awareness, counseling, and rehabilitation support to individuals struggling with addiction, helping them rebuild their lives and reintegrate into society.',
      Icon: Shield, color: 'text-purple-500', bg: 'bg-purple-50', border: 'border-purple-100',
      img: 'https://picsum.photos/seed/addict1/600/400'
    },
    { 
      title: 'The Common Ground', 
      desc: 'Mother Earth',
      longDesc: 'Taking active steps towards environmental conservation through tree plantation drives, beach cleanups, and sustainability workshops to protect our planet for future generations.',
      Icon: Leaf, color: 'text-green-500', bg: 'bg-green-50', border: 'border-green-100',
      img: 'https://picsum.photos/seed/earth1/600/400'
    },
    { 
      title: 'The Learning Circle', 
      desc: 'Education & Literacy',
      longDesc: 'Empowering children and adults through foundational literacy programs, after-school mentoring, and digital education centers in remote areas.',
      Icon: BookOpen, color: 'text-blue-500', bg: 'bg-blue-50', border: 'border-blue-100',
      img: 'https://picsum.photos/seed/edu2/600/400'
    },
  ];

  return (
    <div className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Our Initiatives</h1>
          <p className="text-gray-600 font-medium text-lg max-w-2xl mx-auto">
            We focus our efforts on four key pillars to create a holistic, sustainable impact across communities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {initiatives.map((item, idx) => (
            <div key={idx} className={`bg-white rounded-3xl overflow-hidden border ${item.border} shadow-sm flex flex-col group hover:shadow-md transition-shadow`}>
              <div className="h-64 relative bg-gray-100 overflow-hidden">
                <Image src={item.img} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" referrerPolicy="no-referrer" />
                <div className="absolute top-4 left-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${item.bg} ${item.color} shadow-sm`}>
                    <item.Icon size={24} />
                  </div>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h2 className="font-serif font-bold text-2xl mb-2 text-gray-900">{item.title}</h2>
                <h3 className={`font-bold text-sm uppercase tracking-widest mb-4 ${item.color}`}>{item.desc}</h3>
                <p className="text-gray-600 font-medium leading-relaxed mb-8 flex-1">
                  {item.longDesc}
                </p>
                <Link href="/initiatives/1" className="inline-flex items-center gap-2 font-bold text-brand-dark hover:opacity-80 transition-opacity">
                  Learn more <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
