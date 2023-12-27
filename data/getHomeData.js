export default async function getHomeData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/items/homepage?fields=*,section2_contents.development_platform_id.*,testimonials.*`,
    {
      cache: 'no-store',
    }
  );
  if (res.ok) {
    const data = await res.json();
    return data.data;
  }
  return null;
}
