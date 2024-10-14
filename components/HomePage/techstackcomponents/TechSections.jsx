import dynamic from 'next/dynamic';
import React from 'react';
const TechStackCard = dynamic(() =>
  import('@/components/HomePage/techstackcomponents/TechStackCard')
);

const TechSections = ({ shift, webFrameworks, mobileFrameworks }) => {
  return (
    <div className="techstackComponents max-w-screen-xl w-full flex flex-col items-center justify-center lg:gap-[24px] gap-8">
      {!shift ? (
        <>
          {webFrameworks[0]?.development_platform_id?.sections?.map(
            (plat, index) => (
              <TechStackCard
                key={index}
                framework={plat.technologies}
                title={plat.heading}
              />
            )
          )}
        </>
      ) : (
        <>
          {mobileFrameworks[0]?.development_platform_id?.sections?.map(
            (plat, index) => (
              <TechStackCard
                key={index}
                framework={plat.technologies}
                title={plat.heading}
              />
            )
          )}
        </>
      )}
    </div>
  );
};

export default TechSections;
