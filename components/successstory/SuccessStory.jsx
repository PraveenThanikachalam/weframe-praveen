import React from 'react';
import StoryCard from './StoryCard';

const SuccessStory = () => {
  return (
    <div className="successStory lg:my-36 my-28 flex flex-col items-center justify-center">
      <div className="w-[80vw] mb-8 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-[35vw] text-center lg:text-left w-full">
          <h1 className="text-4xl font-bold text-white">Success stories</h1>
          <p className="text-gray-500 text-sm mt-3">
            Explore our real-world achievements, where we turn challenges into
            triumphs. These case studies highlight our track record of
            delivering impactful digital solutions for our clients.
          </p>
        </div>
        <div>
          <button className="text-white font-semibold px-4 mt-4 lg:mt-0 py-3 rounded-full border">
            Explore Case Studies
          </button>
        </div>
      </div>
      <StoryCard />
    </div>
  );
};

export default SuccessStory;
