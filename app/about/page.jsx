import ProgressFlow from "@/components/ProgressFlow";
import ImageGrid from "@/components/about-image-grid/ImageGrid";
import CultureComponent from "@/components/about/CultureComponent";
import BackLightEffect from "@/components/ui/BackLightEffect";
import { getAboutPage } from "@/utils/getAboutPage";

export async function generateMetadata(parent) {
	const seoData = await getAboutPage();
	if (seoData.SEO) {
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

const AboutPage = async () => {
	const data = await getAboutPage();
	if (!data) return;
	return (
		<section className="flex flex-col justify-center items-center mt-16 w-full max-w-screen-xl mx-auto px-3">
			<div className="py-16 w-full lg:flex-row flex-col z-10 flex items-center justify-center lg:justify-between">
				<div className=" w-full flex-1 flex flex-col items-center  lg:items-start gap-4 ">
					<h1 className="lg:text-5xl px-5 lg:leading-snug font-bold md:text-5xl md:leading-snug text-4xl leading-snug text-center lg:text-left font-title-font gradient-text  ">
						{data?.heading}
					</h1>

					<p className="text-gray-300 px-5 font-light text-center lg:text-left">
						{data?.description}
					</p>
				</div>
				<div className="lg:w-[450px] md:w-[450px] w-80">
					<ImageGrid images={data?.images} />
				</div>
			</div>
			<div className="w-full  flex justify-center relative">
				<div className="w-full z-30  flex flex-col md:mt-6 items-center justify-end gap-2">
					<p className="md:mb-6 text-lg font-medium opacity-0">Trusted by</p>
					<div className=" relative mt-5 flex items-center justify-center sm:mt-0 w-full md:w-[60vw] overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
						<div className="flex glow md:gap-12 gap-6">
							{data?.stats.map((stat, index) => {
								return (
									<div
										key={index}
										className="flex flex-col items-center gap-1 justify-center"
									>
										<h1 className="lg:text-5xl text-xl font-bold  text-white">
											{stat.value}
										</h1>
										<p className="text-white text-xs md:text-base font-bold md:font-medium ">
											{stat.label}
										</p>
									</div>
								);
							})}
						</div>
					</div>
				</div>
				<div className="absolute lg:-top-16 top-5 ">
					<BackLightEffect />
				</div>
			</div>
			<div className="lg:my-56 mt-36">
				<ProgressFlow
					title={data?.section1_heading}
					arr={data?.section1_points}
				/>
			</div>
			<div className="w-full">
				<CultureComponent
					title={data?.section2_heading}
					arr={data?.section2_images}
				/>
			</div>
		</section>
	);
};

export default AboutPage;
