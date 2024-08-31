import React from 'react';

export default function SectionHeader({ header, light, title }) {
  return (
    <div className={`section-header ${light ? 'light' : ''}`}>
      <h1>{header}</h1>
      {title && <p>{title}</p>}
    </div>
  );
}
