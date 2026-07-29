import React from 'react';
import Link from 'next/link';
import { HeartHandshake, Handshake, ArrowRight, LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  HeartHandshake, Handshake, ArrowRight
};

const themeMap: Record<string, any> = {
  green: {
    bg: 'bg-green-50',
    border: 'border-green-100',
    iconText: 'text-green-500',
    hoverText: 'group-hover:text-green-600',
  },
  blue: {
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    iconText: 'text-blue-500',
    hoverText: 'group-hover:text-blue-600',
  },
  orange: {
    bg: 'bg-orange-50',
    border: 'border-orange-100',
    iconText: 'text-orange-500',
    hoverText: 'group-hover:text-orange-600',
  }
};

export const CtaBanner = ({ headline, subheadline, buttons }: any) => {
  return (
    <section className="py-20 bg-white px-6 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row items-center gap-12 xl:gap-8 justify-between">
        <div className="text-center xl:text-left">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">{headline}</h2>
          <p className="text-gray-600 text-lg whitespace-pre-line">{subheadline}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full xl:w-1/2">
          {buttons?.map((btn: any, idx: number) => {
            const theme = themeMap[btn.theme] || themeMap.green;
            const IconComp = iconMap[btn.icon] || HeartHandshake;

            return (
              <Link key={idx} href={btn.url} className={`flex items-center gap-5 p-6 rounded-2xl ${theme.bg} border ${theme.border} hover:shadow-[0_2px_5px_rgb(0,0,0,0.02)] hover:-translate-y-1 transition-all duration-300 ease-in-out group`}>
                <div className={theme.iconText}><IconComp size={40} strokeWidth={1.5} /></div>
                <div>
                  <h4 className={`font-bold font-serif text-gray-900 text-xl mb-1 transition-colors duration-300 ease-in-out ${theme.hoverText}`}>{btn.label}</h4>
                  <p className="text-sm font-medium text-gray-600 flex items-center gap-2">Read more <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" /></p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
