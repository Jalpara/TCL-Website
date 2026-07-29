import { CollectionConfig } from 'payload';

export const Partners: CollectionConfig = {
  slug: 'partners',
  admin: {
    useAsTitle: 'name',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'logo',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'websiteUrl',
      type: 'text',
    },
    {
      name: 'partnerType',
      type: 'select',
      options: [
        { label: 'Sponsor', value: 'sponsor' },
        { label: 'NGO', value: 'ngo' },
        { label: 'Corporate', value: 'corporate' },
      ],
    }
  ],
};
