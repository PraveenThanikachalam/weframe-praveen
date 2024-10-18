"use client";

import React from "react";
import { motion } from "framer-motion";
import Amazon from "@/public/for-space-hero/amazon.png";
import Capital from "@/public/for-space-hero/capitall.png";
import Ownerpreneur from "@/public/for-space-hero/ownerpreneur.png";
import Neuz from "@/public/for-space-hero/neuz.png";
import D from "@/public/for-space-hero/d.png";
import X from "@/public/for-space-hero/x.png";
import Image from "next/image";

export default function Companies() {
	const sponsors = [
		{ src: Amazon, alt: "Amazon" },
		{ src: Capital, alt: "Capital" },
		{ src: Ownerpreneur, alt: "Ownerpreneur" },
		{ src: Neuz, alt: "Neuz" },
	];

	return (
		<div className="text-center w-full pb-10 md:pb-14 h-auto flex flex-col items-center md:gap-14 justify-center">
			<motion.h1
				className="bg-gradient-to-b from-white text-1xl font-bold md:text-[22px] via-white to-white/40 text-transparent bg-clip-text"
				initial={{ y: 50, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
			>
				Backed by businesses across the continents
			</motion.h1>

			{/* Container for sponsor logos */}
			<div className="md:flex justify-between md:w-[100vw] md:px-4 lg:w-[100vh] hidden items-center h-auto mt-8 mx-auto lg:flex-justify-around relative sm:mt-0 w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
				<motion.div
					className=" flex-shrink-0 flex gap-x-32 items-center justify-center"
					animate={{ x: [1000, 0, -1000] }} // Adjust distance based on content width
					transition={{
						repeat: Infinity,
						duration: 15,
						ease: "linear",
					}}
				>
					<Image src={Amazon} alt={"amazon"} className="w-[85px] h-full " />
					<Image src={Capital} alt={"capitall"} className="w-[65px] h-full " />
					<Image
						src={Ownerpreneur}
						alt={"ownerprenneur"}
						className="w-[92px] h-full "
					/>
					<Image src={X} alt={"x"} className="w-[40px] h-full " />
					{/* <Image src={D} alt={"D"} className="w-[40px] h-full " /> */}
					<Image src={Neuz} alt={"Neuz"} className="w-[86px] h-full " />
				</motion.div>
			</div>

			{/* Scrolling effect for smaller screens */}
			<motion.div
				className="flex md:hidden justify-between items-center w-[800px] h-auto mt-8 overflow-x-hidden space-x-4"
				animate={{ x: [1000, 0, -1000] }} // Adjust distance based on content width
				transition={{
					repeat: Infinity,
					duration: 15,
					ease: "linear",
				}}
			>
				{sponsors.map((sponsor, index) => (
					<div key={index} className=" flex-shrink-0">
						<Image
							src={sponsor.src}
							alt={sponsor.alt}
							className="w-[80px] h-full object-contain"
						/>
					</div>
				))}
				<div className=" flex-shrink-0 flex">
					<Image
						src={D}
						alt={"d"}
						className="w-[120px] h-full object-contain"
					/>
				</div>
				<div className=" flex-shrink-0 flex">
					<Image src={X} alt={"x"} className="w-[40px] h-full object-contain" />
				</div>
			</motion.div>
		</div>
	);
}
