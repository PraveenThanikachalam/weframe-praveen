export const getHeadlessPage = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/items/headless_commerce?fields=*, testimonials.*, section3_contents.development_platform_id.*`);
      if (response.ok) {
        const data = await response.json();
        return data.data;
      }
      return null;
    } catch (error) {
      console.log(error);
    }
  };
  