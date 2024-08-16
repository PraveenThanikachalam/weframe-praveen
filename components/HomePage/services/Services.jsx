import Link from 'next/link';
import ServiceCard from './ServiceCard';
import Button from '@/components/ui/Button';

const Services = ({ servicesData }) => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 md:px-0 flex flex-col  items-center justify-center">
      <div className="w-full mb-8 flex flex-col lg:flex-row items-center gap-4 justify-between">
        <div className="lg:w-[35vw] w-full text-center lg:text-left">
          <h1 className="text-4xl font-bold text-white">
            {servicesData?.section3_heading}
          </h1>
          <p className="text-white text-sm mt-3">
            {servicesData?.section3_description}
          </p>
        </div>
        <div>
          <Link href={servicesData.section3_btn_url ?? '/'} target="_blank">
            <Button variant="outline" label={servicesData?.section3_btn_text} />
          </Link>
        </div>
      </div>
      <div className=" w-full  grid md:grid-cols-3 grid-cols-1 gap-5">
        {servicesData?.services.map((service, index) => {
          return (
            <ServiceCard
              key={index}
              title={service?.title}
              img={service.bg_image}
              url={service.url}
            />
          );
        })}
      </div>
      <div></div>
    </div>
  );
};

export default Services;
