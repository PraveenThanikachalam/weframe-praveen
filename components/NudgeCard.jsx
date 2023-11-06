import React from 'react';

const NudgeCard = () => {
  return (
    <div className="w-full mt-16 flex items-center justify-center">
      <div
        style={{ background: '#041719' }}
        className="w-[80%]  lg:p-16 p-10 rounded-xl border-2 text-center border-cyan-800 flex flex-col items-center justify-center"
      >
        <h1 className="text-3xl text-cyan-300 font-bold">
          Book a discovery <br /> call to witness speed
        </h1>
        <button className="px-8 mt-8 py-2 rounded-full font-medium bg-white ">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default NudgeCard;
