import { CollectionConfig } from 'payload';

export const Stories: CollectionConfig = {
  slug: 'stories',
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
      name: 'summary',
      type: 'textarea',
      required: true,
    },
    {
      name: 'content',
      type: 'richText',
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'imageUrl',
      type: 'text',
      label: 'Image URL (fallback)',
      admin: {
        description: 'Used when no uploaded featured image is set.',
      },
    },
    {
      name: 'initiative',
      type: 'relationship',
      relationTo: 'initiatives',
    },
    {
      name: 'author',
      type: 'relationship',
      relationTo: 'people',
    },
    {
      name: 'publishedDate',
      type: 'date',
    },
    {
      name: 'categories',
      type: 'relationship',
      relationTo: 'categories',
      hasMany: true,
    }
  ],
};
