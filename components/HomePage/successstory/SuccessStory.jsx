import Button from '../../ui/Button';
import SlideCard from './SlideCard';

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
    img: '/assets/img1.png',
  },
  {
    title: 'Jamstack and Headless Commerce Agency',
    desc: 'Explore our real-world achievements, where we turn challenges into triumphs. These case studies highlight our track record of delivering impactful digital solutions for our clients. Wave farewell to the past and step confidently into the future with Jamstack. Beyond websites, we are here to bring your narrative to life through our expertise. Get an instant quote for your project',
    tags: [
      { label: 'Headless CMS', url: '/' },
      { label: 'Jamstack', url: '/' },
      { label: 'Blog Platform', url: '/' },
      { label: 'Web App Development', url: '/' },
    ],
    img: '/assets/img1.png',
  },
  {
    title: 'Custom Software Solution for Development',
    desc: 'Explore our real-world achievements, where we turn challenges into triumphs. These case studies highlight our track record of delivering impactful digital solutions for our clients. Wave farewell to the past and step confidently into the future with Jamstack. Beyond websites, we are here to bring your narrative to life through our expertise. Get an instant quote for your project',
    tags: [
      { label: 'Headless CMS', url: '/' },
      { label: 'Jamstack', url: '/' },
      { label: 'Blog Platform', url: '/' },
      { label: 'Web App Development', url: '/' },
    ],
    img: '/assets/img1.png',
  },
];

const SuccessStory = () => {
  return (
    <div className="successStory mt-28 z-10 mx-4 md:mx-10 flex flex-col items-center justify-center">
      <div className="w-[80vw] max-w-screen-2xl mb-8 flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="lg:w-[35vw] text-center lg:text-left w-full">
          <h1 className="text-4xl font-bold text-white">Success stories</h1>
          <p className="text-gray-500 text-sm mt-3">
            Explore our real-world achievements, where we turn challenges into
            triumphs. These case studies highlight our track record of
            delivering impactful digital solutions for our clients.
          </p>
        </div>
        <div>
          <Button variant="outline" label="Explore Case Studies" />
        </div>
      </div>
      {/* <StoryCard data={cardData} /> */}
      <SlideCard data={cardData} />
    </div>
  );
};

export default SuccessStory;
