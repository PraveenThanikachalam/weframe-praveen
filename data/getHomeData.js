export default async function getHomeData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/items/homepage?fields=*, section2_contents.development_platform_id.*, testimonial.testimonials_id.*, SEO.* , case_studies.*, case_studies.case_studies_id.*, icon.icon_id.*`,
    {
      headers: {
        Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
      },
      next: {
        revalidate: 60,
      },
    }
  );
  if (res.ok) {
    const data = await res.json();
    return data.data;
  }
  return null;
}
