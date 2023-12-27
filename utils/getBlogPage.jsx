export const getBlogPage = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/items/blogpage?fields=*, articles.article_id.banner, articles.article_id.title, articles.article_id.tags`);
      if (response.ok) {
        const data = await response.json();
        return data.data;
      }
      return null;
    } catch (error) {
      console.log(error);
    }
  };
  