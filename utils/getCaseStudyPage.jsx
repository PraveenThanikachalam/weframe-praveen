export const getCaseStudyPage = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/items/case_studies_page?fields=*, case_studies.case_studies_id.*`,{
        headers: {
          Authorization: `Bearer ${process.env.BEARER_TOKEN}`,
        },
        cache: 'no-store',
      });
      if (response.ok) {
        const data = await response.json();
        return data.data;
      }
      return null;
    } catch (error) {
      console.log(error);
    }
  };
  