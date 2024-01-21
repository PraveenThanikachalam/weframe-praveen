export const getJamstackSlug = async (option) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/items/${option}?fields=slug`,
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
        return data.data.slug;
      }
      return null;
    } catch (error) {
      console.log(error);
    }
  };
  