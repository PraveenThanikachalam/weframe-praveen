import TagButton from '@/components/ui/TagButton';
import StoryCard from '@/components/HomePage/successstory/StoryCard';
import Button from '@/components/ui/Button';
import NudgeCard from '@/components/ui/NudgeCard';
import { getCaseStudyPage } from '@/utils/getCaseStudyPage';

const cardData = [
  {
    title: 'Freemium Blog Platform for Entrepreneurs',
    desc: 'Explore our real-world achievements, where we turn challenges into triumphs. These case studies highlight our track record of delivering impactful digital solutions for our clients. Wave farewell to the past and step confidently into the future with Jamstack. Beyond websites, we are here to bring your narrative to life through our expertise. Get an instant quote for your project',
    tags: [
      { label: 'Headless CMS', url: '/' },
      { label: 'Jamstack', url: '/' },
      { label: 'Blog Platform', url: '/' },
      { label: 'Web App Development', url: '/' },
    ],
    slide: false,
    video: true,
  },
  {
    title: 'Freemium Blog Platform for Entrepreneurs',
    desc: 'Explore our real-world achievements, where we turn challenges into triumphs. These case studies highlight our track record of delivering impactful digital solutions for our clients. Wave farewell to the past and step confidently into the future with Jamstack. Beyond websites, we are here to bring your narrative to life through our expertise. Get an instant quote for your project',
    tags: [
      { label: 'Headless CMS', url: '/' },
      { label: 'Jamstack', url: '/' },
      { label: 'Blog Platform', url: '/' },
      { label: 'Web App Development', url: '/' },
    ],
    slide: false,
    video: false,
  },
  {
    title: 'Freemium Blog Platform for Entrepreneurs',
    desc: 'Explore our real-world achievements, where we turn challenges into triumphs. These case studies highlight our track record of delivering impactful digital solutions for our clients. Wave farewell to the past and step confidently into the future with Jamstack. Beyond websites, we are here to bring your narrative to life through our expertise. Get an instant quote for your project',
    tags: [
      { label: 'Headless CMS', url: '/' },
      { label: 'Jamstack', url: '/' },
      { label: 'Blog Platform', url: '/' },
      { label: 'Web App Development', url: '/' },
    ],
    slide: false,
    video: false,
  },
];

const tags = [
  {
    label: 'All Case Studies',
    url: '/',
    selected: true,
  },
  {
    label: 'Headless Commerce Development',
    url: '/',
  },
  {
    label: 'MVP & POC Development',
    url: '/',
  },
  {
    label: 'Custom Software Development',
    url: '/',
  },
  {
    label: 'Product Design Services',
    url: '/',
  },
  {
    label: 'CTO as a Service',
    url: '/',
  },
  {
    label: 'API Development',
    url: '/',
  },
];

const CaseStudy = async () => {
  const data = await getCaseStudyPage()
  if(!data) return 

  console.log(data)
  return (
    <main className="max-w-screen-xl mx-auto px-4 flex flex-col items-center justify-center">
      <div className="w-full lg:my-28 my-20  flex items-center justify-center">
        <div className="lg:w-[80%] w-[90%] flex flex-col items-center justify-center">
          <div className="">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-center font-title-font gradient-text ">
              {data?.heading}
            </h1>
          </div>
          <div className="flex items-center justify-center gap-2 mt-4 w-full p-4 flex-wrap">
            {data?.tags.map((tag, index) => {
              return <TagButton key={index} tag={tag.name} />;
            })}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-14 items-center justify-center">
        {data?.case_studies.map((item, index) => {
          return <StoryCard key={index} data={item.case_studies_id} />;
        })}
      </div>
      <div className="w-full flex items-center justify-center my-16">
        <Button variant="outline" label={'See More Case Studies'} />
      </div>
      <div className="min-h-[60vh] w-screen p-6 flex items-center justify-center">
        <NudgeCard
          title={'Book a discovery call to witness speed'}
          label={'Book Now'}
        />
      </div>

      <div className="w-[100vw] mt-16 bg-[#031416] footer p-6 h-[60vh] border-b-2 border-gray-800 flex items-center justify-center">
        <NudgeCard
          title={'This text can be changed on purpose'}
          label={'Also this CTA'}
        />
      </div>
    </main>
  );
};

export default CaseStudy;
