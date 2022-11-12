import React from 'react';

type CarouselProps = {
  items: {
    title: string;
    imageSrc: string;
  }[];
};

export function Carousel({ items = [] }: CarouselProps) {
  return (
    <div style={{
      overflowY: "scroll",
      scrollSnapType: "y mandatory",
      display: "grid",
      gridGap: 8,
      gridTemplateColumns: "repeat(4, minmax(min(100%, 640px), 100%))",
      gridAutoFlow: "column"
    }}>
      {items.map(item => {
        return (
          <div key={item.imageSrc} style={{
            scrollSnapAlign: "center",
            scrollSnapStop: "always",
            padding: 8,
            boxSizing: "border-box",
            borderRadius: 6,
            background: "#eff3f6"
          }}>
            <img role="presentation" src={item.imageSrc}  style={{
              objectFit: "cover",
              objectPosition: "center center",
              height: 320,
              width: "100%",
              borderRadius: 4
            }} />
            <h1  style={{
              fontSize: "1.25rem",
              lineHeight: "unset",
              marginTop: 8,
            }}>{item.title}</h1>
          </div>
        );
      })}
    </div>
  );
}
