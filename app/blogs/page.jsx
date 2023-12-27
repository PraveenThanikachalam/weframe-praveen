import BlogCard from '@/components/BlogCard';
import BlogPage from '@/components/blog/BlogPage';
import NudgeCard from '@/components/ui/NudgeCard';
import TagButton from '@/components/ui/TagButton';
import { getBlogPage } from '@/utils/getBlogPage';

const Blogs = async () => {
  const data = await getBlogPage();
  if (!data) return;

  return <BlogPage pageData={data} />;
};

export default Blogs;
