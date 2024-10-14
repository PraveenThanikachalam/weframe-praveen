import React from "react";
import GridImage from "@/public/for-space-hero/topGrid.png";
import Image from "next/image";

export default function TopGrid() {
	return (
		<div className="container text-2xl text-white w-[250px] absolute md:relative h-full -translate-y-24 md:-translate-y-11 flex items-center justify-center">
			<div className="mask">
				<Image className="z-10" src={GridImage} alt="masked" />
				<div className="blurred-div"></div>
			</div>
		</div>
	);
}
