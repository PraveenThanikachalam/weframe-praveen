import Button from '@/components/ui/Button';
import SmallBox from '@/components/jamstackcomponent/SmallBox';
import MediumBox from '@/components/jamstackcomponent/MediumBox';
import TechStack from '@/components/HomePage/techstackcomponents/TechStack';
import NudgeCard from '@/components/ui/NudgeCard';
import Testimonials from '@/components/HomePage/Testimonials';
import ProgressFlow from '@/components/ProgressFlow';
import { getHeadlessPage } from '@/utils/getHeadlessPage';
import Link from 'next/link';

const Headless = async () => {
  const data = await getHeadlessPage();
  if (!data) return;

  const techstack = {
    section2_contents: data?.section4_contents,
  };
  return (
    <div className=" w-full lg:px-8 px-3 min-h-screen flex flex-col items-center ">
      <div className="w-full z-10  h-[50%] bg-gradient-to-b from-[#1996a291] to-[#020C0D] absolute top-0"></div>
      <div className=" max-w-screen-xl  z-20 flex lg:flex-row flex-col items-center justify-center ">
        <div className="left my-16  h-full flex flex-col items-center justify-center w-full lg:w-[50%]">
          <div className="flex flex-col gap-4 lg:items-start items-center  justify-center">
            <h1 className="lg:text-6xl md:text-6xl text-4xl lg:text-start text-center  font-bold  font-title-font gradient-text">
              {data?.heading}
            </h1>
            <p
              style={{ color: 'rgba(153, 153, 153, 1)' }}
              className="font-light mt-4 lg:text-left text-center"
            >
              {data?.description}
            </p>
            <div className="flex gap-3 lg:flex-row flex-col">
              <Link href={`${data?.button1_url}`}>
                <Button label={data?.button1_text} variant="filled" />
              </Link>
              <Link href={`${data?.button2_url}`}>
                <Button label={data?.button2_text} variant="outline" />
              </Link>
            </div>
          </div>
        </div>
        <div className="right lg:w-[50%] w-full flex  flex-wrap items-center justify-center">
          <div className="flex w-full h-auto  flex-wrap items-center justify-center gap-3">
            {data?.hero_cards.map((item, index) => {
              return (
                <SmallBox key={index} label={item.label} icon={item.icon} />
              );
            })}
          </div>
        </div>
      </div>

      <div className=" my-24 max-w-screen-xl z-20 gap-8 flex flex-col items-center justify-center">
        <div className="w-full flex items-center justify-start">
          <div className="lg:w-[50%] w-full text-center lg:text-left">
            <h1 className="lg:text-4xl text-2xl md:text-4xl text-white font-title-font font-bold">
              {data?.section1_heading}
            </h1>
            <p
              style={{ color: 'rgba(153, 153, 153, 1)' }}
              className="font-light mt-4"
            >
              {' '}
              {data?.section1_description}
            </p>
          </div>
        </div>
        <div className="w-full">
          <video
            width="0"
            height="0"
            preload="none"
            poster="/assets/poster.webp"
            className="w-full  rounded-xl border border-gray-600"
            controls
          >
            <source
              src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${data?.section1_media}`}
              type="video/ogg"
            />
          </video>
        </div>
      </div>

      <div className="max-w-screen-xl w-full lg:my-16 my-12 flex flex-col gap-16">
        <div className="w-full flex lg:flex-row flex-col gap-5  lg:gap-0 items-center justify-between">
          <h1 className="lg:text-4xl text-3xl md:text-4xl font-title-font text-white font-semibold">
            {data?.section2_heading}
          </h1>
          <Link href={`${data?.section2_btn_url}`}>
            <Button variant="outline" label={data?.section2_btn_text} />
          </Link>
        </div>
        <div className="w-full flex flex-wrap items-center justify-center gap-5">
          {data?.section2_cards.map((item, index) => {
            return (
              <MediumBox
                key={index}
                title={item.title}
                desc={item.description}
                icon={item.icon}
              />
            );
          })}
        </div>
      </div>

      <div className="lg:my-20 mt-28">
        <ProgressFlow
          title={data?.section3_heading}
          arr={data?.section3_points}
        />
      </div>

      <div className="w-full flex items-center justify-center lg:my-10 my-6">
        <TechStack techData={techstack} />
      </div>

      <div className="w-full flex justify-center lg:my-10">
        <NudgeCard
          title={data?.section5_heading}
          label={data?.section5_button_text}
          url={data?.section5_button_url}
        />
      </div>

      <Testimonials testData={data?.testimonials} />
    </div>
  );
};

export default Headless;
