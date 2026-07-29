import React from 'react';
import { getPayload } from 'payload';
import configPromise from '@/payload.config';

export default async function PrivacyPolicyPage() {
  const payload = await getPayload({ config: configPromise });
  const privacyData = await payload.findGlobal({ slug: 'privacy-policy' }) as any;

  const title = privacyData?.title || 'Privacy Policy';
  const lastUpdated = privacyData?.lastUpdated || new Date().toLocaleDateString();
  const sections = privacyData?.sections || [];

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
              {section.bulletPoints && section.bulletPoints.length > 0 && (
                <ul className="list-disc pl-6 mb-6">
                  {section.bulletPoints.map((bp: any, bpIdx: number) => (
                    <li key={bpIdx} dangerouslySetInnerHTML={{ __html: bp.text }} />
                  ))}
                </ul>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
