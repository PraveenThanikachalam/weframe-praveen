export const getFilterCaseStudies = async (filter) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/items/case_studies?filter=${encodeURIComponent(JSON.stringify(filter))}`,
      {
        headers: {
          Authorization: `Bearer U7yJWzq0QYFGpxnPSbXyZVqbailrMoqm`,
          'Content-Type': 'application/json', // Add this line to set the content type
        },
        cache: 'no-store',
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error('Error fetching case studies:', error.message);
    return null;
  }
};
