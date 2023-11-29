import React from 'react';
import Button from './Button';
import './NudgeCard.css';

const NudgeCard = ({ title, label }) => {
  return (
    <div className="relative max-w-screen-xl w-4/5 lg:px-16 overflow-hidden px-10 py-10 lg:py-20 rounded-3xl text-center border-[1px] border-cyan-800 bg-gradient-to-r from-[#031313] to-[#051A1C] flex flex-col items-center gap-6 ">
      <div className="w-full md:w-[29rem] z-10">
        <h1 className="lg:text-5xl md:text-4xl text-xl gradient-text font-title-font  md:leading-10">
          {title}
        </h1>
      </div>
      <Button label={label} />
      <div className="flair"></div>
    </div>
  );
};

export default NudgeCard;
