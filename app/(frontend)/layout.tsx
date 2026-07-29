import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  weight: ['600', '700'],
  display: 'swap',
});

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'The Connecting Link - Connecting People. Creating Impact.',
  description: 'We connect individuals, communities, volunteers, organisations and changemakers to create meaningful social impact.',
  keywords: 'NGO, social impact, volunteering, community, charity, Mumbai, India',
  openGraph: {
    title: 'The Connecting Link',
    description: 'We connect hearts, resources and opportunities to create lasting change.',
    url: 'https://theconnectinglink.org',
    siteName: 'The Connecting Link',
    images: [
      {
        url: 'https://picsum.photos/seed/og/1200/630',
        width: 1200,
        height: 630,
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  other: {
    'geo.region': 'IN-MH',
    'geo.placename': 'Mumbai',
    'geo.position': '19.0760;72.8777',
    'ICBM': '19.0760, 72.8777'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        {/* Google Analytics for tracking user interactions and conversion metrics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-1234567890" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1234567890');
          `}
        </Script>
      </head>
      <body className="font-sans text-gray-800 antialiased bg-[#FDFDFD]" suppressHydrationWarning>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
