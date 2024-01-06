export const getDynamicPage = async (slug) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/items/additional_pages?filter={ "slug": { "_eq": "${slug}" }}&fields=*, section1_content.*,section1_content.development_platform_id.*,SEO.*`,
      {
        headers: {
          Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        },
        next: {
          revalidate: 60,
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data.data[0];
    }
    return null;
  } catch (error) {
    console.log(error);
  }
};
