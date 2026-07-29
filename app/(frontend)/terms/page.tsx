import React from 'react';
import { getPayload } from 'payload';
import configPromise from '@/payload.config';

export default async function TermsConditionsPage() {
  const payload = await getPayload({ config: configPromise });
  const termsData = await payload.findGlobal({ slug: 'terms-conditions' }) as any;

  const title = termsData?.title || 'Terms & Conditions';
  const lastUpdated = termsData?.lastUpdated || new Date().toLocaleDateString();
  const sections = termsData?.sections || [];

  return (
    <div className="py-12 px-6">
      <div className="max-w-4xl mx-auto bg-white rounded-[2.5rem] border border-gray-100 shadow-sm p-8 md:p-16">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-gray-900">{title}</h1>
        <div className="prose prose-lg text-gray-600 max-w-none font-medium leading-relaxed">
          <p className="mb-6">Last updated: {lastUpdated}</p>
          
          {sections.map((section: any, idx: number) => (
            <React.Fragment key={idx}>
              <h2 className="font-serif font-bold text-2xl text-gray-900 mt-10 mb-4">{section.heading}</h2>
              <p className="mb-6">{section.content}</p>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
