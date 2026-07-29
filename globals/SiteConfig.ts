import { GlobalConfig } from 'payload';

export const SiteConfig: GlobalConfig = {
  slug: 'site-config',
  label: 'Site Configuration',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'organizationName',
      type: 'text',
      required: true,
      defaultValue: 'The Connecting Link',
    },
    {
      name: 'tagline',
      type: 'text',
      defaultValue: 'Connecting people. Creating impact.',
    },
    {
      name: 'footerSubtext',
      type: 'text',
      defaultValue: 'Building a better tomorrow, together.',
    },
    {
      name: 'contactEmail',
      type: 'text',
      required: true,
    },
    {
      name: 'contactPhone',
      type: 'text',
    },
    {
      name: 'copyrightText',
      type: 'text',
      defaultValue: '© 2026 The Connecting Link. All rights reserved.',
    },
    {
      name: 'newsletterText',
      type: 'text',
      defaultValue: 'Subscribe to our newsletter and never miss an update.',
    },
    {
      name: 'socialLinks',
      type: 'group',
      fields: [
        { name: 'instagram', type: 'text', defaultValue: '#' },
        { name: 'facebook', type: 'text', defaultValue: '#' },
        { name: 'linkedin', type: 'text', defaultValue: '#' },
        { name: 'youtube', type: 'text', defaultValue: '#' },
      ],
    },
    {
      name: 'quickLinks',
      type: 'array',
      label: 'Quick Links (Footer)',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'url', type: 'text', required: true },
      ],
    },
    {
      name: 'resourceLinks',
      type: 'array',
      label: 'Resource Links (Footer)',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'url', type: 'text', required: true },
      ],
    },
  ],
};
