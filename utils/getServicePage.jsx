export const getServicePage = async (slug) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/items/service_pages?filter={ "slug": { "_eq": "${slug}" }}&fields=*, success_stories.service_stories_id.* , subscription_cards.service_subscription_id.* , case_studies.case_studies_id.*, testimonials.testimonials_id.*, sections.service_sections_id.*`,
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
