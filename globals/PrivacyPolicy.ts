import { GlobalConfig } from 'payload';

export const PrivacyPolicy: GlobalConfig = {
  slug: 'privacy-policy',
  label: 'Privacy Policy',
  access: {
    read: () => true,
  },
  fields: [
    { name: 'title', type: 'text', required: true, defaultValue: 'Privacy Policy' },
    { name: 'lastUpdated', type: 'text', label: 'Last Updated Date' },
    {
      name: 'sections',
      type: 'array',
      label: 'Policy Sections',
      fields: [
        { name: 'heading', type: 'text', required: true },
        { name: 'content', type: 'textarea', required: true },
        {
          name: 'bulletPoints',
          type: 'array',
          label: 'Bullet Points (optional)',
          fields: [
            { name: 'text', type: 'text', required: true },
          ],
        },
      ],
    },
  ],
};
