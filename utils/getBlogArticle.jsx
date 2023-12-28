export const getBlogArticle = async (slug) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/items/article?filter={"title": {"_icontains": "${slug}"}}`,
      {
        next: {
          revalidate: 60,
        },
      }
    );
    if (response.ok) {
      const data = await response.json();
      return data.data[0];
    }
    return null;
  } catch (error) {
    console.log(error);
  }
};
