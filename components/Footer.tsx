import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Facebook, Linkedin, Youtube, Mail, Phone, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white pt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
          
          <div className="lg:col-span-4">
             <div className="flex items-center gap-3 mb-6">
                <Image src="/assets/logo.png" alt="The Connecting Link Logo" width={300} height={100} className="h-20 md:h-20 w-auto invert brightness-[6] grayscale" referrerPolicy="no-referrer" />
             </div>
             <p className="text-gray-400 text-sm leading-relaxed mb-8 max-w-sm">
               Connecting people. Creating impact.<br/>
               Building a better tomorrow, together.
             </p>
             <div className="flex items-center gap-4 text-gray-400">
               <Link href="#" className="hover:text-white transition-colors"><Instagram size={20} /></Link>
               <Link href="#" className="hover:text-white transition-colors"><Facebook size={20} /></Link>
               <Link href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></Link>
               <Link href="#" className="hover:text-white transition-colors"><Youtube size={20} /></Link>
             </div>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-serif font-semibold text-lg text-white mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/initiatives" className="hover:text-white transition-colors">Initiatives</Link></li>
              <li><Link href="/impact" className="hover:text-white transition-colors">Impact</Link></li>
              <li><Link href="/events" className="hover:text-white transition-colors">Events</Link></li>
              <li><Link href="/get-involved" className="hover:text-white transition-colors">Get Involved</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-serif font-semibold text-lg text-white mb-6">Resources</h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-400">
              <li><Link href="/stories" className="hover:text-white transition-colors">Stories</Link></li>
              <li><Link href="/get-involved" className="hover:text-white transition-colors">Become A Link</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-4">
             <h4 className="font-serif font-semibold text-lg text-white mb-6">Stay Connected</h4>
             <p className="text-gray-400 text-sm mb-4">Subscribe to our newsletter and never miss an update.</p>
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
               <a href="mailto:info@theconnectinglink.org" className="flex items-center gap-3 hover:text-white transition-colors">
                 <Mail size={16} /> info@theconnectinglink.org
               </a>
               <a href="tel:+919876543210" className="flex items-center gap-3 hover:text-white transition-colors">
                 <Phone size={16} /> +91 98765 43210
               </a>
             </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2026 The Connecting Link. All rights reserved.</p>
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
