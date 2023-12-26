'use client';

import React from 'react';
import { sanitize } from 'isomorphic-dompurify';
import Image from 'next/image';

const SvgRenderer = ({ svgText, className, color = '#000' }) => {
  if (!svgText) return;

  const cleanedSVG = sanitize(svgText);
  const modifiedSvgText = cleanedSVG.replace(
    /fill="[^"]*"/g,
    `fill="${color}"`
  );

  return (
    <span className={className}>
      <Image
        src={`data:image/svg+xml,${encodeURIComponent(modifiedSvgText)}`}
        alt="icon"
        width={24}
        height={24}
        className="w-full h-full"
      />
    </span>
  );
};

export default SvgRenderer;
