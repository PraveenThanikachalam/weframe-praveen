import Link from 'next/link';
import Button from '../../ui/Button';
import dynamic from 'next/dynamic';
const SlideCard = dynamic(() => import('./SlideCard'));
const StoryCard = dynamic(() => import('./StoryCard'));

const SuccessStory = ({ successData }) => {
  return (
    <div className="successStory max-w-screen-xl w-full mx-auto  z-10  flex flex-col items-center justify-center">
      <div className="w-full  mb-8 flex flex-col lg:flex-row gap-4 items-center justify-between">
        <div className="lg:w-[35vw] text-center lg:text-left w-full">
          <h1 className="text-4xl font-bold text-white">
            {successData?.heading}
          </h1>
          <p className="text-white text-sm mt-3">{successData?.description}</p>
        </div>
        <div>
          <Link href={successData.link ?? '/'}>
            <Button variant="outline" label={successData?.btn} />
          </Link>
        </div>
      </div>
      {successData?.cases.length > 1 ? (
        <SlideCard data={successData?.cases} />
      ) : (
        <StoryCard data={successData?.cases[0].case_studies_id} />
      )}
    </div>
  );
};

export default SuccessStory;
