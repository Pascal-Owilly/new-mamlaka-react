import React, { useEffect, useState } from "react";
import SplitType from "split-type";
import { timeline, stagger } from "motion";

import styles from "../style";
import heroGif from "../assets/map_1.gif"; // Importing the GIF

const Hero = () => {
	const [isMobile, setIsMobile] = useState(false);

	// Effect to check screen size and set `isMobile`
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 1200);
		};

		handleResize(); // Initial check
		window.addEventListener("resize", handleResize); // Listen for screen size changes

		// Cleanup listener on component unmount
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		window.particlesJS("particles-js", {
			particles: {
				number: {
					value: 80,
					density: {
						enable: true,
						value_area: 800,
					},
				},
				color: {
					value: "#ffffff",
				},
				shape: {
					type: "circle",
					stroke: {
						width: 0,
						color: "#000000",
					},
					polygon: {
						nb_sides: 5,
					},
				},
				opacity: {
					value: 0.5,
					random: false,
				},
				size: {
					value: 3,
					random: true,
				},
				line_linked: {
					enable: true,
					distance: 150,
					color: "#ffffff",
					opacity: 0.4,
					width: 1,
				},
				move: {
					enable: true,
					speed: 6,
					direction: "none",
					straight: false,
					out_mode: "out",
				},
			},
			interactivity: {
				detect_on: "canvas",
				events: {
					onhover: {
						enable: true,
						mode: "grab",
					},
					onclick: {
						enable: true,
						mode: "push",
					},
					resize: true,
				},
			},
			retina_detect: true,
		});
	}, []);

	useEffect(() => {
		window.setTimeout(() => {
			const title = new SplitType("#heroTitle")
			const desc = new SplitType("#heroDesc")

			title.lines.forEach((line) => line.classList.add('opacity-0'))
			desc.lines.forEach((line) => line.classList.add('opacity-0'))

			/**
			 * @type MotionKeyframesDefinition
			 */
			const keyframes = { y: [24, 0], opacity: [0, 1] }

			timeline(
				[
					[title.lines, keyframes, { delay: stagger(0.05) }],
					[desc.lines, keyframes, { delay: stagger(0.1), at: '-0.5' }],
					['#heroCta', { ...keyframes, y: [32, 0] }, { at: '-0.2' }]
				],
				{ duration: 1 }
			);
		}, 500)
	}, []);

	return (
		<section
			id="home"
			className={[
				"items-start min-h-[40dvh] lg:min-h-[60dvh] container",
				"mt-20 lg:mt-30 relative"
			].join(' ')}
		>
			<div className="absolute w-2/3 right-0 max-lg:hidden">
				<img src={heroGif} className="w-full" style={{marginTop:'-50px'}}/>
			</div>

			<div className="max-lg:text-center">
				{
					<h1 id="heroTitle" className="text-6xl md:text-7xl">
						The Africa Trade <br />
						<span className="text-gradient-2">Payment </span>{" "}
						<span>Network</span>
					</h1>
				}
				<p id="heroDesc" className="max-w-[470px] max-lg:mx-auto text-xl mt-8 md:mt-12">
					MHS empowers Africa&apos;s trade finance with secure, tech-driven digital
					services for growth.
				</p>

				<a id="heroCta" href="/solutions" className="opacity-0 inline-block mt-5">
					<button
						className={[
							"bg-primary font-semibold tracking-wide px-4 py-4",
							"text-sm text-white rounded-md flex items-center justify-center",
						].join(' ')}
					>
						Discover our capabilities
						{ /* <span className="ml-3 arrow">→</span> {/* Forward arrow */}
					</button>
				</a>
			</div>


			{/* Particle Effect */}
			<div className={`relative ${styles.flexCenter}`}>
				<div id="particles-js" className="absolute inset-0 z-[-1]" />
			</div>
		</section>
	);
};

export default Hero;
