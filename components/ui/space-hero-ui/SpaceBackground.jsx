"use client";

import React, { useEffect } from "react";
import SpotLight from "@/public/for-space-hero/spotLight.png";
import TopGrid from "./TopGrid";
import MiddleGrid from "./MiddleGrid";
import BottomGrid from "./BottomGrid";
import Image from "next/image";
import BgGradients from "./BgGrads";
import BottomFade from "./BottomFade";

const SpaceBackground = () => {
	useEffect(() => {
		const numStars = 100;
		const container = document.querySelector(".stars-container");

		for (let i = 0; i < numStars; i++) {
			const star = document.createElement("div");
			star.className = "star";
			star.style.animation = `twinkle ${Math.random() * 5 + 5}s linear ${
				Math.random() * 1 + 1
			}s infinite`;
			star.style.top = `${Math.random() * window.innerHeight}px`;
			star.style.left = `${Math.random() * window.innerWidth}px`;
			container.appendChild(star);
		}

		return () => {
			const stars = document.querySelectorAll(".star");
			stars.forEach((star) => star.remove());
		};
	}, []);

	return (
		<div className=" stars-container h-full bg-[#020708] -z-30 overflow-hidden flex flex-col items-center justify-between absolute inset-0 ">
			<div className="absolute w-full h-full">
				<Image src={SpotLight} alt="" />
			</div>
			<div className="w-auto z-10 absolute md:relative -translate-y-5 h-auto">
				<TopGrid />
			</div>
			<div className=" text-white text-2xl  -translate-y-32 -z-4 "></div>
			<div className="text-white text-2xl lg:flex hidden absolute w-full h-auto items-center justify-center -z-4">
				<BgGradients />
			</div>
			<div className=" absolute w-full h-full bottom-0 flex items-center justify-center z-30">
				<MiddleGrid />
			</div>

			<div className=" absolute w-full brightness-90 h-full bottom-0 flex items-center justify-center z-30">
				<BottomFade />
			</div>

			<div className="w-auto h-auto z-10 ">
				<div className="-z-10 relative">
					<BottomGrid />
				</div>
				<div
					className="absolute bottom-0  left-0 w-full h-40 z-50 pointer-events-none"
					style={{
						background: `radial-gradient(
				80% 80% at 50% 100%, /* Make the gradient wider and taller */
				rgba(2, 7, 8, 1) 0%,
				rgba(2, 7, 8, 1) 10%,
				rgba(2, 7, 8, 1) 20%,
				rgba(0, 0, 0, 0.5) 50%,
				rgba(0, 0, 0, 0.4) 60%,
				rgba(0, 0, 0, 0) 100%
			)`,
					}}
				/>
				<div
					className="absolute bottom-0 left-0 w-full h-40 z-0 pointer-events-none"
					style={{
						background: `radial-gradient(
            100% 80% at 50% 100%, /* Adjusted size and shape */
            rgba(0, 0, 0, 1) 0%, /* Fully opaque at the top */
            rgba(0, 0, 0, 1) 10%, /* Fully opaque at the top */
            rgba(0, 0, 0, 1) 20%, /* Slightly transparent */
            rgba(0, 0, 0, 0.3) 50%, /* More transparent */
            rgba(0, 0, 0, 0.1) 70%, /* Even more transparent */
			rgba(0, 0, 0, 0) 80% ,
			rgba(0, 0, 0, 0) 90%, 
            rgba(0, 0, 0, 0) 100% /* Fully transparent at the bottom */
        )`,
					}}
				/>
			</div>
		</div>
	);
};

export default SpaceBackground;
