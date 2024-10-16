import { Lexend } from "next/font/google";
import { oceanwide } from "../fonts/index";
import "./globals.css";
// import Navbar from "@/components/layout/Navbar";
import Navbar from "@/components/ui/space-hero-ui/Navbar";
import Footer from "@/components/layout/Footer";
import Matrix from "@/components/ui/Matrix";
import NextTopLoader from "nextjs-toploader";
// import TopMessage from '@/components/layout/navbar/TopMessage';

const font = Lexend({ subsets: ["latin"] });

export const metadata = {
	title: "WeframeTech",
	description:
		"Jamstack & Headless Commerce Agency, We recognize the demand for high-speed, secure, and easily scalable websites. Leveraging the power of Jamstack, we deliver an exceptional web development experience tailored to your specific requirements, Get an instant quote for your project.",
	verification: {
		google: "9pRBHxV_nsy51H_05l3T69xYwyraF_KOEE2a4PbhIE",
	},
};

{
	/* <meta name="google-site-verification" content="9pRBHxV_nsy51H_05l3T69xYwyraF_KOEE2a4PbhIEw" /> */
}

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={`${oceanwide.variable}`}>
			<head>
				<link
					rel="apple-touch-icon"
					sizes="180x180"
					href="/apple-touch-icon.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="32x32"
					href="/favicon-32x32.png"
				/>
				<link
					rel="icon"
					type="image/png"
					sizes="16x16"
					href="/favicon-16x16.png"
				/>
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
			</head>
			<body
				className={`${font.className} overflow-y-scroll overflow-x-hidden no-scrollbar`}
			>
				<noscript>
					<iframe
						src="https://www.googletagmanager.com/ns.html?id=GTM-N95T29H"
						height="0"
						width="0"
						style={{ display: "none", visibility: "hidden" }}
					></iframe>
				</noscript>
				<NextTopLoader
					color="#00e6e6"
					showSpinner={false}
					easing="ease"
					height={2}
				/>
				{/* <TopMessage /> */}
				{/* <Navbar /> */}
				{/* <Navbar /> */}
				<Navbar />
				<Matrix />
				{children}
				<Footer />
			</body>
		</html>
	);
}
<div
	className="absolute bottom-0  left-0 w-full h-44 z-50 pointer-events-none"
	style={{
		background: `radial-gradient(
	  80% 80% at 50% 100%, /* Make the gradient wider and taller */
	  rgba(0, 0, 0, 1) 0%,
	  rgba(0, 0, 0, 0.5) 50%,
	  rgba(0, 0, 0, 0.4) 60%,
	  rgba(0, 0, 0, 0) 100%
  )`,
	}}
/>;
