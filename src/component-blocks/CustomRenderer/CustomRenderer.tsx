import React, { ComponentProps } from 'react';
import { DocumentRenderer } from '@keystone-6/document-renderer';
import { Hero } from '../Hero/Hero';
import { Callout } from '../Callout/Callout';
import { Quote } from '../Quote/Quote';
import { Carousel } from '../Carousel/Carousel';
import { YouTubeVideo } from '../YouTubeVideo/YouTubeVideo';

type CustomRendererProps = ComponentProps<typeof DocumentRenderer>;

const customComponentRenderers: CustomRendererProps['componentBlocks'] = {
  hero: props => {
    return <Hero {...props} />;
  },
  callout: props => {
    return <Callout {...props} />;
  },
  quote: props => {
    return <Quote {...props} />;
  },
  carousel: props => {
    return <Carousel {...props} />;
  },
  youtubeVideo: props => {
    return <YouTubeVideo {...props} />;
  },
};

export function CustomRenderer({ document }: CustomRendererProps) {
  return (
    <DocumentRenderer
      componentBlocks={customComponentRenderers}
      document={document}
    />
  );
}
