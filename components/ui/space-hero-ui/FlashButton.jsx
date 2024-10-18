export default function FlashButton() {
	return (
		<div className="animated-border-box w-[200px] md:w-[250px] h-[65px] translate-y-48 md:translate-y-48">
			<div className="flashlight" />
			<div className="absolute inset-0 flex items-center justify-center z-20">
				<p className="text-white text-md md:text-lg font-bold">
					Book a Meeting
				</p>
			</div>
		</div>
	);
}
