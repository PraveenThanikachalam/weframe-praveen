import * as React from "react";
import { useEffect, useRef } from "react";
import { motion, useAnimationControls } from "framer-motion";

const SvgComponent = (props) => {
	const controls1 = useAnimationControls();
	const controls2 = useAnimationControls();
	const controls3 = useAnimationControls();
	const controls4 = useAnimationControls();
	const gradient1 = useAnimationControls();
	const gradient2 = useAnimationControls();
	const gradient3 = useAnimationControls();
	const gradient4 = useAnimationControls();

	const rectRef1 = useRef(null);
	const rectRef2 = useRef(null);

	const countRef = useRef(1); // Use ref instead of state

	useEffect(() => {
		let isMounted = true; // Flag to check if component is mounted

		const animateMask = async (rectRef, currentCount) => {
			const start = currentCount % 2 === 0 ? 500 : -500;
			const end = currentCount % 2 === 0 ? -500 : 500;
			const duration = 5000; // 5 seconds

			const animate = () => {
				return new Promise((resolve) => {
					const startTime = performance.now();

					const step = (currentTime) => {
						const elapsed = currentTime - startTime;
						const progress = Math.min(elapsed / duration, 1);
						const newPos = start + (end - start) * progress;

						if (rectRef.current) {
							rectRef.current.setAttribute("y", newPos);
						}

						if (progress < 1 && isMounted) {
							requestAnimationFrame(step);
						} else {
							if (rectRef.current) {
								rectRef.current.setAttribute("y", start);
							}
							resolve();
						}
					};

					requestAnimationFrame(step);
				});
			};

			await animate();
		};

		const sequence = async () => {
			let currentCount = countRef.current;
			while (isMounted) {
				try {
					// Animate controls1
					await controls1.start({
						x2: ["0%", "70%"],
						x1: ["0%", "100%"],
						transition: { duration: 1, ease: "easeInOut" },
					});

					await new Promise((resolve) => setTimeout(resolve, 500));

					// Animate gradient1
					await gradient1.start({
						offset: "0%",
						stopColor: "rgba(255,255,255,0)",
						transition: { duration: 1, ease: "easeInOut" },
					});

					await controls1.start({
						x1: ["70%", "0%"],
						x2: ["100%", "0%"],
						transition: { duration: 1, ease: "easeInOut" },
					});

					await gradient1.start({
						offset: "0%",
						stopColor: "rgba(255,255,255,1)",
						transition: { duration: 1, ease: "easeInOut" },
					});

					// Animate controls2
					await controls2.start({
						x2: ["0%", "80%"],
						x1: ["0%", "100%"],
						opacity: [0, 1],
						transition: { duration: 1, ease: "easeInOut" },
					});

					await new Promise((resolve) => setTimeout(resolve, 500));

					// Animate gradient2
					await gradient2.start({
						offset: "0%",
						stopColor: "rgba(255,255,255,0)",
						transition: { duration: 1, ease: "easeInOut" },
					});

					await controls2.start({
						x1: ["70%", "0%"],
						x2: ["100%", "0%"],
						transition: { duration: 1, ease: "easeInOut" },
					});

					await gradient2.start({
						offset: "0%",
						stopColor: "rgba(255,255,255,1)",
						transition: { duration: 1, ease: "easeInOut" },
					});

					// Animate controls3
					await controls3.start({
						x1: ["100%", "0%"],
						x2: ["130%", "30%"],
						transition: { duration: 1, ease: "easeInOut" },
					});

					await new Promise((resolve) => setTimeout(resolve, 500));

					// Animate gradient3
					await gradient3.start({
						offset: "0%",
						stopColor: "rgba(255,255,255,0)",
						transition: { duration: 1, ease: "easeInOut" },
					});

					await controls3.start({
						x1: ["70%", "0%"],
						x2: ["100%", "0%"],
						transition: { duration: 1, ease: "easeInOut" },
					});

					await gradient3.start({
						offset: "0%",
						stopColor: "rgba(255,255,255,1)",
						transition: { duration: 1, ease: "easeInOut" },
					});

					// Animate controls4
					await controls4.start({
						x1: ["100%", "0%"],
						x2: ["130%", "30%"],
						transition: { duration: 1, ease: "easeInOut" },
					});

					await new Promise((resolve) => setTimeout(resolve, 500));

					// Animate gradient4
					await gradient4.start({
						offset: "0%",
						stopColor: "rgba(255,255,255,0)",
						transition: { duration: 1, ease: "easeInOut" },
					});

					await controls4.start({
						x1: ["70%", "0%"],
						x2: ["100%", "0%"],
						transition: { duration: 1, ease: "easeInOut" },
					});

					await gradient4.start({
						offset: "0%",
						stopColor: "rgba(255,255,255,1)",
						transition: { duration: 1, ease: "easeInOut" },
					});

					// Animate masks
					await Promise.all([
						animateMask(rectRef1, currentCount),
						animateMask(rectRef2, currentCount),
					]);

					// Increment count
					currentCount += 1;
					countRef.current = currentCount;
				} catch (error) {
					console.error("Animation sequence error:", error);
					break; // Exit the loop on error
				}
			}
		};

		sequence();

		return () => {
			isMounted = false; // Cleanup flag
		};
	}, [
		controls1,
		controls2,
		controls3,
		controls4,
		gradient1,
		gradient2,
		gradient3,
		gradient4,
	]); // Removed 'count' from dependencies

	return (
		<svg
			width={1247}
			height={321}
			viewBox="0 0 1247 321"
			preserveAspectRatio="xMidYMid meet"
			fill="none"
			{...props}
		>
			<path d="M624 1L802 192" stroke="url(#linearGradient1)" />
			<path d="M624 1L975 189" stroke="url(#linearGradient2)" />
			<path stroke="url(#linearGradient3)" d="m382 86.5-276.5 99" />
			<path d="M532 198L624 10" stroke="url(#linearGradient4)" />
			<g filter="url(#a)">
				<path
					stroke="url(#b)"
					strokeWidth={4}
					d="m85.672 167.363 113.622-34.117 46.264-.01-95.189 34.047-64.697.08Zm76.615-.095 95.155-34.034 52.16-.011-78.857 33.961-68.458.084Zm156.607-38.047-50.262.01 74.736-26.731h37.572l-62.046 26.721Zm-78.007 37.95 78.833-33.95 52.117-.011-63.054 33.877-67.896.084Zm138.398-37.963-50.273.011 62.04-26.719h37.943l-49.71 26.708Zm-62.031 37.868 63.038-33.868 53.015-.011-47.507 33.794-68.546.085Zm121.678-37.88-51.192.01 49.707-26.706h39.012l-37.527 26.696Zm-46.219 37.787 47.497-33.788 56.512-.012-31.758 33.71-72.251.09Zm107.778-37.8-54.656.011L483.36 102.5h42.269l-25.138 26.683Zm-30.025 37.703 31.752-33.704 57.662-.012-15.75 33.625-73.664.091Zm91.288-37.716-55.767.011 25.137-26.681h43.123l-12.493 26.67Zm-13.205 37.619 15.749-33.62 57.702-.012v33.541l-73.451.091ZM622 129.157l-55.828.012 12.492-26.669H622v26.657Zm4 37.536v-33.537l57.691-.012 15.672 33.458-73.363.091Zm55.817-37.548-55.817.011V102.5h43.336l12.481 26.645Zm21.961 37.452-15.671-33.454 57.971-.012 31.529 33.374-73.829.092Zm38.522-37.465-56.066.012-12.481-26.644h43.386l25.161 26.632Zm40.804 37.366-31.525-33.368 55.07-.012 46.541 33.293-70.086.087Zm17.955-37.378-53.258.011-25.159-26.631h41.206l37.211 26.62Zm58.994 37.283-46.531-33.286 53.652-.011 61.729 33.212-68.85.085Zm-.311-37.296-51.81.011-37.209-26.618h39.566l49.453 26.607Zm77.584 37.2-61.713-33.203 53.058-.011 77.099 33.129-68.444.085Zm-17.96-37.212-51.184.01-49.45-26.605h38.743l61.891 26.595Zm96.504 37.115-77.072-33.119 52.016-.011 92.566 33.046-67.51.084Zm-36.254-37.128-50.123.011-61.886-26.593h37.552l74.457 26.582Zm115.614 37.029-92.53-33.034 44.01-.009 109.74 32.967-61.22.076Zm-61.83-37.04-41.894.009-74.45-26.58h27.897l88.447 26.571Zm73 41.026 63.31-.078 53.42 16.049a29.995 29.995 0 0 1 21.37 28.732V250H1161v-36.446c0-14.37-9.03-27.189-22.57-32.021l-32.03-11.436ZM1161 254h83.5v77H1161v-77Zm0 81h83.5v80H1161v-80Zm0 84h83.5v81H1161v-81Zm0 85h83.5v83H1161v-83Zm-4 0v83h-86.5v-83h86.5Zm-90.5 0v83H981v-83h85.5Zm-89.5 0v83h-84v-83h84Zm-88 0v83h-83.5v-83H889Zm-87.5 0v83H715v-83h86.5Zm-90.5 0v83h-85v-83h85Zm-89 0v83h-85v-83h85Zm-89 0v83h-86v-83h86Zm-90 0v83h-85.5v-83H443Zm-89.5 0v83h-83v-83h83Zm-87 0v83h-84v-83h84Zm-88 0v83H92v-83h86.5ZM88 504v83H2v-83h86Zm0-4H2v-81h86v81Zm0-85H2v-80h86v80Zm0-84H2v-77h86v77Zm0-81H2v-35.197a30 30 0 0 1 21.372-28.733l48.923-14.69 66.852-.083-28.598 10.229A34 34 0 0 0 88 213.54V250Zm23.897-64.708 39.168-14.01 70.365-.087-22.378 9.638A34 34 0 0 0 178.5 212.06V250H92v-36.46a30 30 0 0 1 19.897-28.248Zm88.737-.785 30.938-13.324 69.749-.087-16.913 9.087a34 34 0 0 0-17.908 29.95V250h-84v-37.94a30 30 0 0 1 18.134-27.553Zm85.667-.801 23.491-12.621 70.375-.087-12.375 8.804a33.997 33.997 0 0 0-14.292 27.705V250h-83v-39.867a30.001 30.001 0 0 1 15.801-26.427Zm83.809-.645 16.97-12.071 74.111-.092-8.938 9.487A34 34 0 0 0 443 203.7V250h-85.5v-42.493a30.002 30.002 0 0 1 12.61-24.446Zm85.054.067 11.529-12.237 75.562-.094-6.044 12.904A33.993 33.993 0 0 0 533 198.123V250h-86v-46.3c0-7.648 2.92-15.006 8.164-20.572Zm84.669 2.27 6.842-14.606 75.325-.094V250h-85v-51.877c0-4.398.967-8.742 2.833-12.725ZM626 191v-20.307l75.236-.093 6.931 14.798A29.994 29.994 0 0 1 711 198.123V250h-85v-59Zm85.789-7.299-6.139-13.107 75.732-.093 11.925 12.622a30 30 0 0 1 8.193 20.602V250H715v-51.877c0-4.984-1.096-9.908-3.211-14.422Zm84.426-3.325-9.337-9.882 71.894-.089 17.682 12.649A29.998 29.998 0 0 1 889 207.453V250h-83.5v-46.275a34 34 0 0 0-9.285-23.349Zm82.567-.575-13.147-9.405 70.686-.088 24.893 13.394A30.001 30.001 0 0 1 977 210.121V250h-84v-42.547a34 34 0 0 0-14.218-27.652Zm84.327.378-18.365-9.881 70.306-.087 33.29 14.305a29.997 29.997 0 0 1 18.16 27.563V250H981v-39.879a34.001 34.001 0 0 0-17.891-29.942Zm86.811.662-24.76-10.643 69.38-.086 42.55 15.188a30 30 0 0 1 19.91 28.254V250h-86.5v-37.921a33.995 33.995 0 0 0-20.58-31.238ZM1070.5 254h86.5v77h-86.5v-77Zm0 81h86.5v80h-86.5v-80Zm0 84h86.5v81h-86.5v-81Zm-4 0v81H981v-81h85.5Zm-89.5 0v81h-84v-81h84Zm-88 0v81h-83.5v-81H889Zm-87.5 0v81H715v-81h86.5Zm-90.5 0v81h-85v-81h85Zm-89 0v81h-85v-81h85Zm-89 0v81h-86v-81h86Zm-90 0v81h-85.5v-81H443Zm-89.5 0v81h-83v-81h83Zm-87 0v81h-84v-81h84Zm-88 0v81H92v-81h86.5Zm0-4H92v-80h86.5v80Zm0-84H92v-77h86.5v77Zm4 0v-77h84v77h-84Zm88 0v-77h83v77h-83Zm87 0v-77H443v77h-85.5Zm89.5 0v-77h86v77h-86Zm90 0v-77h85v77h-85Zm89 0v-77h85v77h-85Zm89 0v-77h86.5v77H715Zm90.5 0v-77H889v77h-83.5Zm87.5 0v-77h84v77h-84Zm88 0v-77h85.5v77H981Zm0 4h85.5v80H981v-80Zm-4 0v80h-84v-80h84Zm-88 0v80h-83.5v-80H889Zm-87.5 0v80H715v-80h86.5Zm-90.5 0v80h-85v-80h85Zm-89 0v80h-85v-80h85Zm-89 0v80h-86v-80h86Zm-90 0v80h-85.5v-80H443Zm-89.5 0v80h-83v-80h83Zm-87 0v80h-84v-80h84ZM522.78 33.351l14.913-4.605-12.876 4.605h-2.037Zm-12.953 4h3.807L484.146 47.9h-8.473l34.154-10.548ZM496.023 47.9l29.488-10.548h6.703L507.724 47.9h-11.701Zm-33.303 4h10.243l-42.277 15.12h-16.931L462.72 51.9Zm-20.157 15.12L484.84 51.9h13.596l-35.112 15.12h-20.761Zm-41.761 4h18.701L342.674 98.5h-30.858l88.986-27.48ZM354.551 98.5l76.829-27.48h22.656L390.228 98.5h-35.677Zm81.889 0h-36.1l63.809-27.48h23.439L436.44 98.5Zm58.593-31.48h-21.596l35.111-15.121h14.63l-28.145 15.12Zm35.59-19.121h-12.787l24.491-10.548h7.927L530.623 47.9Zm27.076-14.548h-6.084L573.329 24h1.775l-17.405 9.351Zm8.451 0L583.556 24h3.255l-13.145 9.351h-7.516ZM592.435 20h-1.434l5.859-3.148L592.435 20Zm-11.869 13.351L593.712 24h5.872l-8.81 9.351h-10.208ZM603.352 20h-4.017l9.994-7.11.724-.003L603.352 20Zm-7.083 13.351 8.81-9.351h5.939l-4.381 9.351h-10.368ZM612.891 20h-4.043l6.728-7.142.662-.003L612.891 20Zm-1.836 13.351 4.38-9.351H622v9.351h-10.945ZM622 20h-4.691l3.357-7.168 1.334-.007V20Zm4 13.351V24h6.565l4.38 9.351H626ZM630.691 20H626v-7.196l1.317-.007L630.691 20Zm10.672 13.351L636.982 24h5.996l8.834 9.351h-10.449ZM639.199 20h-4.09l-3.385-7.226.645-.003 6.83 7.229Zm18.116 13.351L648.48 24h5.632l13.073 9.351h-9.87ZM648.521 20h-3.82l-6.857-7.258.527-.003L648.521 20Zm25.539 13.351L660.987 24h3.399l17.381 9.351h-7.707ZM656.952 20h-1.556l-4.721-3.377L656.952 20Zm33.257 13.351L672.829 24h1.958l21.763 9.351h-6.341ZM665.479 20h-.085l-.335-.18.42.18Zm41.203 13.351L684.919 24h.358l26.193 9.351h-4.788Zm-169.988 0L562.839 24h.377l-21.714 9.351h-4.808Zm186.673 0-3.835-1.369 4.377 1.37h-.542Zm11.204 4h2.123L770.409 47.9h-6.294L734.571 37.35ZM775.319 51.9h7.875l48.336 15.12h-13.856L775.319 51.9Zm53.559 19.12h15.437l87.84 27.481h-26.304l-76.973-27.48Zm-11.896 0L893.955 98.5h-35.657l-63.953-27.48h22.637Zm-32.769 0L848.166 98.5h-36.869l-51.075-27.48h23.991Zm-32.434 0L802.855 98.5h-37.724l-38.414-27.48h25.062Zm-31.937 0L758.256 98.5h-39.393l-25.961-27.48h26.94Zm-32.443 0L713.36 98.5h-41.48l-12.873-27.48h28.392Zm-32.809 0L667.463 98.5H626V71.02h28.59Zm-32.59 0V98.5h-41.463l12.873-27.48H622Zm-33.007 0L576.12 98.5h-41.227l25.889-27.48h28.211Zm-33.707 0L529.397 98.5h-40.414l38.63-27.48h27.673Zm-34.573 0L482.082 98.5h-37.19l51.147-27.48h24.674Zm5.623-4h-22.852l28.145-15.12h15.964l-21.257 15.12Zm26.88-19.12h-14.142l19.631-10.548h9.338L553.216 47.9Zm6.9 0 14.827-10.548h12.062L577.069 47.9h-16.953Zm22.448 0 9.937-10.548h12.263L599.823 47.9h-17.259Zm21.676 0 4.941-10.548H622V47.9h-17.76Zm21.76 0V37.35h12.819L643.76 47.9H626Zm22.177 0-4.941-10.548h12.355l9.964 10.548h-17.378Zm22.881 0-9.964-10.548h11.682L687.52 47.9h-16.462Zm23.337 0L679.651 37.35h9.55L708.805 47.9h-14.41Zm22.852 0L697.644 37.35h8.215L730.405 47.9h-13.158Zm23.29 0L715.991 37.35h6.683L752.218 47.9h-11.681Zm9.309 4h13.576l42.356 15.12h-20.742l-35.19-15.12Zm-10.132 0 35.19 15.12h-22.117L724.682 51.9h15.032Zm-23.474 0 28.105 15.12h-23.22L699.987 51.9h16.253Zm-23.128 0 21.138 15.12h-25.127L674.837 51.9h18.275Zm-23.778 0 14.286 15.12h-26.486L650.05 51.9h19.284Zm-23.701 0 7.084 15.12H626V51.9h19.633Zm-23.633 0v15.12h-26.717l7.084-15.12H622Zm-24.05 0-7.084 15.12H564.55l14.246-15.12h19.154Zm-24.65 0-14.245 15.12h-25.819l21.257-15.12H573.3ZM331.491 102.5l-74.743 26.734-44.484.009 91.236-28.175v1.432h27.991Z"
					shapeRendering="crispEdges"
				/>
			</g>{" "}
			<motion.path
				d="M688.648 69H656L701.911 168H782L688.648 69Z"
				fill="white" // Solid color for the first plane
				mask="url(#movingMask1)" // Apply the moving mask here
			/>
			<motion.path
				d="M592 69H559.5L466 169H545L592 69Z"
				fill="white" // Solid color for the second plane
				mask="url(#movingMask2)" // Apply the moving mask here
			/>
			<defs>
				<mask id="movingMask1">
					<rect x="0" y="0" width="100%" height="100%" fill="black" />
					<rect
						ref={rectRef1}
						x="0" // Align it horizontally with the SVG viewBox
						y="-200" // Starting off the top of the plane
						width="100%" // Full width of the mask
						height="200" // Height to cover the entire viewBox
						className="fill-white/10"
					/>
				</mask>

				{/* Define the Mask for the second plane */}
				<mask id="movingMask2">
					<rect x="0" y="0" width="100%" height="100%" />
					<rect
						ref={rectRef2}
						x="0" // Align it horizontally with the SVG viewBox
						y="-200" // Starting off the top of the plane
						width="100%" // Full width of the mask
						height="200" // Height to cover the entire viewBox
						className="fill-white/10"
					/>
				</mask>
				<motion.linearGradient
					id="linearGradient4"
					animate={controls4}
					initial={{
						x1: "0%",
						x2: "0%",
						stopOpacity: 0,
					}}
				>
					<motion.stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
					<motion.stop
						offset="0%"
						stopColor="rgba(255, 255, 255, 1)"
						animate={gradient4}
					/>
					<motion.stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
				</motion.linearGradient>

				<motion.linearGradient
					id="linearGradient3"
					animate={controls3}
					initial={{
						x1: "0%",
						x2: "0%",
					}}
				>
					<motion.stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
					<motion.stop
						animate={gradient3}
						offset="0%"
						stopColor="rgba(255, 255, 255, 1)"
					/>
					<motion.stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
				</motion.linearGradient>

				<motion.linearGradient
					id="linearGradient1"
					animate={controls1}
					initial={{
						x2: "0%",
						x1: "30%",
					}}
				>
					<motion.stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
					<motion.stop
						animate={gradient1}
						offset="0%"
						stopColor="rgba(255,255,255,1)"
					/>
					<motion.stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
				</motion.linearGradient>

				<motion.linearGradient
					id="linearGradient2"
					animate={controls2}
					initial={{
						x2: "0%",
						x1: "0%",
					}}
				>
					<motion.stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
					<motion.stop
						animate={gradient2}
						offset="0%"
						stopColor="rgba(255, 255, 255, 1)"
					/>
					<motion.stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
				</motion.linearGradient>
				<linearGradient
					id="b"
					x1={623.25}
					x2={623}
					y1={0}
					y2={506}
					gradientUnits="userSpaceOnUse"
				>
					<stop offset={0.12} stopColor="#fff" stopOpacity={0} />
					<stop offset={0.276} stopColor="#fff" stopOpacity={0.06} />
					<stop offset={0.552} stopColor="#fff" stopOpacity={0.03} />
					<stop offset={0.771} stopColor="#fff" stopOpacity={0} />
				</linearGradient>
				<filter
					id="a"
					width={1254.5}
					height={597}
					x={-4}
					y={0}
					colorInterpolationFilters="sRGB"
					filterUnits="userSpaceOnUse"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						result="hardAlpha"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					/>
					<feOffset dy={4} />
					<feGaussianBlur stdDeviation={2} />
					<feComposite in2="hardAlpha" operator="out" />
					<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
					<feBlend
						in2="BackgroundImageFix"
						result="effect1_dropShadow_2005_1491"
					/>
					<feBlend
						in="SourceGraphic"
						in2="effect1_dropShadow_2005_1491"
						result="shape"
					/>
				</filter>
			</defs>
		</svg>
	);
};

export default SvgComponent;
