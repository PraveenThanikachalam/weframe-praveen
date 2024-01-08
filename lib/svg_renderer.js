'use client';
import React from 'react';
import { sanitize } from 'isomorphic-dompurify';
import Image from 'next/image';

const SvgRenderer = ({ svgText, className, color }) => {
  if (!svgText) return null;

  // Modify all instances of stop-color attribute with the specified color
  const coloredSVG = svgText.replace(
    /stop-color="#\w+"/g,
    `stop-color="${color}"`
  );

  // Sanitize the modified SVG content
  const cleanedSVG = sanitize(color ? coloredSVG : svgText);

  return (
    <span className={className}>
      <Image
        src={`data:image/svg+xml,${encodeURIComponent(cleanedSVG)}`}
        alt="icon"
        width={24}
        height={24}
        className="w-full h-full"
        loading='eager'
      />
    </span>
  );
};

export default SvgRenderer;
