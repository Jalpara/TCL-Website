import React from 'react';
import Link from 'next/link';
import { ArrowRight, Leaf, Users, Handshake, Heart, Search, Shield, BookOpen, Utensils, HeartHandshake } from 'lucide-react';

const iconMap: Record<string, any> = {
  Leaf, Users, Handshake, Heart, Search, Shield, BookOpen, Utensils, HeartHandshake
};

export const ImpactOverview = ({ title, metrics, cta }: any) => {
  return (
    <section className="bg-brand-dark text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl font-bold inline-block relative">
            {title}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-blue-500 rounded-full" />
          </h2>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10 text-center">
          {metrics?.map((metric: any, idx: number) => {
            const IconComp = iconMap[metric.icon] || Leaf;
            return (
              <div key={idx} className="flex flex-col items-center">
                <div className="text-gray-300 mb-4 opacity-80">
                  <IconComp size={40} strokeWidth={1.5} />
                </div>
                <div className="text-2xl md:text-4xl font-bold text-[#F6AD55] mb-2">{metric.value}</div>
                <div className="text-sm font-bold text-gray-300 uppercase tracking-wide leading-tight">{metric.label}</div>
              </div>
            );
          })}
        </div>
        
        {cta?.label && cta?.url && (
          <div className="mt-16 text-center">
            <Link href={cta.url} className="inline-flex items-center gap-2 border border-white/30 text-white hover:bg-white hover:text-brand-dark px-8 py-3 rounded-full font-bold transition-all">
              {cta.label} <ArrowRight size={18} />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
