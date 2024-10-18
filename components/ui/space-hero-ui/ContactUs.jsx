import Link from "next/link";

const ContactUsBtn = () => {
	return (
		<Link
			href={"calculator/jamstack-website-cost-calculator-estimator"}
			className="relative w-[129px] py-2 flex items-center justify-center bg-transparent rounded-full text-white"
		>
			<div className="absolute inset-0 bg-gradient-to-r from-black via-black animated-border-box-2 animated-border-box to-[#5BD4DD] brightness-50 rounded-3xl p-[1px] -z-40">
				<div className="h-full w-full bg-black rounded-3xl"></div>
			</div>
			<span className="relative">Quotation</span>
		</Link>
	);
};

export default ContactUsBtn;
