"use client";

import React, { useEffect } from "react";
import SpotLight from "@/public/for-space-hero/spotLight.png";
import TopGrid from "./TopGrid";
import MiddleGrid from "./MiddleGrid";
import BottomGrid from "./BottomGrid";
import Image from "next/image";
import BgGradients from "./BgGrads";

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
			<div className=" absolute w-full h-full flex items-center justify-center">
				<MiddleGrid />
			</div>
			<div className="w-auto z-10 h-auto">
				<BottomGrid />
			</div>
		</div>
	);
};

export default SpaceBackground;
