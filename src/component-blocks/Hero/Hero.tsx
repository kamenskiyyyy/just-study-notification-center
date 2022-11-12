import React from 'react';

type HeroProps = {
  imageSrc: string;
  caption:
    | {
        discriminant: false;
      }
    | {
        discriminant: true;
        value: React.ReactNode;
      };
};

export function Hero({ imageSrc, caption }: HeroProps) {
  return (
    <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
    }}>
      <div style={{
          backgroundColor: "white",
          backgroundPosition: "center",
          backgroundSize: "cover",
          minHeight: 400,
          width: "100%",
          backgroundImage: `url(${imageSrc})`,
      }} />
      {caption.discriminant ? <div style={{ textAlign: 'center' }}>{caption.value}</div> : null}
    </div>
  );
}
