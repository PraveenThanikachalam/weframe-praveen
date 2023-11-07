import React from 'react';

const NudgeCard = ({ title, label }) => {
  return (
    <div className="w-full  flex items-center justify-center">
      <div
        style={{ background: '#041719' }}
        className="w-[80%]  lg:p-16 p-10 rounded-xl border-2 text-center border-cyan-800 flex flex-col items-center justify-center"
      >
        <div className="lg:w-[40%] w-full">
          <h1 className="lg:text-3xl md:text-3xl text-2xl text-cyan-300 font-bold">
            {title}
          </h1>
        </div>
        <button className="px-8 mt-8 py-2 rounded-full text-sm font-medium bg-white ">
          {label}
        </button>
      </div>
    </div>
  );
};

export default NudgeCard;
