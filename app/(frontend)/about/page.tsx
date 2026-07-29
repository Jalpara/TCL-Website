import React from 'react';
import Image from 'next/image';
import TeamTabs from './TeamTabs';

export default function AboutPage() {
  return (
    <div className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-gray-600 font-medium text-lg max-w-2xl mx-auto">
            We are The Connecting Link — bridging the gap between those who need help and those who can provide it.
          </p>
        </div>

        {/* Hero Image Section */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden mb-20 shadow-lg">
          <Image src="https://picsum.photos/seed/ngoabout/1200/800" alt="Our Team" fill className="object-cover" referrerPolicy="no-referrer" />
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-20">
          <div className="bg-orange-50 p-10 rounded-3xl border border-orange-100">
            <h2 className="font-serif text-3xl font-bold mb-6 text-orange-900">Our Mission</h2>
            <p className="text-orange-800 font-medium leading-relaxed text-lg">
              To create an ecosystem of compassion and action by empowering individuals and organizations to collaborate effectively, ensuring that essential resources, support, and opportunities reach the most vulnerable sections of society.
            </p>
          </div>
          <div className="bg-blue-50 p-10 rounded-3xl border border-blue-100">
            <h2 className="font-serif text-3xl font-bold mb-6 text-blue-900">Our Vision</h2>
            <p className="text-blue-800 font-medium leading-relaxed text-lg">
              We envision a world where no one stands alone in times of need. A society built on the strong foundations of empathy, sustainability, and collective action, creating a better tomorrow for all living beings and our planet.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <h2 className="font-serif text-3xl font-bold mb-6">Our Story</h2>
          <div className="prose prose-lg text-gray-600 mx-auto font-medium leading-relaxed text-left">
            <p className="mb-6">
              The Connecting Link started with a simple observation: there are millions of people wanting to do good, and millions who desperately need that goodness. The problem was never a lack of resources or empathy, but a lack of connection.
            </p>
            <p>
              In 2026, a small group of volunteers decided to act as that bridge. Today, we are a growing movement of individuals, local communities, and corporate partners working seamlessly across various initiatives—from fighting hunger to saving our environment. We believe that when the right links are formed, miracles happen.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-5xl font-bold text-gray-900 mb-6">People Behind Connecting Link</h2>
            <p className="text-xl text-gray-600 font-medium max-w-2xl mx-auto">
              Meet the dedicated individuals and organizations working together to create a lasting impact.
            </p>
          </div>
          
          <TeamTabs />
        </div>

      </div>
    </div>
  );
}
