import { CollectionConfig } from 'payload';

export const Metrics: CollectionConfig = {
  slug: 'metrics',
  admin: {
    useAsTitle: 'label',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'label',
      type: 'text',
      required: true,
    },
    {
      name: 'value',
      type: 'text',
      required: true,
    },
    {
      name: 'icon',
      type: 'text',
    },
    {
      name: 'page',
      type: 'select',
      label: 'Display On Page',
      options: [
        { label: 'Home', value: 'home' },
        { label: 'Impact', value: 'impact' },
      ],
      defaultValue: 'home',
      required: true,
    },
    {
      name: 'order',
      type: 'number',
      label: 'Display Order',
      defaultValue: 0,
    },
    {
      name: 'color',
      type: 'text',
      label: 'Icon Color (for impact page)',
    },
    {
      name: 'initiative',
      type: 'relationship',
      relationTo: 'initiatives',
    },
    {
      name: 'dateRecorded',
      type: 'date',
    }
  ],
};
