import ServiceCard from './ServiceCard';
import Button from '@/components/ui/Button';

const Services = ({ servicesData }) => {
  return (
    <div className="w-full py-16 px-4 md:px-10 flex flex-col gap-5 md:gap-10 items-center justify-center">
      <div className="w-[80vw] max-w-screen-xl mb-8 flex flex-col lg:flex-row items-center gap-4 justify-between">
        <div className="lg:w-[35vw] w-full text-center lg:text-left">
          <h1 className="text-4xl font-bold text-white">
            {servicesData.section3_heading}
          </h1>
          <p className="text-gray-500 text-sm mt-3">
            {servicesData.section3_description}
          </p>
        </div>
        <div>
          <Button variant="outline" label={servicesData.section3_btn_text} />
        </div>
      </div>
      <div className="flex w-[80vw] max-w-screen-xl flex-wrap items-center justify-center lg:justify-between gap-5">
        <ServiceCard title="Jamstack Development" img="spider.svg" />
        <ServiceCard title="Headless Commerce" img="headless.svg" />
        <ServiceCard title="Custom Software Development" img="circle.svg" />
        <ServiceCard title="MVP & POC Development" img="diamond.svg" />
        <ServiceCard title="UI/UX Designing" img="ui.svg" />
        <ServiceCard title="CTO as a Service" img="crown.svg" />
      </div>
      <div></div>
    </div>
  );
};

export default Services;
