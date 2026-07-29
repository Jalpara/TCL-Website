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
