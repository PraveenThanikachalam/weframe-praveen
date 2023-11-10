import NudgeCard from '@/components/HomePage/NudgeCard';
import React from 'react';

const layout = ({ children }) => {
  return (
    <div>
      {children}
      <div className="min-h-[60vh] w-full flex items-center justify-center">
        <NudgeCard
          title={'Book a discovery call to witness speed'}
          label={'Book Now'}
        />
      </div>
      <div className="w-full mt-16 footer h-[60vh] border-b-2 border-gray-800 flex items-center justify-center">
        <NudgeCard
          title={'This text can be changed on purpose'}
          label={'Also this CTA'}
        />
      </div>
    </div>
  );
};

export default layout;
