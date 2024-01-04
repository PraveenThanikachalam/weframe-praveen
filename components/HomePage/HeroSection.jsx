import Button from '../ui/Button';
import Link from 'next/link';
import BackLightEffect from '../ui/BackLightEffect';
import SvgRenderer from '@/lib/svg_renderer';

const HeroSection = ({ heroData }) => {
  return (
    <div className="h-[90vh] gap-10 text-center text-white w-full flex flex-col justify-evenly py-10 px-4 items-center relative">
      <div className="lg:w-[60%] w-full z-30  flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold font-title-font">
          {heroData.hero_title}
        </h1>
        <div className="lg:w-[70%] w-full">
          <p className="text-base font-light my-2 md:my-7 text-white">
            {heroData.hero_desc}
          </p>
        </div>
        <div className="gap-2 md:gap-5 flex flex-col lg:flex-row">
          <Link href={`${heroData?.button1_url}`}>
            <Button variant="filled" label={heroData?.button1_text} />
          </Link>
          <Link href={`${heroData?.button2_url}`}>
            <Button variant="outline" label={heroData?.button2_text} />
          </Link>
        </div>
      </div>
      <div className="w-full flex justify-center relative">
        <div className="w-full z-30  flex flex-col md:mt-6 items-center justify-end gap-2 lg:gap-4">
          <p className="md:mb-6 text-lg md:text-2xl font-semibold">
            {heroData?.icons_heading}
          </p>
          <div className=" relative mt-5 sm:mt-0 w-full md:w-[45vw] overflow-hidden block [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <div className="flex">
              <div className="flex animate-slidehorizontal">
                {heroData?.icons?.map((logo, index) => {
                  return (
                    <div className="h-8 md:h-12 w-20 md:w-32 mx-4" key={index}>
                      <SvgRenderer
                        svgText={logo.svg}
                        className={'object-contain'}
                      />
                    </div>
                  );
                })}
                {heroData?.icons?.map((logo, index) => {
                  return (
                    <div className="h-8 md:h-12 w-20 md:w-32 mx-4" key={index}>
                      <SvgRenderer
                        svgText={logo.svg}
                        className={'object-contain'}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="flex animate-slidehorizontal">
                {heroData?.icons?.map((logo, index) => {
                  return (
                    <div className="h-8 md:h-12 w-20 md:w-32 mx-4" key={index}>
                      <SvgRenderer
                        svgText={logo.svg}
                        className={'object-contain'}
                      />
                    </div>
                  );
                })}
                {heroData?.icons?.map((logo, index) => {
                  return (
                    <div className="h-8 md:h-12 w-20 md:w-32 mx-4" key={index}>
                      <SvgRenderer
                        svgText={logo.svg}
                        className={'object-contain'}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-0 min-[450px]:-top-1/2">
          <BackLightEffect />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
