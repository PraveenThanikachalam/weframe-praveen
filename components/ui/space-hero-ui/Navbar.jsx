"use client";

import { useState } from "react";
import Logo from "@/public/updated.png";
import Hamburger from "@/public/for-space-hero/hamburger.png";
import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import ContactUsBtn from "./ContactUs";
import Image from "next/image";
import Link from "next/link";

const Links = [
	{
		href: "/",
		name: "Home",
	},
	{
		href: "#services",
		name: "Services",
	},
	{
		href: "case-study",
		name: "Case Studies",
	},
	{
		href: "#aboutus",
		name: "About Us",
	},
];

const Navbar = () => {
	const [isOpened, setIsOpened] = useState(false);
	const [isClosed, setIsClosed] = useState(true);
	const [showItems, setShowItems] = useState(false);

	const handleMenuOpen = () => {
		setIsOpened(true);
		setTimeout(() => {
			setIsClosed(false);
			setShowItems(true); // Show menu items after the animation
		}, 800); // Duration of the animation
	};

	const handleMenuClose = () => {
		setIsOpened(false);
		setIsClosed(true);
		setShowItems(false); // Hide menu items immediately when closing
	};

	return (
		<div className="w-full h-0 sticky top-9 md:top-16 z-40 md:px-4 px-2 md:py-0 flex items-start justify-center">
			<div className=" relative lg:w-[1133x] md:w-auto w-full text-sm md:text-sm lg:text-[16px] xl:text-lg flex items-center gap-5 md:gap-[20px] lg:gap-[77px] bg-black rounded-3xl px-[34px] py-[16px] justify-between z-10 h-auto border-2 border-transparent bg-clip-border">
				{/* Gradient border */}
				<motion.div
					className="absolute inset-0 bg-gradient-to-tr from-[#5BD4DD] via-black to-[#5BD4DD] brightness-50 p-[1px] rounded-3xl -z-40"
					animate={
						isOpened ? { height: ["100%", 400] } : { height: [400, "100%"] }
					}
					transition={{ duration: 0.8, ease: "easeInOut" }} // Adjust duration and easing for smooth effect
				>
					<div className="h-full w-full bg-black brightness-200 text-white rounded-3xl">
						<div
							className={
								isClosed || !isOpened
									? " hidden md:hidden "
									: "w-full h-full flex md:hidden pt-20 pb-10 flex-col gap-6 "
							}
						>
							{showItems && (
								<div className="flex flex-col w-full text-2xl text-white gap-2 md:gap-x-[25px] lg:gap-[34px] xl:gap-[64px] items-center h-full mt-[1px] justify-around">
									{Links.map((items, idx) => (
										<motion.div
											key={idx}
											initial="hidden"
											custom={idx}
											animate="visible"
										>
											<Link
												href={items.href}
												className="bg-gradient-to-b text-transparent from-white via-white/60 to-black bg-clip-text"
											>
												{items.name}
											</Link>
										</motion.div>
									))}
								</div>
							)}

							<div className="flex text-white w-auto items-center text-md justify-center gap-[10px] lg:gap-[23px]  ">
								{showItems && (
									<>
										{/* <motion.p
											initial={{ opacity: 0, y: 20 }}
											animate={{ opacity: 1, y: 0 }}
											transition={{ delay: 1.5, duration: 0.6 }}
										>
											Log in
										</motion.p> */}
										<ContactUsBtn />
									</>
								)}
							</div>
						</div>
					</div>
				</motion.div>

				<div className="Logo lg:min-w-[210px] flex items-center justify-center w-[150px] min-h-[40px]">
					<Image priority src={Logo} alt="company-logo" />
				</div>

				<div className="Elements hidden md:flex">
					<div className="flex w-full text-white gap-x-2 md:gap-[10px] lg:gap-[24px] xl:gap-[64px] items-center h-full mt-[1px] justify-around">
						{Links.map((items, idx) => (
							<Link
								key={idx}
								className="bg-gradient-to-b text-transparent from-white via-white/60 to-black bg-clip-text"
								href={items.href}
							>
								{items.name}
							</Link>
						))}
					</div>
				</div>

				{!isOpened ? (
					<motion.button
						onClick={handleMenuOpen}
						className="text-white w-[82px] h-[35px] items-center gap-x-2 md:hidden justify-center relative flex bg-white/5 rounded-3xl"
						initial={{ scale: 0.9, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						whileHover={{
							scale: 1.1,
							backgroundColor: "rgba(255,255,255,0.15)",
						}}
						transition={{ duration: 0.4, ease: "easeInOut" }}
					>
						<div className="absolute inset-0 bg-gradient-to-tr from-[#5BD4DD] via-black to-[#5BD4DD] brightness-50 rounded-3xl p-[1px] -z-40">
							<div className="h-full w-full bg-black rounded-3xl"></div>
						</div>
						<Image src={Hamburger} alt="menu" />
						<span className="bg-gradient-to-b font-bold text-transparent from-white via-white/60 to-black bg-clip-text">
							Menu
						</span>
					</motion.button>
				) : (
					<motion.button
						onClick={handleMenuClose}
						className="w-[82px] h-[35px] flex justify-center md:hidden items-center"
						initial={{ scale: 0.9, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						whileHover={{ scale: 1.1 }}
						transition={{ duration: 0.4, ease: "easeInOut" }}
					>
						<MdOutlineClose className="w-10 h-10 text-white/20 " />
					</motion.button>
				)}

				<div className="hidden md:flex text-white w-auto items-center justify-center gap-[10px] lg:gap-[23px] z-10 ">
					{/* <Link href={"#login"}>Log in</Link> */}
					<ContactUsBtn />
				</div>
			</div>
		</div>
	);
};

export default Navbar;
