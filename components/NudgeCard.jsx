import React from 'react';
import Button from './ui/Button';

const NudgeCard = ({ title, label }) => {
  return (
    <div className="max-w-screen-xl w-full lg:px-16 px-10 py-10 lg:py-20 mx-auto rounded-3xl text-center border-y-2 border-cyan-800 bg-gradient-to-r from-[#031313] to-[#051A1C] flex flex-col items-center gap-6">
      <div className="w-full md:w-[29rem]">
        <h1 className="lg:text-4xl md:text-4xl text-3xl gradient-text font-title-font  leading-10">
          {title}
        </h1>
      </div>
      <Button label={label} />
    </div>
  );
};

export default NudgeCard;

