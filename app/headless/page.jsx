import Button from '@/components/ui/Button';
import SmallBox from '@/components/jamstackcomponent/SmallBox';
import MediumBox from '@/components/jamstackcomponent/MediumBox';
import TechStack from '@/components/HomePage/techstackcomponents/TechStack';
import NudgeCard from '@/components/ui/NudgeCard';
import Testimonials from '@/components/HomePage/Testimonials';
import ProgressFlow from '@/components/ProgressFlow';
import { getHeadlessPage } from '@/utils/getHeadlessPage';
import Link from 'next/link';

const arr = [
  {
    title: 'Kickoff',
    desc: 'Initiating a Discovery Call to Understand Your Business.',
    select: true,
  },
  {
    title: 'Ideation',
    desc: 'We craft a customized plan aligned with your business objectives, followed by the submission of a comprehensive proposal.',
  },
  {
    title: 'Design',
    desc: 'We design the Idea in Figma (if the design is not available), and seek approval. We offer 2 free design iterations.',
  },
  {
    title: 'Development',
    desc: 'Agile Development: Sprints, Milestones, and Bi-weekly Progress Tracking.',
  },
  {
    title: 'Delivery',
    desc: 'Complete Product Delivery with Complimentary One Month Maintenance.',
  },
];

const Headless = async () => {
  const data = await getHeadlessPage();
  console.log(data);
  if (!data) return;
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
            className="w-full  rounded-xl border border-gray-600"
            controls
          >
            <source
              src={`${process.env.NEXT_PUBLIC_BASE_URL}/assets/${data?.section1_media}`}
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
        <ProgressFlow title={data?.section3_heading} arr={data?.section3_points} />
      </div>

      <div className="w-full flex items-center justify-center lg:my-10 my-6">
        <TechStack />
      </div>

      <div className="w-full flex justify-center lg:my-10">
        <NudgeCard
          title={'Book a discovery call to witness speed'}
          label={'Book Now'}
        />
      </div>

      <Testimonials />

      <div className="w-[100vw] mt-20 p-6 bg-[#031416] min-h-[60vh] flex items-center justify-center footer ">
        <NudgeCard
          title={'This text can be changed on purpose'}
          label={'Also this CTA'}
        />
      </div>
    </div>
  );
};

export default Headless;
