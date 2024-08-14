import Button from '../ui/Button';
import Link from 'next/link';
import BackLightEffect from '../ui/BackLightEffect';
import SvgRenderer from '@/lib/svg_renderer';

const HeroSection = ({ heroData }) => {
  // console.log(heroData?.icons)
  return (
    <div className="h-[90vh]  gap-10 text-center  text-white w-full flex flex-col justify-evenly py-10 px-4 items-center relative">
      <div className="lg:w-[60%] w-full z-30  flex flex-col items-center justify-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold font-title-font">
          {heroData?.hero_title}
        </h1>
        <div className="lg:w-[70%] w-full">
          <p className="text-base font-light my-2 md:my-7 text-gray-200">
            {heroData?.hero_desc}
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
        <div className="w-full z-30 flex flex-col md:mt-6 items-center justify-end gap-2 lg:gap-4">
          <p className="md:mb-6 text-lg md:text-[18px] font-title-font">
            {heroData?.icons_heading}
          </p>
          <div className=" relative mt-5 sm:mt-0 w-full md:w-[45vw] overflow-hidden block [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <div className="flex">
              <div className="flex animate-slidehorizontal gap-5 md:gap-10">
                {heroData?.icons?.map(({ icon_id }) => {
                  return (
                    <div
                      className=" flex items-center justify-center mx-4"
                      key={icon_id.id}
                    >
                      <span
                        dangerouslySetInnerHTML={{ __html: icon_id?.svg }}
                        className="  herologos "
                      ></span>
                    </div>
                  );
                })}
                {heroData?.icons?.map(({ icon_id }) => {
                  return (
                    <div
                      className=" flex items-center justify-center mx-4"
                      key={icon_id.id}
                    >
                      <span
                        dangerouslySetInnerHTML={{ __html: icon_id?.svg }}
                        className="  herologos "
                      ></span>
                    </div>
                  );
                })}
              </div>
              <div className="flex animate-slidehorizontal gap-5 md:gap-10">
                {heroData?.icons?.map(({ icon_id }) => {
                  return (
                    <div
                      className=" flex items-center justify-center mx-4"
                      key={icon_id.id}
                    >
                      <span
                        dangerouslySetInnerHTML={{ __html: icon_id?.svg }}
                        className="  herologos "
                      ></span>
                    </div>
                  );
                })}
                {heroData?.icons?.map(({ icon_id }) => {
                  return (
                    <div
                      className=" flex items-center justify-center mx-4"
                      key={icon_id.id}
                    >
                      <span
                        dangerouslySetInnerHTML={{ __html: icon_id?.svg }}
                        className="  herologos "
                      ></span>
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
