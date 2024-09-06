import React from 'react';
import BackLightEffect from '../ui/BackLightEffect';

const HeroIcons = ({heading,icons}) => {
  return (
    <div className="w-full flex justify-center relative">
      <div className="w-full z-30 flex flex-col md:mt-6 items-center justify-end gap-2 lg:gap-4">
        <p className="md:mb-6 text-lg md:text-[18px] font-title-font">
          {heading}
        </p>
        <div className="relative mt-5 sm:mt-0 w-full md:w-[45vw] overflow-hidden block [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          <div className="flex">
            <div className="flex animate-slidehorizontal gap-5 md:gap-10">
              {icons?.map(({ icon_id }) => (
                <div
                  className="flex items-center justify-center mx-4"
                  key={icon_id?.id}
                >
                  <span
                    dangerouslySetInnerHTML={{ __html: icon_id?.svg }}
                    className="herologos"
                  ></span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 min-[450px]:-top-1/2">
        <BackLightEffect />
      </div>
    </div>
  );
};

export default HeroIcons;
