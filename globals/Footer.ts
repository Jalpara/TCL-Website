import { GlobalConfig } from 'payload';

export const Footer: GlobalConfig = {
  slug: 'footer',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'missionStatement',
      type: 'textarea',
      defaultValue: 'Connecting people. Creating impact. Building a better tomorrow, together.',
    },
    {
      name: 'quickLinks',
      type: 'array',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'url', type: 'text', required: true },
      ],
    },
    {
      name: 'resources',
      type: 'array',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'url', type: 'text', required: true },
      ],
    },
    {
      name: 'newsletterText',
      type: 'text',
      defaultValue: 'Subscribe to our newsletter and never miss an update.',
    },
    {
      name: 'copyrightText',
      type: 'text',
    }
  ],
};
