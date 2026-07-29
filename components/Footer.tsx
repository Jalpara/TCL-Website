import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Linkedin, Youtube, Mail, Phone, ArrowRight } from 'lucide-react';
import { getPayload } from 'payload';
import configPromise from '@/payload.config';

export default async function Footer() {
  const payload = await getPayload({ config: configPromise });
  const siteConfig = await payload.findGlobal({ slug: 'site-config' }) as any;

  const quickLinks = siteConfig?.quickLinks || [
    { label: 'About Us', url: '/about' },
    { label: 'Initiatives', url: '/initiatives' },
    { label: 'Impact', url: '/impact' },
    { label: 'Events', url: '/events' },
    { label: 'Get Involved', url: '/get-involved' },
  ];

  const resourceLinks = siteConfig?.resourceLinks || [
    { label: 'Stories', url: '/stories' },
    { label: 'Become A Link', url: '/get-involved' },
    { label: 'About Us', url: '/about' },
  ];

  const socials = siteConfig?.socialLinks || {};
  const email = siteConfig?.contactEmail || 'info@theconnectinglink.org';
  const phone = siteConfig?.contactPhone || '+91 98765 43210';
  const copyright = siteConfig?.copyrightText || '© 2026 The Connecting Link. All rights reserved.';
  const newsletterText = siteConfig?.newsletterText || 'Subscribe to our newsletter and never miss an update.';
  const tagline = siteConfig?.tagline || 'Connecting people. Creating impact.';
  const footerSubtext = siteConfig?.footerSubtext || 'Building a better tomorrow, together.';

  return (
    <footer className="bg-brand-dark text-white pt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          <div className="lg:col-span-4">
             <div className="flex items-center gap-3 mb-6">
                <Image src="/assets/WhiteLogo.png" alt="The Connecting Link Logo" width={300} height={100} className="h-20 md:h-20 w-auto" referrerPolicy="no-referrer" />
             </div>
             <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
               {tagline}<br/>
               {footerSubtext}
             </p>
             <div className="flex items-center gap-4 text-gray-400">
               <Link href={socials.instagram || '#'} className="hover:text-white transition-colors"><Instagram size={20} /></Link>
               <Link href={socials.facebook || '#'} className="hover:text-white transition-colors"><Facebook size={20} /></Link>
               <Link href={socials.linkedin || '#'} className="hover:text-white transition-colors"><Linkedin size={20} /></Link>
               <Link href={socials.youtube || '#'} className="hover:text-white transition-colors"><Youtube size={20} /></Link>
             </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-serif font-semibold text-lg text-white mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              {quickLinks.map((link: any, idx: number) => (
                <li key={idx}><Link href={link.url} className="hover:text-white transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-serif font-semibold text-lg text-white mb-6">Resources</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              {resourceLinks.map((link: any, idx: number) => (
                <li key={idx}><Link href={link.url} className="hover:text-white transition-colors">{link.label}</Link></li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-4">
             <h4 className="font-serif font-semibold text-lg text-white mb-6">Stay Connected</h4>
             <p className="text-gray-400 text-sm mb-4">{newsletterText}</p>
             <div className="relative mb-8">
               <input 
                 type="email" 
                 placeholder="Enter your email" 
                 className="w-full bg-white/10 border border-white/20 rounded-full py-3 px-5 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:border-white/40"
               />
               <button className="absolute right-1 top-1 bottom-1 bg-white text-brand-dark px-4 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors">
                 <ArrowRight size={16} />
               </button>
             </div>
             
             <div className="flex flex-col gap-3 text-sm text-gray-400">
               <a href={`mailto:${email}`} className="flex items-center gap-3 hover:text-white transition-colors">
                 <Mail size={16} /> {email}
               </a>
               <a href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-3 hover:text-white transition-colors">
                 <Phone size={16} /> {phone}
               </a>
             </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>{copyright}</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors">Privacy Policy</Link>
            <span className="w-px h-3 bg-white/10" />
            <Link href="/terms" className="hover:text-gray-300 transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
