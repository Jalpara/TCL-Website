import { GlobalConfig } from 'payload';

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  label: 'Home Page',
  access: {
    read: () => true,
  },
  fields: [
    // Hero Section
    {
      name: 'hero',
      type: 'group',
      label: 'Hero Section',
      fields: [
        { name: 'headline', type: 'text', required: true, defaultValue: 'Connecting People.\nCreating Impact.' },
        { name: 'subheadline', type: 'textarea', required: true },
        {
          name: 'primaryCta',
          type: 'group',
          fields: [
            { name: 'label', type: 'text', required: true, defaultValue: 'Explore Initiatives' },
            { name: 'url', type: 'text', required: true, defaultValue: '/initiatives' },
          ],
        },
        {
          name: 'secondaryCta',
          type: 'group',
          fields: [
            { name: 'label', type: 'text', required: true, defaultValue: 'Become a Connecting Link' },
            { name: 'url', type: 'text', required: true, defaultValue: '/get-involved' },
          ],
        },
        { name: 'bottomText', type: 'text', defaultValue: 'Join a movement that believes no one is alone in doing good.' },
      ],
    },
    // What Is Section
    {
      name: 'whatIs',
      type: 'group',
      label: 'What Is Section',
      fields: [
        { name: 'title', type: 'text', defaultValue: 'What is The Connecting Link?' },
        { name: 'description', type: 'textarea' },
        { name: 'linkText', type: 'text', defaultValue: 'Know more about us' },
        {
          name: 'pillars',
          type: 'array',
          label: 'Three Pillars',
          maxRows: 3,
          fields: [
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'text', required: true },
            { name: 'icon', type: 'text', required: true },
            { name: 'bgColor', type: 'text', required: true },
            { name: 'iconColor', type: 'text', required: true },
            { name: 'borderColor', type: 'text' },
          ],
        },
      ],
    },
    // How It Works Section
    {
      name: 'howItWorks',
      type: 'group',
      label: 'How It Works Section',
      fields: [
        { name: 'title', type: 'text', defaultValue: 'How It Works' },
        {
          name: 'steps',
          type: 'array',
          maxRows: 4,
          fields: [
            { name: 'step', type: 'text', required: true },
            { name: 'title', type: 'text', required: true },
            { name: 'description', type: 'text', required: true },
            { name: 'icon', type: 'text', required: true },
          ],
        },
      ],
    },
    // Section Titles
    {
      name: 'initiativesSectionTitle',
      type: 'text',
      label: 'Initiatives Section Title',
      defaultValue: 'Our Initiatives',
    },
    {
      name: 'impactSection',
      type: 'group',
      label: 'Impact Section',
      fields: [
        { name: 'title', type: 'text', defaultValue: 'Our Impact So Far' },
        { name: 'ctaLabel', type: 'text', defaultValue: 'View detailed report' },
        { name: 'ctaUrl', type: 'text', defaultValue: '/impact' },
      ],
    },
    {
      name: 'storiesSectionTitle',
      type: 'text',
      label: 'Stories Section Title',
      defaultValue: 'Stories That Inspire',
    },
    {
      name: 'eventsSectionTitle',
      type: 'text',
      label: 'Events Section Title',
      defaultValue: 'Upcoming Events',
    },
    // FAQ Section
    {
      name: 'faqSection',
      type: 'group',
      label: 'FAQ Section',
      fields: [
        { name: 'title', type: 'text', defaultValue: 'Frequently Asked Questions' },
        { name: 'subtitle', type: 'text', defaultValue: 'Everything you need to know about getting involved.' },
      ],
    },
    // CTA Section
    {
      name: 'ctaSection',
      type: 'group',
      label: 'Bottom CTA Section',
      fields: [
        { name: 'headline', type: 'text', defaultValue: 'You can be the link.' },
        { name: 'subtext', type: 'text', defaultValue: 'Every act of kindness creates a connection that changes lives.' },
        {
          name: 'card1',
          type: 'group',
          label: 'Card 1 (I Want To Help)',
          fields: [
            { name: 'title', type: 'text', defaultValue: 'I Want To Help' },
            { name: 'subtitle', type: 'text', defaultValue: 'Volunteer your time' },
            { name: 'url', type: 'text', defaultValue: '/get-involved' },
          ],
        },
        {
          name: 'card2',
          type: 'group',
          label: 'Card 2 (I Want To Partner)',
          fields: [
            { name: 'title', type: 'text', defaultValue: 'I Want To Partner' },
            { name: 'subtitle', type: 'text', defaultValue: "Let's collaborate" },
            { name: 'url', type: 'text', defaultValue: '/get-involved' },
          ],
        },
      ],
    },
  ],
};
