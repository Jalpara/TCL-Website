import { GlobalConfig } from 'payload';

export const TermsConditions: GlobalConfig = {
  slug: 'terms-conditions',
  label: 'Terms & Conditions',
  access: {
    read: () => true,
  },
  fields: [
    { name: 'title', type: 'text', required: true, defaultValue: 'Terms & Conditions' },
    { name: 'lastUpdated', type: 'text', label: 'Last Updated Date' },
    {
      name: 'sections',
      type: 'array',
      label: 'Terms Sections',
      fields: [
        { name: 'heading', type: 'text', required: true },
        { name: 'content', type: 'textarea', required: true },
      ],
    },
  ],
};
