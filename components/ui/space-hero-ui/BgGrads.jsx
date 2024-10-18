import * as React from "react";
const BgGradients = (props) => (
	<svg
		width={1440}
		height={1024}
		viewBox="0 0 1440 1024"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	>
		<rect width={1440} height={1024} fill="none" />
		<rect
			width={1440}
			height={1024}
			fill="url(#paint0_radial_5_520)"
			fillOpacity={0.1}
		/>
		<rect
			width={1440}
			height={1090}
			fill="url(#paint1_radial_5_520)"
			fillOpacity={0.2}
		/>
		<defs>
			<radialGradient
				id="paint0_radial_5_520"
				cx={0}
				cy={0}
				r={1}
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(720 381.5) rotate(90) scale(642.5 903.516)"
			>
				<stop stopColor="white" />
				<stop offset={0.540927} stopColor="white" stopOpacity={0} />
			</radialGradient>
			<radialGradient
				id="paint1_radial_5_520"
				cx={0}
				cy={0}
				r={1}
				gradientUnits="userSpaceOnUse"
				gradientTransform="translate(720 1252) rotate(-90) scale(740 1907.86)"
			>
				<stop stopColor="white" />
				<stop offset={0.507205} stopColor="white" stopOpacity={0} />
			</radialGradient>
		</defs>
	</svg>
);
export default BgGradients;
