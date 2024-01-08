'use client';
import React, { useEffect, useState } from 'react';
import NudgeCard from '@/components/ui/NudgeCard';
import BlogCard from '@/components/BlogCard';
import { getFilterArticles } from '@/utils/getFilterArticles';

const BlogPage = ({ pageData }) => {
  const [data, setData] = useState(pageData);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filtered, setFiltered] = useState();
  const [allTags, setAllTags] = useState([]);

  function convertToSlug(inputString) {
    if (inputString) {
      return (
        inputString
          .toLowerCase() // Convert to lowercase
          .replace('-', '@') // Replace spaces with hyphens
          .replace(/\s+/g, '-') // Replace spaces with hyphens
          // .replace(/[^\w-]+/g, '') // Remove non-word characters (excluding hyphens)
          .replace(/--+/g, '-')
      ); // Replace multiple hyphens with a single hyphen
    }
  }

  useEffect(() => {
    // Extract tags from the 'data' object
    let tagsFromData = data?.tags?.map((tag) => tag.name) || [];

    // Extract unique tags from the 'case_studies' array
    let uniqueTagsFromCaseStudies = Array.from(
      new Set(
        data?.articles?.flatMap((caseStudy) => caseStudy.article_id?.tags || [])
      )
    );
    // Combine both sets of tags
    let combinedTags = [...tagsFromData, ...uniqueTagsFromCaseStudies];

    // Remove duplicates by creating a Set
    let uniqueCombinedTags = Array.from(new Set(combinedTags));

    // Set the 'allTags' state
    setAllTags(uniqueCombinedTags);
  }, [data]);

  useEffect(() => {
    const fetchFilteredArticle = async () => {
      try {
        let filterParams;

        if (selectedFilters.length > 0) {
          filterParams = {
            _and: selectedFilters.map((tag) => ({
              tags: {
                _icontains: tag,
              },
            })),
          };
        } else {
          filterParams = {};
        }
        const filteredArticles = await getFilterArticles(filterParams);

        setFiltered(filteredArticles);
      } catch (error) {
        console.error('Error fetching filtered articles:', error);
      }
    };

    fetchFilteredArticle();
  }, [selectedFilters]);

  return (
    <main className="max-w-screen-xl mx-auto px-4 flex flex-col items-center justify-center">
      <div className="w-full lg:my-28 my-16 flex items-center justify-center">
        <div className="lg:w-[80%] w-full flex flex-col items-center justify-center">
          <div className="">
            <h1 className="text-4xl md:text-5xl lg:text-5xl text-center gradient-text font-bold text-accent-blue">
              {data?.heading}
            </h1>
          </div>
          <div className="flex items-center justify-center gap-2 mt-4 w-full p-4 flex-wrap">
            <button
              onClick={() => {
                setSelectedFilters([]);
              }}
              className={`px-4 py-2  ${
                !selectedFilters.length > 0
                  ? 'bg-black text-white border border-cyan-300 shadow-sm shadow-cyan-300'
                  : 'borderGrd text-[#999999]'
              } rounded-2xl  text-xs font-fira-code`}
            >
              All Articles
            </button>
            {allTags?.map((tag, index) => {
              if (tag === 'All Articles') {
                // Skip rendering the button for "All Articles"
                return null;
              }

              const isTagSelected = selectedFilters.includes(tag);

              return (
                <button
                  onClick={(e) => {
                    if (isTagSelected) {
                      setSelectedFilters(
                        selectedFilters.filter((name) => name !== tag)
                      );
                    } else {
                      setSelectedFilters([...selectedFilters, tag]);
                    }
                  }}
                  key={index}
                  className={`px-4 py-2  ${
                    isTagSelected
                      ? 'bg-black text-white border border-cyan-300 shadow-sm shadow-cyan-300'
                      : 'borderGrd text-[#999999]'
                  } rounded-2xl  text-xs font-fira-code`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="blogs w-full flex-wrap items-center flex gap-8 justify-center">
        {selectedFilters.length > 0 && filtered && filtered.length === 0 ? (
          <p className="font-title-font text-gray-300 text-sm">
            No Blog Found.
          </p>
        ) : filtered ? (
          filtered?.map((blog, index) => {
            return (
              <BlogCard
                key={index}
                title={blog?.title}
                image={blog?.banner}
                tags={blog?.tags}
                link={ blog?.redirect_url ? blog?.redirect_url : `/blogs/${convertToSlug(blog?.title)}`}
              />
            );
          })
        ) : (
          data?.articles?.map((blog, index) => {
            return (
              <BlogCard
                key={index}
                title={blog?.article_id?.title}
                image={blog?.article_id?.banner}
                tags={blog?.article_id?.tags}
                link={ blog?.redirect_url ? blog?.redirect_url : `/blogs/${convertToSlug(blog?.title)}`}
              />
            );
          })
        )}
      </div>

      <div className="min-h-[60vh] w-screen p-6 flex items-center justify-center">
        <NudgeCard
          title={data?.section1_heading}
          label={data?.section1_button_text}
          url={data?.section1_button_url}
        />
      </div>
    </main>
  );
};

export default BlogPage;
