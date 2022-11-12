import React, { ComponentProps } from 'react';
import { DocumentRenderer } from '@keystone-6/document-renderer';
import { Hero } from '../Hero/Hero';
import { Callout } from '../Callout/Callout';
import { Quote } from '../Quote/Quote';
import { Carousel } from '../Carousel/Carousel';
import { YouTubeVideo } from '../YouTubeVideo/YouTubeVideo';
import styles from '../../../styles/CustomRenderer.module.css';

type CustomRendererProps = ComponentProps<typeof DocumentRenderer>;

const defaultElementRenderers: CustomRendererProps['renderers'] = {
  block: {
    block: React.Fragment,
    blockquote({ children }) {
      return <blockquote className={styles.blockquote}>{children}</blockquote>;
    },
    code({ children }) {
      return <pre className={styles.pre}>{children}</pre>;
    },
  },
  inline: {
    bold: ({ children }) => {
      return <strong style={{ color: '#363945' }}>{children}</strong>;
    },
    code: ({ children }) => {
      return <code className={styles.code}>{children}</code>;
    },
  },
};

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
      renderers={defaultElementRenderers}
      componentBlocks={customComponentRenderers}
      document={document}
    />
  );
}
