import Link from 'next/link';
import React from 'react';

const TagButton = ({ tag }) => {
  return (
    <Link href={tag.url}>
      <button
        className={`px-4 py-2  ${
          tag.selected
            ? 'bg-black text-white border border-cyan-300 shadow-sm shadow-cyan-300'
            : 'borderGrd text-[#999999]'
        } rounded-2xl  text-xs font-fira-code`}
      >
        {tag.label}
      </button>
    </Link>
  );
};

export default TagButton;
