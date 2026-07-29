import { CollectionConfig } from 'payload';

export const Initiatives: CollectionConfig = {
  slug: 'initiatives',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'text',
      label: 'Subtitle (e.g. "Food Donation Drives")',
    },
    {
      name: 'longDescription',
      type: 'textarea',
      label: 'Long Description (for listing page)',
    },
    {
      name: 'fullDescription',
      type: 'richText',
    },
    {
      name: 'icon',
      type: 'text',
    },
    {
      name: 'themeColor',
      type: 'text',
    },
    {
      name: 'imageUrl',
      type: 'text',
      label: 'Image URL (for listing page)',
    },
    {
      name: 'challenge',
      type: 'textarea',
      label: 'The Challenge',
    },
    {
      name: 'activities',
      type: 'array',
      label: 'Activities',
      fields: [
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true }
      ]
    },
    {
      name: 'methodology',
      type: 'array',
      label: 'Methodology Steps',
      fields: [
        { name: 'stepNumber', type: 'text', required: true },
        { name: 'title', type: 'text', required: true },
        { name: 'description', type: 'textarea', required: true }
      ]
    },
    {
      name: 'impactNumbers',
      type: 'array',
      label: 'Impact Statistics',
      fields: [
        { name: 'value', type: 'text', required: true },
        { name: 'label', type: 'text', required: true }
      ]
    }
  ],
};
