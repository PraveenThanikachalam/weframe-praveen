import React from 'react';

const TagButton = ({ name, selected }) => {
  return (
    <button
      className={`px-4 py-2  ${
        selected
          ? 'bg-black text-white border border-cyan-300 shadow-sm shadow-cyan-300'
          : 'borderGrd'
      } rounded-2xl text-gray-500 md:text-sm text-xs lg:text-sm font-fira-code`}
    >
      {name}
    </button>
  );
};

export default TagButton;
