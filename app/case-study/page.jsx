import CaseStudy from '@/components/case-study/CaseStudy';
import { getCaseStudyPage } from '@/utils/getCaseStudyPage';

const CaseStudyPage = async () => {
  const data = await getCaseStudyPage();
  if (!data) return;

  console.log(data);
  return (
   <CaseStudy pageData={data}/>
  );
};

export default CaseStudyPage;
