import { CollectionConfig } from 'payload';

export const Events: CollectionConfig = {
  slug: 'events',
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
      name: 'startDate',
      type: 'date',
      required: true,
    },
    {
      name: 'endDate',
      type: 'date',
    },
    {
      name: 'location',
      type: 'relationship',
      relationTo: 'locations',
    },
    {
      name: 'locationName',
      type: 'text',
      label: 'Location Name (simple text)',
      admin: {
        description: 'Simple location name for display. Used when no location relationship is set.',
      },
    },
    {
      name: 'initiative',
      type: 'relationship',
      relationTo: 'initiatives',
    },
    {
      name: 'description',
      type: 'richText',
    },
    {
      name: 'organizer',
      type: 'relationship',
      relationTo: 'people',
    },
    {
      name: 'capacity',
      type: 'number',
      label: 'Volunteer Capacity',
    }
  ],
};
