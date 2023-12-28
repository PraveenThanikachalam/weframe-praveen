export default async function getQuotationData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/items/quote_page?fields=*,quote.quotes_id.*`,
    {
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
