import React, { ReactNode } from 'react';

type QuoteProps = {
  attribution: ReactNode;
  content: ReactNode;
};

export function Quote({ attribution, content }: QuoteProps) {
  return (
    <div style={{
        paddingLeft: 16,
        backgroundColor: "#f3f5f6",
        padding: "4px 12px 16px 48px",
        position: "relative",
        borderRadius: 6
    }}>
      <div style={{ fontStyle: 'italic', color: '#4A5568' }}>{content}</div>
      <div style={{ fontWeight: 'bold', color: '#47546b' }}>— {attribution}</div>
    </div>
  );
}
