import React, { ReactNode } from 'react';

type CalloutProps = {
  intent: 'info' | 'warning' | 'error' | 'success';
  content: ReactNode;
};

export function Callout({ intent, content }: CalloutProps) {
  let backgroundColor = 'transparent';
  let textColor = 'current';
  let borderColor = 'current';
  switch (intent) {
    case 'info': {
      backgroundColor = '#dbeafe';
      textColor = '#1e40af';
      borderColor = '#1e40af';
      break;
    }
    case 'warning': {
      backgroundColor = '#fef9c3';
      textColor = '#854d0e';
      borderColor = '#854d0e';
      break;
    }
    case 'error': {
      backgroundColor = '#fee2e2';
      textColor = '#991b1b';
      borderColor = '#991b1b';
      break;
    }
    case 'success': {
      backgroundColor = '#dcfce7';
      textColor = '#166534';
      borderColor = '#166534';
      break;
    }
  }

  return (
    <div
      style={{
        background: backgroundColor,
        borderColor,
        padding: "0 8px",
        borderLeft: "4px solid",
        borderRadius: 4,
        margin: "8px 0",
        display: "grid",
        gridTemplateColumns: "48px 1fr"
      }}
    >
      <div style={{ color: textColor,
        display: "flex",
        justifyContent: "center",
        paddingTop: 16,  }} />
      <div style={{ flex: 1 }}>{content}</div>
    </div>
  );
}
