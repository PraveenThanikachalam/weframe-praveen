import BlogCard from '@/components/BlogCard';
import NudgeCard from '@/components/ui/NudgeCard';
import TagButton from '@/components/ui/TagButton';
import { getBlogPage } from '@/utils/getBlogPage';

const Blogs = async () => {
  function convertToSlug(inputString) {
    return inputString
    .toLowerCase() // Convert to lowercase
    .replace('-', '@') // Replace spaces with hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
      // .replace(/[^\w-]+/g, '') // Remove non-word characters (excluding hyphens)
      .replace(/--+/g, '-'); // Replace multiple hyphens with a single hyphen
  }

  const data = await getBlogPage();
  if (!data) return;
  
  return (
    <main className=" max-w-screen-xl mx-auto px-4 flex flex-col items-center justify-center ">
      <div className=" w-full  lg:my-28 my-16 flex items-center justify-center">
        <div className="lg:w-[80%] w-full  flex flex-col items-center justify-center">
          <div className="">
            <h1 className="text-4xl md:text-5xl lg:text-5xl text-center gradient-text font-bold text-accent-blue">
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

      <div className="blogs w-full  flex-wrap items-center flex gap-8 justify-center">
        {data?.articles.map((blog, index) => {
          return (
            <BlogCard
              key={index}
              title={blog?.article_id.title}
              image={blog?.article_id.banner}
              tags={blog?.article_id.tags}
              link={`/blogs/${convertToSlug(blog?.article_id.title)}`}
            />
          );
        })}

      </div>

      <div className="min-h-[60vh] w-screen p-6  flex items-center justify-center">
        <NudgeCard
          title={'Book a discovery call to witness speed'}
          label={'Book Now'}
        />
      </div>

      <div className="w-[100vw] bg-[#031416] mt-16 footer p-6 h-[60vh] border-b-2 border-gray-800 flex items-center justify-center">
        <NudgeCard
          title={'This text can be changed on purpose'}
          label={'Also this CTA'}
        />
      </div>
    </main>
  );
};

export default Blogs;
