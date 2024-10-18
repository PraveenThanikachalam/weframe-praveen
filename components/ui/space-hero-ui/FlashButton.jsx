import Link from "next/link";

export default function FlashButton() {
	return (
		<Link
			href={"https://calendly.com/vipuluthaiah/weframe-tech?month=2024-10"}
			className="animated-border-box w-[200px] md:w-[250px] h-[65px] translate-y-48 md:translate-y-48"
		>
			<div className="flashlight" />
			<div className="absolute inset-0 flex items-center justify-center z-20">
				<p className="text-white text-md md:text-lg font-bold">
					Book a Meeting
				</p>
			</div>
		</Link>
	);
}
