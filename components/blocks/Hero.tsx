import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const Hero = ({ headline, subheadline, primaryCta, secondaryCta, graphic }: any) => {
  const imageUrl = graphic?.url || '/assets/hero-graphic.png'; // Fallback

  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 px-6 bg-[#fff]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left z-10">
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6 whitespace-pre-line">
            {headline}
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
            {subheadline}
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-10">
            {primaryCta?.label && primaryCta?.url && (
              <Link href={primaryCta.url} className="bg-brand-dark text-white px-8 py-3.5 rounded-full font-bold hover:bg-gray-800 transition-colors flex items-center gap-2 w-full sm:w-auto justify-center">
                {primaryCta.label} <ArrowRight size={18} />
              </Link>
            )}
            {secondaryCta?.label && secondaryCta?.url && (
              <Link href={secondaryCta.url} className="bg-transparent border border-gray-300 text-gray-800 px-8 py-3.5 rounded-full font-bold hover:bg-gray-50 transition-colors w-full sm:w-auto text-center">
                {secondaryCta.label}
              </Link>
            )}
          </div>
          
          {/* Static text for now, could be passed from bottomText rich text */}
          <p className="text-gray-500 font-medium text-sm md:text-base">
            Join a movement that believes <strong className="text-gray-800 font-bold">no one is alone</strong><br className="hidden lg:block"/> in doing good.
          </p>
        </div>

        {/* Right Graphic */}
        <div className="flex-1 relative w-full h-[400px] md:h-[450px]">
           <div className="absolute inset-0 rounded-[2rem]">
             <Image 
               src={imageUrl} 
               alt="Hero Graphic" 
               fill 
               className="object-cover bg-cover" 
               priority
               referrerPolicy="no-referrer"
             />
           </div>
        </div>
      </div>
    </section>
  );
};
