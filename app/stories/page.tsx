import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function StoriesPage() {
  const stories = [
    {
      id: 1,
      img: 'https://picsum.photos/seed/meal1/600/400',
      tag: 'The Shared Plate', tagColor: 'bg-orange-500',
      title: 'A warm meal, a brighter day',
      desc: 'How a simple meal brought smiles to a community.'
    },
    {
      id: 2,
      img: 'https://picsum.photos/seed/quiet1/600/400',
      tag: 'The Better Choice', tagColor: 'bg-purple-500',
      title: 'From silence to strength',
      desc: 'A story of healing, hope and fighting addiction.'
    },
    {
      id: 3,
      img: 'https://picsum.photos/seed/earth1/600/400',
      tag: 'The Common Ground', tagColor: 'bg-green-500',
      title: 'Planting a greener future',
      desc: 'Students came together to revive their local forest patch.'
    },
    {
      id: 4,
      img: 'https://picsum.photos/seed/edu1/600/400',
      tag: 'The Learning Circle', tagColor: 'bg-blue-500',
      title: 'Education changes everything',
      desc: 'Supporting a child today to build a better tomorrow.'
    },
    {
      id: 5,
      img: 'https://picsum.photos/seed/meal2/600/400',
      tag: 'The Shared Plate', tagColor: 'bg-orange-500',
      title: 'Festival of giving',
      desc: 'Sharing festive joy through massive food drives in the city.'
    },
    {
      id: 6,
      img: 'https://picsum.photos/seed/edu3/600/400',
      tag: 'The Learning Circle', tagColor: 'bg-blue-500',
      title: 'A new library for the village',
      desc: 'How 500 books transformed the weekends for rural children.'
    }
  ];

  return (
    <div className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">Stories That Inspire</h1>
          <p className="text-gray-600 font-medium text-lg max-w-2xl mx-auto">
            Read about the real impact made by our volunteers, partners, and the communities we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <div key={idx} className="rounded-3xl overflow-hidden shadow-sm border border-gray-100 bg-white hover:shadow-md transition-shadow group flex flex-col">
              <div className="relative h-56 w-full overflow-hidden bg-gray-200">
                <Image src={story.img} alt={story.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" referrerPolicy="no-referrer" />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <span className={`self-start text-xs font-bold uppercase tracking-wider text-white px-3 py-1.5 rounded-full mb-5 ${story.tagColor}`}>
                  {story.tag}
                </span>
                <h4 className="font-serif font-bold text-2xl mb-3 text-gray-900 leading-tight group-hover:text-brand-dark transition-colors">{story.title}</h4>
                <p className="text-gray-500 font-medium leading-relaxed mb-8 flex-1">{story.desc}</p>
                <Link href={`/stories/${story.id}`} className="font-bold text-sm text-brand-dark flex items-center gap-1 hover:opacity-80">
                  Read full story <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
