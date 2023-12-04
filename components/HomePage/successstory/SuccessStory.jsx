import StoryCard from './StoryCard';
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
    img:'/assets/img1.png'
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
    img:'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

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
    img:'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

  },
] 

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
      <SlideCard data={cardData}/>
    </div>
  );
};

export default SuccessStory;
