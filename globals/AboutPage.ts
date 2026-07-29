import { GlobalConfig } from 'payload';

export const AboutPage: GlobalConfig = {
  slug: 'about-page',
  label: 'About Page',
  access: {
    read: () => true,
  },
  fields: [
    { name: 'pageTitle', type: 'text', required: true, defaultValue: 'About Us' },
    {
      name: 'pageSubtitle',
      type: 'textarea',
      defaultValue: 'We are The Connecting Link — bridging the gap between those who need help and those who can provide it.',
    },
    {
      name: 'heroImageUrl',
      type: 'text',
      label: 'Hero Image URL',
      defaultValue: 'https://picsum.photos/seed/ngoabout/1200/800',
    },
    // Mission & Vision
    {
      name: 'mission',
      type: 'group',
      label: 'Our Mission',
      fields: [
        { name: 'title', type: 'text', defaultValue: 'Our Mission' },
        { name: 'text', type: 'textarea', required: true },
      ],
    },
    {
      name: 'vision',
      type: 'group',
      label: 'Our Vision',
      fields: [
        { name: 'title', type: 'text', defaultValue: 'Our Vision' },
        { name: 'text', type: 'textarea', required: true },
      ],
    },
    // Our Story
    {
      name: 'story',
      type: 'group',
      label: 'Our Story',
      fields: [
        { name: 'title', type: 'text', defaultValue: 'Our Story' },
        {
          name: 'paragraphs',
          type: 'array',
          fields: [
            { name: 'text', type: 'textarea', required: true },
          ],
        },
      ],
    },
    // Team Section
    {
      name: 'teamSection',
      type: 'group',
      label: 'Team Section',
      fields: [
        { name: 'title', type: 'text', defaultValue: 'People Behind Connecting Link' },
        { name: 'subtitle', type: 'textarea', defaultValue: 'Meet the dedicated individuals and organizations working together to create a lasting impact.' },
        {
          name: 'tabs',
          type: 'array',
          label: 'Team Tabs',
          fields: [
            { name: 'tabId', type: 'text', required: true },
            { name: 'tabLabel', type: 'text', required: true },
          ],
        },
        {
          name: 'members',
          type: 'array',
          label: 'Team Members',
          fields: [
            { name: 'name', type: 'text', required: true },
            { name: 'role', type: 'text', required: true },
            { name: 'imageUrl', type: 'text', required: true },
            { name: 'tabId', type: 'text', required: true },
          ],
        },
      ],
    },
  ],
};
