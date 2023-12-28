import NudgeCard from '@/components/ui/NudgeCard';
import { getBlogArticle } from '@/utils/getBlogArticle';
import Image from 'next/image';

function slugToTitle(slug) {
  const word = slug
    .split('-') // Split the slug into an array of words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(' '); // Join the words with a space

  return word.replace('@', '-');
}

export async function generateMetadata({ params }) {
  const data = await getBlogArticle(
    slugToTitle(decodeURIComponent(params.slug))
  );
  return {
    title: "WeframeTech: " + data?.title,
  }
}

const Page = async ({ params }) => {

  const data = await getBlogArticle(
    slugToTitle(decodeURIComponent(params.slug))
  );
  if (!data) return;

  return (
    <main className="w-full ">
      <div className="w-full flex items-center justify-center relative z-20">
        <div className="w-full -z-10 absolute h-screen  bottom-0  ">
          <Image
            alt="img"
            src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${data?.banner}`}
            className="w-full h-full object-cover"
            width={200}
            height={200}
            loading="lazy"
          />
          <div className="w-full absolute top-0  h-full bg-black bg-opacity-30 backdrop-blur-sm"></div>
        </div>
        <div className="w-[80%] my-16 flex flex-col items-start gap-10 justify-center">
          <div className="flex flex-wrap gap-2">
            {data?.tags.map((tag, index) => {
              return (
                <button
                  key={index}
                  className="navbar borderGrd cursor-default text-gray-300 px-4 py-1 text-sm rounded-xl"
                >
                  {tag}
                </button>
              );
            })}
          </div>
          <h1 className="lg:text-5xl md:text-4xl text-4xl font-bold text-white font-title-font">
            {data?.title}
          </h1>
        </div>
      </div>
      <div className="max-w-screen-lg  md:p-20 p-6  flex items-center justify-center mx-auto text-white ">
        <div dangerouslySetInnerHTML={{ __html: data?.content }}></div>
      </div>
      <div className="min-h-[60vh] w-screen p-6  flex items-center justify-center">
        <NudgeCard
          title={'Book a discovery call to witness speed'}
          label={'Book Now'}
        />
      </div>
    </main>
  );
};

export default Page;
