'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Initiatives', path: '/initiatives' },
    { name: 'Impact', path: '/impact' },
    { name: 'Events', path: '/events' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FDFDFD]/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/assets/logo.png" alt="The Connecting Link Logo" width={300} height={100} className="h-16 md:h-16 w-auto" referrerPolicy="no-referrer" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              href={link.path} 
              className={`font-medium transition-colors relative ${
                isActive(link.path) 
                  ? 'text-brand-dark' 
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {link.name}
              {isActive(link.path) && (
                <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-dark" />
              )}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex">
          <Link href="/get-involved" className="bg-brand-dark text-white px-6 py-2.5 rounded-full font-medium hover:bg-gray-800 transition-colors flex items-center gap-2">
            Become A Link <ArrowRight size={16} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Menu">
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 flex flex-col gap-4 absolute w-full shadow-lg">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              href={link.path} 
              onClick={() => setMobileMenuOpen(false)}
              className={`font-medium ${isActive(link.path) ? 'font-bold text-brand-dark' : 'text-gray-600'}`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/get-involved" 
            onClick={() => setMobileMenuOpen(false)}
            className="bg-brand-dark text-white px-6 py-2.5 rounded-full font-medium mt-2 flex items-center justify-center gap-2"
          >
            Become A Link <ArrowRight size={16} />
          </Link>
        </div>
      )}
    </header>
  );
}
