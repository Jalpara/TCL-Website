import { CollectionConfig } from 'payload';
import { HeroBlock } from './blocks/HeroBlock';
import { EntityShowcaseBlock } from './blocks/EntityShowcaseBlock';
import { ProcessBlock } from './blocks/ProcessBlock';
import { ImpactOverviewBlock } from './blocks/ImpactOverviewBlock';
import { FaqAccordionBlock } from './blocks/FaqAccordionBlock';
import { CtaBannerBlock } from './blocks/CtaBannerBlock';
import { RichTextBlock } from './blocks/RichTextBlock';

export const Pages: CollectionConfig = {
  slug: 'pages',
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
      name: 'layout',
      type: 'blocks',
      blocks: [
        HeroBlock,
        EntityShowcaseBlock,
        ProcessBlock,
        ImpactOverviewBlock,
        FaqAccordionBlock,
        CtaBannerBlock,
        RichTextBlock,
      ],
    },
    {
      name: 'seo',
      type: 'group',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
      ],
    }
  ],
};
