import { Block } from 'payload';

export const FaqAccordionBlock: Block = {
  slug: 'faqAccordion',
  fields: [
    {
      name: 'title',
      type: 'text',
      defaultValue: 'Frequently Asked Questions',
    },
    {
      name: 'subtitle',
      type: 'text',
    },
    {
      name: 'faqs',
      type: 'relationship',
      relationTo: 'faqs',
      hasMany: true,
    }
  ],
};
