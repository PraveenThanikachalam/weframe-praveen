export const getJamstackPage = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/items/jamstack_page?fields=*,testimonial.testimonials_id.*,section3_contents.development_platform_id.*,SEO.*`,
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
      return data.data;
    }
    return null;
  } catch (error) {
    console.log(error);
  }
};
