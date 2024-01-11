export const getQuotationData = async (section) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/items/${section}?fields=*, seo.*`,
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
