import { Block } from 'payload';

export const ImpactOverviewBlock: Block = {
  slug: 'impactOverview',
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'metrics',
      type: 'relationship',
      relationTo: 'metrics',
      hasMany: true,
      admin: {
        description: 'Select metrics to feature in this section.',
      },
    },
    {
      name: 'cta',
      type: 'group',
      fields: [
        { name: 'label', type: 'text' },
        { name: 'url', type: 'text' },
      ],
    }
  ],
};
