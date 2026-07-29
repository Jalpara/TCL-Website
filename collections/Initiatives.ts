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
      name: 'fullDescription',
      type: 'richText',
    },
    {
      name: 'icon',
      type: 'text', // using text to store lucide icon name for simplicity, or we can use media later
    },
    {
      name: 'themeColor',
      type: 'text', // e.g. "orange", "green"
    }
  ],
};
