export const getFooter = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/items/footer`,
      {
        headers: {
          Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        },
        cache: 'no-store',
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
