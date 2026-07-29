import React from 'react';
import Link from 'next/link';

export const FaqAccordion = ({ title, subtitle, faqs }: any) => {
  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">{title || 'Frequently Asked Questions'}</h2>
          {subtitle && <p className="text-gray-600 font-medium">{subtitle}</p>}
        </div>
        <div className="flex flex-col gap-6">
          {faqs?.map((faq: any, idx: number) => (
            <div key={idx} className="p-6 md:p-8 bg-gray-50 rounded-2xl border border-gray-100">
              <h4 className="font-bold font-serif text-xl mb-3 text-gray-900">{faq.question}</h4>
              <div className="text-gray-600 leading-relaxed font-medium" dangerouslySetInnerHTML={{ __html: faq.answer_html || faq.answer }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
