import TagButton from '@/components/ui/TagButton';
import StoryCard from '@/components/HomePage/successstory/StoryCard';
import Button from '@/components/ui/Button';
import NudgeCard from '@/components/ui/NudgeCard';
import { getCaseStudyPage } from '@/utils/getCaseStudyPage';

const CaseStudy = async () => {
  const data = await getCaseStudyPage();
  if (!data) return;

  console.log(data);
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
            {data?.tags.map((tag, index) => {
              return <TagButton key={index} tag={tag.name} />;
            })}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-14 items-center justify-center">
        {data?.case_studies.map((item, index) => {
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
  );
};

export default CaseStudy;
