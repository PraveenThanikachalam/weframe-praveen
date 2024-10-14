import SvgRenderer from '@/lib/svg_renderer';
import { getFooter } from '@/utils/getFooter';
import Link from 'next/link';
import NudgeCard from '../ui/NudgeCard';
import Image from 'next/image';
import DirectusIcon from '../ui/DirectusIcon';

const Footer = async () => {
  const data = await getFooter();
  if (!data) return;

  return (
    <main>
      <div className="w-[100vw] mt-16 bg-[#031416] footer p-6 h-[60vh] border-b-2 border-gray-800 flex items-center justify-center">
        <NudgeCard
          title={data?.cta_heading}
          label={data?.cta_button_text}
          url={data?.cta_button_url}
        />
      </div>
      <div className="bg-[#031416] w-full relative bottom-0 p-6 flex flex-col items-center justify-center text-white ">
        <div className="lg:w-[90%] w-full lg:flex-row flex-col flex items-center lg:justify-between justify-center">
          <div className="lg:w-[40%] w-full text-center lg:text-left">
            <div className="flex flex-col lg:items-start items-center lg:justify-start justify-center">
              <div>
                {/* <SvgRenderer svgText={data?.logo} /> */}
                <Image
                  src={'/updated.png'}
                  alt="logo"
                  width={500}
                  height={500}
                  className="h-8 w-auto"
                />
              </div>
              <p
                style={{ color: 'rgba(153, 153, 153, 1)' }}
                className="font-light mt-4"
              >
                {data?.footer_desc}
              </p>
              <div className="flex gap-3 mt-5">
                {data?.footer_links.map((link, index) => {
                  return (
                    <Link key={index} href={link.url}>
                      <SvgRenderer svgText={link.icon} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex lg:gap-3 mt-8 lg:mt-0 gap-10 font-light  text-gray-300">
            {data?.section?.map((sec, index) => (
              <div key={index} className="flex flex-col  gap-3">
                <p className="text-lg lg:text-2xl font-medium text-white">
                  {sec?.heading}
                </p>
                <div className=" text-white text-sm lg:text-base  flex flex-col gap-3">
                  {sec?.links.map((item, index) => {
                    return (
                      <Link key={index} href={item.url ?? '/'}>
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-[1px] bg-gray-500 w-[90%] lg:mt-10 mt-6"></div>
        <div className="text-white lg:mt-10 mt-5 flex flex-col lg:flex-row items-center justify-between w-[90%]">
          <p className="lg:text-sm text-xs">{data?.copyright_text}</p>
          <div className="lg:text-sm text-xs gap-1 flex items-center justify-center">
            <DirectusIcon />
            <p>Powered by</p>{' '}
            <Link
              href={'https://directus.io'}
              target="_blank"
              className="flex items-center underline justify-center  text-cyan-300"
            >
              Directus.
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Footer;
