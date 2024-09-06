export default async function getHomeSeo() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/items/homepage?fields= SEO.* `,
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
