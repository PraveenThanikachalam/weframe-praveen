import BlogCard from '@/components/BlogCard';
import NudgeCard from '@/components/ui/NudgeCard';
import TagButton from '@/components/ui/TagButton';

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

const Blogs = () => {
  function convertToSlug(inputString) {
    return inputString
      .toLowerCase() // Convert to lowercase
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/[^\w-]+/g, '') // Remove non-word characters (excluding hyphens)
      .replace(/--+/g, '-'); // Replace multiple hyphens with a single hyphen
  }
  return (
    <main className=" max-w-screen-xl mx-auto px-4 flex flex-col items-center justify-center ">
      <div className=" w-full  lg:my-28 my-16 flex items-center justify-center">
        <div className="lg:w-[80%] w-full  flex flex-col items-center justify-center">
          <div className="">
            <h1 className="text-4xl md:text-5xl lg:text-5xl text-center gradient-text font-bold text-accent-blue">
              Stay Ahead with Our Insights
            </h1>
          </div>
          <div className="flex items-center justify-center gap-2 mt-4 w-full p-4 flex-wrap">
            {tags.map((tag, index) => {
              return <TagButton key={index} tag={tag} />;
            })}
          </div>
        </div>
      </div>

      <div className="blogs w-full  flex-wrap items-center flex gap-8 justify-center">
        <BlogCard
          title="Decoding the Jamstack: A Primer for E-commerce Entrepreneurs"
          image="/assets/blogs/blog1.png"
          link={`/blogs/${convertToSlug(
            'Decoding the Jamstack: A Primer for E-commerce Entrepreneurs'
          )}`}
        />
        <BlogCard
          title="Revolutionizing E-commerce with Headless Commerce"
          image="/assets/blogs/blog2.png"
          link={`/blogs/${convertToSlug(
            'Revolutionizing E-commerce with Headless Commerce'
          )}`}
        />
        <BlogCard
          title="The Benefits of Serverless E-commerce with Jamstack"
          image="/assets/blogs/blog3.png"
          link={`/blogs/${convertToSlug(
            'The Benefits of Serverless E-commerce with Jamstack'
          )}`}
        />
        <BlogCard
          title="Optimizing E-commerce SEO with Jamstack and Headless Commerce"
          image="/assets/blogs/blog4.png"
          link={`/blogs/${convertToSlug(
            'Optimizing E-commerce SEO with Jamstack and Headless Commerce'
          )}`}
        />
        <BlogCard
          title="Headless Commerce: Unleashing the Power of Customization"
          image="/assets/blogs/blog5.png"
          link={`/blogs/${convertToSlug(
            'Headless Commerce: Unleashing the Power of Customization'
          )}`}
        />
        <BlogCard
          title="Jamstack Security: Safeguarding Your E-commerce Business"
          image="/assets/blogs/blog6.png"
          link={`/blogs/${convertToSlug(
            'Jamstack Security: Safeguarding Your E-commerce Business'
          )}`}
        />
        <BlogCard
          title="The Future of E-commerce: Trends in Jamstack and Headless Commerce"
          image="/assets/blogs/blog7.png"
          link={`/blogs/${convertToSlug(
            'The Future of E-commerce: Trends in Jamstack and Headless Commerce'
          )}`}
        />
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
