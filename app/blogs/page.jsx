import BlogPage from '@/components/blog/BlogPage';
import { getBlogPage } from '@/utils/getBlogPage';

export async function generateMetadata(
 
  parent
) {
    const seoData = await getBlogPage()
  if (seoData.SEO) {
    const previousImages = (await parent).openGraph?.images || [];
    return {
      metadataBase: new URL(seoData?.SEO?.canonical_url),
      title: seoData?.SEO?.meta_title,
      description: seoData?.SEO?.meta_description,
      alternates: {
        canonical: seoData?.SEO?.canonical_url,
      },
      keywords:seoData?.SEO?.meta_keywords,
      robots: {
        index: !seoData?.SEO?.no_follow,
        follow: !seoData?.SEO?.no_index,
        nocache: true,
      },
      openGraph: {
        images: [
          `${process.env.NEXT_PUBLIC_BASE_URL}/assets/${seoData?.SEO?.og_image}`,
          ...previousImages,
        ],
      },
    };
  }
  return {
    title: 'WeframeTech',
    description: 'Jamstack & Headless Commerce Agency, We recognize the demand for high-speed, secure, and easily scalable websites. Leveraging the power of Jamstack, we deliver an exceptional web development experience tailored to your specific requirements, Get an instant quote for your project.'
  };
}

const Blogs = async () => {
  const data = await getBlogPage();
  if (!data) return;

  return <BlogPage pageData={data} />;
};

export default Blogs;
