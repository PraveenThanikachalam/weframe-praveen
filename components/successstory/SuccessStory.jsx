import React from 'react';
import StoryCard from './StoryCard';
import Button from '../ui/Button';

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
          <Button variant="outline" label="Explore Case Studies" />
        </div>
      </div>
      <StoryCard slide={true} />
    </div>
  );
};

export default SuccessStory;
