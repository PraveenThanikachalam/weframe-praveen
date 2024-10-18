"use client";
import React, { useEffect, useState } from "react";
import StoryCard from "@/components/HomePage/successstory/StoryCard";
import Button from "@/components/ui/Button";
import NudgeCard from "@/components/ui/NudgeCard";

const CaseStudy = ({ pageData }) => {
	const [data, setData] = useState(pageData);
	const [selectedFilters, setSelectedFilters] = useState([]);
	const [filtered, setFiltered] = useState(null);
	const [allTags, setAllTags] = useState([]);
	const [display, setDisplay] = useState(6);

	useEffect(() => {
		let tagsFromData = data?.tags?.map((tag) => tag.name) || [];
		setAllTags(tagsFromData);
	}, [data]);

	useEffect(() => {
		const filterCaseStudies = () => {
			// Assuming `caseStudies` is your array of case studies data
			const filteredCaseStudies = data?.case_studies?.filter((caseStudy) =>
				selectedFilters.every((filter) =>
					caseStudy.case_studies_id.tags.some((tag) =>
						tag.toLowerCase().includes(filter.toLowerCase()),
					),
				),
			);

			setFiltered(filteredCaseStudies);
			setDisplay(filteredCaseStudies?.length);
		};

		if (selectedFilters.length > 0) {
			filterCaseStudies();
		} else {
			setFiltered(null);
			setDisplay(6);
		}
	}, [selectedFilters]); // Add caseStudies to the dependency array if it's fetched or changes dynamically

	return (
		<main className="max-w-screen-xl mx-auto px-4 flex flex-col items-center justify-center">
			<div className="w-full lg:my-28 my-20  flex items-center justify-center">
				<div className="lg:w-[80%] w-[90%] flex flex-col items-center justify-center">
					<div className="mt-20">
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
									? "bg-black text-white border border-cyan-300 shadow-sm shadow-cyan-300"
									: "borderGrd text-[#999999]"
							} rounded-2xl  text-xs font-fira-code`}
						>
							All Case Studies
						</button>
						{allTags?.map((tag, index) => {
							if (tag === "All Case Studies") {
								// Skip rendering the button for "All Case Studies"
								return null;
							}

							const isTagSelected = selectedFilters.includes(tag);

							return (
								<button
									onClick={(e) => {
										if (isTagSelected) {
											setSelectedFilters(
												selectedFilters.filter((name) => name !== tag),
											);
										} else {
											setSelectedFilters([...selectedFilters, tag]);
										}
									}}
									key={index}
									className={`px-4 py-2  ${
										isTagSelected
											? "bg-black text-white border border-cyan-300 shadow-sm shadow-cyan-300"
											: "borderGrd text-[#999999]"
									} rounded-2xl  text-xs font-fira-code`}
								>
									{tag}
								</button>
							);
						})}
					</div>
				</div>
			</div>
			<div className="w-full flex flex-col gap-[24px] items-center justify-center">
				{selectedFilters.length > 0 && filtered && filtered.length === 0 ? (
					<p className="font-title-font h-56 text-gray-300 text-sm">
						No Case Studies Found.
					</p>
				) : (
					(filtered ? filtered : data?.case_studies)?.map(
						(item, index) =>
							index + 1 <= display && (
								<StoryCard key={index} data={item.case_studies_id} />
							),
					)
				)}
			</div>
			<div
				className={`w-full flex items-center ${
					(display >= data?.case_studies?.length ||
						filtered ||
						data?.case_studies?.length <= 6) &&
					"hidden"
				} justify-center my-16 `}
			>
				<Button
					onClick={() => {
						setDisplay(display + 6);
					}}
					variant="outline"
					label={data?.button_text}
				/>
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
