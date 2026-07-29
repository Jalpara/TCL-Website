import React from 'react';

export const RichText = ({ content }: any) => {
  if (!content) return null;

  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-3xl mx-auto prose prose-lg">
        {/* Assuming content is already parsed or we use a Lexical renderer, for now just a placeholder if it's raw JSON */}
        <div dangerouslySetInnerHTML={{ __html: content_html || 'Rich text content...' }} />
      </div>
    </section>
  );
};
