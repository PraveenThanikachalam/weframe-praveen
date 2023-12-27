import BlogPage from '@/components/blog/BlogPage';
import { getBlogPage } from '@/utils/getBlogPage';

const Blogs = async () => {
  const data = await getBlogPage();
  if (!data) return;

  return <BlogPage pageData={data} />;
};

export default Blogs;
