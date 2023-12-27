export const getFilterArticles = async (filter) => {
  try {
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_API_URL
      }/items/article?filter=${encodeURIComponent(JSON.stringify(filter))}`,
      {
        headers: {
          Authorization: `Bearer U7yJWzq0QYFGpxnPSbXyZVqbailrMoqm`,
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching articles:', error.message);
    return null;
  }
};
