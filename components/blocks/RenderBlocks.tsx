import React from 'react';
// We will define these component files next
import { Hero } from './Hero';
import { EntityShowcase } from './EntityShowcase';
import { Process } from './Process';
import { ImpactOverview } from './ImpactOverview';
import { FaqAccordion } from './FaqAccordion';
import { CtaBanner } from './CtaBanner';
import { RichText } from './RichText';

const blockComponents = {
  hero: Hero,
  entityShowcase: EntityShowcase,
  process: Process,
  impactOverview: ImpactOverview,
  faqAccordion: FaqAccordion,
  ctaBanner: CtaBanner,
  richText: RichText,
};

export const RenderBlocks = ({ blocks }: { blocks: any[] }) => {
  if (!blocks || blocks.length === 0) return null;

  return (
    <>
      {blocks.map((block, index) => {
        const BlockComponent = blockComponents[block.blockType as keyof typeof blockComponents];

        if (BlockComponent) {
          return <BlockComponent key={index} {...block} />;
        }

        return <div key={index}>Block type "{block.blockType}" not found.</div>;
      })}
    </>
  );
};
