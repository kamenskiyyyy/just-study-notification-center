import React, { ComponentProps } from 'react';
import { DocumentRenderer } from '@keystone-6/document-renderer';
import { Hero } from '../Hero/Hero';
import { Callout } from '../Callout/Callout';
import { Quote } from '../Quote/Quote';
import { Carousel } from '../Carousel/Carousel';
import { YouTubeVideo } from '../YouTubeVideo/YouTubeVideo';

type CustomRendererProps = ComponentProps<typeof DocumentRenderer>;

const defaultElementRenderers: CustomRendererProps['renderers'] = {
  block: {
    block: React.Fragment,
    blockquote({ children }) {
      return <blockquote style={{
        margin: 0,
        borderLeft: "5px solid #D1D0CE",
        padding: "8px 24px"
      }}>{children}</blockquote>;
    },
    code({ children }) {
      return <pre style={{
        fontFamily: `Consolas, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", Monaco, "Courier New", Courier, monospace`,
        whiteSpace: "pre-wrap",
        overflowX: "auto",
        backgroundColor: "#2c3e50",
        color: "whitesmoke",
        padding: 16,
        fontSize: "1.25rem",
        borderRadius: 8

      }}>{children}</pre>;
    },
  },
  inline: {
    bold: ({ children }) => {
      return <strong style={{ color: '#363945' }}>{children}</strong>;
    },
    code: ({ children }) => {
      return <code style={{
        fontFamily: "monospace",
        wordWrap: "break-word",
        boxDecorationBreak: "clone",
        padding: ".1rem .3rem .2rem",
        borderRadius: 4,
        backgroundColor: "#eee"
      }}>{children}</code>;
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
      componentBlocks={customComponentRenderers}
      document={document}
    />
  );
}
