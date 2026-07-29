import React from 'react';
import { notFound } from 'next/navigation';
import { getPayload } from 'payload';
import configPromise from '@/payload.config';
import { RenderBlocks } from '@/components/blocks/RenderBlocks';

export default async function Page({ params }: { params: { slug?: string[] } }) {
  const payload = await getPayload({ config: configPromise });
  const slug = params?.slug ? params.slug.join('/') : 'home';

  const { docs } = await payload.find({
    collection: 'pages',
    where: {
      slug: {
        equals: slug,
      },
    },
  });

  const page = docs[0];

  if (!page) {
    return notFound();
  }

  return (
    <main className="font-sans text-gray-800">
      <RenderBlocks blocks={page.layout as any[]} />
    </main>
  );
}
