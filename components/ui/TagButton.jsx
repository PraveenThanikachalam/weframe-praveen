import React from 'react';

const TagButton = ({ name }) => {
  return (
    <button className="px-4 py-2 blogBtn borderGrd rounded-2xl   text-gray-500 md:text-sm text-xs lg:text-sm">
      {name}
    </button>
  );
};

export default TagButton;
