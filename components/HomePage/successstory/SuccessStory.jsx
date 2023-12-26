import Link from 'next/link';
import Button from '../../ui/Button';
import SlideCard from './SlideCard';

const SuccessStory = ({ successData }) => {
  return (
    <div className="successStory mt-28 z-10 mx-4 md:mx-10 flex flex-col items-center justify-center">
      <div className="w-[80vw] max-w-screen-2xl mb-8 flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="lg:w-[35vw] text-center lg:text-left w-full">
          <h1 className="text-4xl font-bold text-white">
            {successData?.heading}
          </h1>
          <p className="text-gray-500 text-sm mt-3">
            {successData?.description}
          </p>
        </div>
        <div>
          <Link href={successData.link ?? '/'}>
            <Button variant="outline" label={successData?.btn} />
          </Link>
        </div>
      </div>
      <SlideCard data={successData?.cases} />
    </div>
  );
};

export default SuccessStory;
