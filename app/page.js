import HeroSection from "@/components/HomePage/HeroSection";
import SuccessStory from "@/components/HomePage/successstory/SuccessStory";
const FaqComponent = dynamic(
	() => import("@/components/HomePage/FaqComponent"),
);
const Services = dynamic(
	() => import("@/components/HomePage/services/Services"),
);
const TechStack = dynamic(
	() => import("@/components/HomePage/techstackcomponents/TechStack"),
);
const NudgeCard = dynamic(() => import("@/components/ui/NudgeCard"));
const OurClient = dynamic(() => import("@/components/HomePage/OurClient"));
const Testimonials = dynamic(
	() => import("@/components/HomePage/Testimonials"),
);
import getHomeData from "@/data/getHomeData";
import { getJamstackSlug } from "@/utils/getJamstackSlug";
import getHomeSeo from "@/utils/seo/getHomeSeo";
import dynamic from "next/dynamic";

export async function generateMetadata(parent) {
	const seoData = await getHomeSeo();
	if (seoData?.SEO) {
		const previousImages = (await parent).openGraph?.images || [];
		return {
			title: seoData?.SEO?.meta_title,
			description: seoData?.SEO?.meta_description,
			alternates: {
				canonical: seoData?.SEO?.canonical_url,
			},
			keywords: seoData?.SEO?.meta_keywords,
			robots: {
				index: true,
				follow: true,
			},
			openGraph: {
				images: [
					`${process.env.NEXT_PUBLIC_BASE_URL}/assets/${seoData?.SEO?.og_image}`,
					...previousImages,
				],
			},
		};
	}
	return {
		title: "WeframeTech",
		description:
			"Jamstack & Headless Commerce Agency, We recognize the demand for high-speed, secure, and easily scalable websites. Leveraging the power of Jamstack, we deliver an exceptional web development experience tailored to your specific requirements, Get an instant quote for your project.",
	};
}

export default async function Home() {
	const data = await getHomeData();
	const buttonSlug = await getJamstackSlug("jamstack_quote_page");
	if (!data) return null;
	return (
		<main className="flex flex-col justify-center md:gap-[120px] gap-[60px] px-4 items-center w-full">
			<HeroSection
				heroData={{
					hero_title: data?.hero_title,
					hero_desc: data?.hero_desc,
					section1_description: data?.section1_description,
					icons_heading: data?.icons_heading,
					icons: data?.icon,
					button1_url: `/calculator/${buttonSlug}`,
					button1_text: data?.button1_text,
					button2_url: data?.button2_url,
					button2_text: data?.button2_text,
				}}
			/>
			<SuccessStory
				successData={{
					heading: data?.section1_heading,
					description: data?.section1_description,
					btn: data?.section1_btn_text,
					link: data?.section1_btn_url,
					cases: data?.case_studies,
				}}
			/>
			<TechStack
				techData={{
					section2_heading: data?.section2_heading,
					section2_contents: data?.section2_contents,
				}}
			/>
			<Services
				servicesData={{
					section3_heading: data?.section3_heading,
					section3_description: data?.section3_description,
					section3_btn_text: data?.section3_btn_text,
					section3_btn_url: data?.section3_btn_url,
					services: data?.Services,
				}}
			/>
			<NudgeCard
				title={data?.section4_heading}
				label={data?.section4_button_text}
				url={data?.section4_button_url}
			/>
			<Testimonials
				testData={{
					testimonial_heading: data?.testimonial_heading,
					testimonial_cards: data?.testimonial,
				}}
			/>
			<OurClient
				clientsData={{
					client_section_heading: data?.client_section_heading,
					clients: data?.clients,
				}}
			/>
			<FaqComponent
				faq={{
					faq_heading: data?.faq_heading,
					faq_list: data?.faq_list,
				}}
			/>
		</main>
	);
}
