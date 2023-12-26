'use client';

import React from 'react';
import { sanitize } from 'isomorphic-dompurify';
import Image from 'next/image';

const SvgRenderer = ({ svgText, className }) => {
  if (!svgText) return;

  const cleanedSVG = sanitize(svgText);

  return (
    <span className={className}>
      <Image
        src={`data:image/svg+xml,${encodeURIComponent(cleanedSVG)}`}
        alt="icon"
        width={24}
        height={24}
        className="w-full h-full"
      />
    </span>
  );
};

export default SvgRenderer;
