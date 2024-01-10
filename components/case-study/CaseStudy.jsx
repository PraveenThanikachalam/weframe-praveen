'use client';
import React, { useEffect, useState } from 'react';
import TagButton from '@/components/ui/TagButton';
import StoryCard from '@/components/HomePage/successstory/StoryCard';
import Button from '@/components/ui/Button';
import NudgeCard from '@/components/ui/NudgeCard';
import { getFilterCaseStudies } from '@/utils/getFilterCaseStudies';
import Link from 'next/link';

const CaseStudy = ({ pageData }) => {
  const [data, setData] = useState(pageData);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filtered, setFiltered] = useState();
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {
    // Extract tags from the 'data' object
    let tagsFromData = data?.tags?.map((tag) => tag.name) || [];

    // Extract unique tags from the 'case_studies' array
    // let uniqueTagsFromCaseStudies = Array.from(
    //   new Set(
    //     data?.case_studies?.flatMap(
    //       (caseStudy) => caseStudy.case_studies_id.tags || []
    //     )
    //   )
    // );
    // Combine both sets of tags
    // let combinedTags = [...tagsFromData, ...uniqueTagsFromCaseStudies];

    // Remove duplicates by creating a Set
    // let uniqueCombinedTags = Array.from(new Set(combinedTags));

    // Set the 'allTags' state
    setAllTags(tagsFromData);
  }, [data]);

  // Use 'allTags' as needed in your component

  useEffect(() => {
    const fetchFilteredCaseStudies = async () => {
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

        const filteredCaseStudies = await getFilterCaseStudies(filterParams);

        setFiltered(filteredCaseStudies);
      } catch (error) {
        console.error('Error fetching filtered case studies:', error);
      }
    };

    fetchFilteredCaseStudies();
  }, [selectedFilters]);
  return (
    <main className="max-w-screen-xl mx-auto px-4 flex flex-col items-center justify-center">
      <div className="w-full lg:my-28 my-20  flex items-center justify-center">
        <div className="lg:w-[80%] w-[90%] flex flex-col items-center justify-center">
          <div className="">
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-center font-title-font gradient-text ">
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
              All Case Studies
            </button>
            {allTags?.map((tag, index) => {
              if (tag === 'All Case Studies') {
                // Skip rendering the button for "All Case Studies"
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
      <div className="w-full flex flex-col gap-14 items-center justify-center">
        {selectedFilters.length > 0 && filtered && filtered.length === 0 ? (
          <p className="font-title-font text-gray-300 text-sm">
            No Case Studies Found.
          </p>
        ) : (
          (filtered ? filtered : data?.case_studies)?.map((item, index) => (
            <StoryCard
              key={index}
              data={filtered ? item : item.case_studies_id}
            />
          ))
        )}
      </div>
      <div className="w-full flex items-center justify-center my-16">
        <Link href={`${data?.button_url}`}>
          <Button variant="outline" label={data?.button_text} />
        </Link>
      </div>
      <div className="min-h-[60vh] w-screen p-6 flex items-center justify-center">
        <NudgeCard
          title={data?.last_section_heading}
          label={data?.last_section_button_text}
          url={data?.last_section_button_url}
        />
      </div>
    </main>
  );
};
export default CaseStudy;
