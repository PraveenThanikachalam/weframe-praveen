import Quotation from '@/components/quotation/Quotation';
import { getQuotationData } from '@/data/getQuotationData';
import { getJamstackSlug } from '@/utils/getJamstackSlug';
import React from 'react';

export async function generateMetadata(parent) {
  const pathname = parent.params.quote;
  const jamstackSlug = await getJamstackSlug('jamstack_quote_page');
  if (pathname && jamstackSlug) {
    var seoData = await getQuotationData(
      pathname === jamstackSlug
        ? 'jamstack_quote_page'
        : 'headless_quote_page'
    );
  }

  if (seoData?.seo) {
    const previousImages = (await parent).openGraph?.images || [];
    return {
      metadataBase: new URL(seoData?.seo?.canonical_url),
      title: seoData?.seo?.meta_title,
      description: seoData?.seo?.meta_description,
      alternates: {
        canonical: seoData?.seo?.canonical_url,
      },
      keywords: seoData?.seo?.meta_keywords,
      robots: {
        index: !seoData?.seo?.no_follow,
        follow: !seoData?.seo?.no_index,
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
    description:
      'Jamstack & Headless Commerce Agency, We recognize the demand for high-speed, secure, and easily scalable websites. Leveraging the power of Jamstack, we deliver an exceptional web development experience tailored to your specific requirements, Get an instant quote for your project.',
  };
}

const QuotePage = async () => {
  const data = await getQuotationData('jamstack_quote_page');
  const headlessSlug = await getJamstackSlug('headless_quote_page');
  const jamstackSlug = await getJamstackSlug('jamstack_quote_page');

  if (!data) return;
  return (
    <main className="max-w-screen-xl mx-auto px-4 flex flex-col items-center justify-center">
      <Quotation
        pageData={data}
        headlessSlug={headlessSlug}
        jamstackSlug={jamstackSlug}
      />
    </main>
  );
};

export default QuotePage;
