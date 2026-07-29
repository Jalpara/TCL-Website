import React from 'react';
import Link from 'next/link';
import { ArrowRight, Leaf, Users, Handshake, Heart, Search, Shield, BookOpen, Utensils } from 'lucide-react';
import Image from 'next/image';

const iconMap: Record<string, any> = {
  Leaf, Users, Handshake, Heart, Search, Shield, BookOpen, Utensils
};

export const Process = ({ title, subtitle, steps }: any) => {
  return (
    <section className="py-20 bg-white border-t border-gray-100 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-serif text-3xl md:text-4xl font-bold mb-16">{title}</h2>
        
        <div className="relative mt-8 max-w-5xl mx-auto flex flex-col md:flex-row justify-between gap-12 md:gap-4">
          <div className="hidden md:block absolute top-[3rem] left-16 right-16 border-t-[3px] border-dashed border-gray-200 z-0" />
          
          {steps?.map((item: any, idx: number) => {
            const IconComponent = iconMap[item.icon] || Handshake;
            return (
              <div key={idx} className="relative z-10 flex flex-col items-center text-center flex-1 bg-white px-2">
                <div className="relative flex justify-center mb-6">
                   <div className="w-9 h-9 rounded-full bg-brand-dark text-white flex items-center justify-center text-sm font-bold absolute -top-4 -left-4 shadow-lg border-[3px] border-white z-20">
                     {`0${idx + 1}`}
                   </div>
                   <div className="w-24 h-24 rounded-full border-2 border-gray-100 bg-white shadow-sm flex items-center justify-center text-gray-700 relative z-10">
                      <IconComponent size={36} strokeWidth={1.5} />
                   </div>
                </div>
                <h4 className="font-bold text-lg mb-3">{item.title}</h4>
                <p className="text-gray-600 text-sm max-w-[200px] leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
