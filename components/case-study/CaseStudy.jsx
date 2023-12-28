'use client'
import React, { useEffect, useState } from 'react'
import TagButton from '@/components/ui/TagButton';
import StoryCard from '@/components/HomePage/successstory/StoryCard';
import Button from '@/components/ui/Button';
import NudgeCard from '@/components/ui/NudgeCard';
import { getFilterCaseStudies } from '@/utils/getFilterCaseStudies';

const CaseStudy = ({pageData}) => {
    const [data,setData] = useState(pageData)
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filtered, setFiltered] = useState();
  
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
          const filteredArticles = await getFilterCaseStudies(filterParams);
  
          setFiltered(filteredArticles);
        } catch (error) {
          console.error('Error fetching filtered articles:', error);
        }
      };
  
      fetchFilteredArticle();
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
            {data?.tags?.map((tag, index) => {
              if (tag.name === 'All Case Studies') {
                // Skip rendering the button for "All Case Studies"
                return null;
              }

              const isTagSelected = selectedFilters.includes(tag.name);

              return (
                <button
                  onClick={(e) => {
                    if (isTagSelected) {
                      setSelectedFilters(
                        selectedFilters.filter((name) => name !== tag.name)
                      );
                    } else {
                      setSelectedFilters([...selectedFilters, tag.name]);
                    }
                  }}
                  key={index}
                  className={`px-4 py-2  ${
                    isTagSelected
                      ? 'bg-black text-white border border-cyan-300 shadow-sm shadow-cyan-300'
                      : 'borderGrd text-[#999999]'
                  } rounded-2xl  text-xs font-fira-code`}
                >
                  {tag.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-14 items-center justify-center">
        {data?.case_studies?.map((item, index) => {
          return <StoryCard key={index} data={item.case_studies_id} />;
        })}
      </div>
      <div className="w-full flex items-center justify-center my-16">
        <Button variant="outline" label={'See More Case Studies'} />
      </div>
      <div className="min-h-[60vh] w-screen p-6 flex items-center justify-center">
        <NudgeCard
          title={data?.last_section_heading}
          label={data?.last_section_button_text}
          url={data?.last_section_button_url}
        />
      </div>
    </main>
  )
}

export default CaseStudy
