export const getBlogPage = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/items/blogpage?fields=*, articles.article_id.banner, articles.article_id.title, articles.article_id.tags`,
      {
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
