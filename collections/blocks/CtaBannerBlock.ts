import { Block } from 'payload';

export const CtaBannerBlock: Block = {
  slug: 'ctaBanner',
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
      name: 'buttons',
      type: 'array',
      fields: [
        { name: 'label', type: 'text', required: true },
        { name: 'url', type: 'text', required: true },
        { name: 'icon', type: 'text' }, // e.g. "HeartHandshake"
        {
          name: 'theme',
          type: 'select',
          options: [
            { label: 'Green', value: 'green' },
            { label: 'Blue', value: 'blue' },
            { label: 'Orange', value: 'orange' },
          ],
        }
      ],
    }
  ],
};
