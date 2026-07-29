import { Block } from 'payload';

export const EntityShowcaseBlock: Block = {
  slug: 'entityShowcase',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'subtitle',
      type: 'textarea',
    },
    {
      name: 'entityType',
      type: 'select',
      options: [
        { label: 'Initiatives', value: 'initiatives' },
        { label: 'Stories', value: 'stories' },
        { label: 'Events', value: 'events' },
      ],
      required: true,
    },
    {
      name: 'displayMode',
      type: 'radio',
      options: [
        { label: 'Latest', value: 'latest' },
        { label: 'Manual Selection', value: 'manual' },
      ],
      defaultValue: 'latest',
    },
    {
      name: 'limit',
      type: 'number',
      admin: {
        condition: (_, siblingData) => siblingData.displayMode === 'latest',
      },
      defaultValue: 4,
    },
    {
      name: 'selectedInitiatives',
      type: 'relationship',
      relationTo: 'initiatives',
      hasMany: true,
      admin: {
        condition: (_, siblingData) => siblingData.displayMode === 'manual' && siblingData.entityType === 'initiatives',
      },
    },
    {
      name: 'selectedStories',
      type: 'relationship',
      relationTo: 'stories',
      hasMany: true,
      admin: {
        condition: (_, siblingData) => siblingData.displayMode === 'manual' && siblingData.entityType === 'stories',
      },
    },
    {
      name: 'selectedEvents',
      type: 'relationship',
      relationTo: 'events',
      hasMany: true,
      admin: {
        condition: (_, siblingData) => siblingData.displayMode === 'manual' && siblingData.entityType === 'events',
      },
    }
  ],
};
