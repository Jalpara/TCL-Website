import { Block } from 'payload';

export const HeroBlock: Block = {
  slug: 'hero',
  fields: [
    {
      name: 'headline',
      type: 'text',
      required: true,
    },
    {
      name: 'subheadline',
      type: 'textarea',
    },
    {
      name: 'primaryCta',
      type: 'group',
      fields: [
        { name: 'label', type: 'text' },
        { name: 'url', type: 'text' },
      ],
    },
    {
      name: 'secondaryCta',
      type: 'group',
      fields: [
        { name: 'label', type: 'text' },
        { name: 'url', type: 'text' },
      ],
    },
    {
      name: 'bottomText',
      type: 'richText',
    },
    {
      name: 'graphic',
      type: 'upload',
      relationTo: 'media',
    }
  ],
};
