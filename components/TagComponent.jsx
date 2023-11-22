'use client';
import React from 'react';
import TagButton from './ui/TagButton';
const TagComponent = ({ title, labels }) => {
  return (
    <div className=" w-full mt-6 flex flex-col items-start gap-3 justify-center">
      <p className="text-sm text-cyan-200">{title}</p>
      <div className="flex flex-wrap gap-2">
        {labels.map((label, index) => {
          return (
            <TagButton
              key={index}
              name={label}
              selected={labels[0] === label}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TagComponent;
