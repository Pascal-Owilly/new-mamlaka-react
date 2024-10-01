import { useEffect } from "react";
import { timeline, inView, stagger } from "motion";
import SplitType from 'split-type'

import { features } from "../constants";

const FeatureCard = ({ icon: Icon, title, content, color }) => (
	<div className="feature opacity-0 space-y-4 lg:space-y-6 bg-gray-100 p-8 rounded-xl">
		<div className={[
			"rounded-full border p-3 w-max",
			color,
		].join(' ')} >
			<Icon className="size-8 stroke-1" />
		</div>
		<p className="font-semibold text-xl lg:text-2xl">{title}</p>
		<p className="opacity-90">{content}</p>
	</div>
);

export default function Business() {
	useEffect(() => {
		const isSmall = window.innerWidth <= 1200;

		const title = new SplitType('#features > h2')
		title.chars.forEach((c) => c.classList.add('opacity-0'))

		inView(
			'#features',
			() => {
				timeline(
					[
						[
							title.chars,
							{ scale: [0.5, 1], opacity: [0, 1] },
							{ duration: 0.1, delay: stagger(0.05) }
						],
						[
							'.feature',
							{ y: [32, 0], opacity: [0, 1] },
							{ duration: 1, easing: 'ease', delay: stagger(0.2), at: '-0.6' }
						]
					],
				)
			},
			{ amount: isSmall ? 0.5 : 0.7 }
		)
	}, [])

	return (
		<section id="features" className="container py-16 min-h-[40dvh]">
			<h2 className="text-3xl font-semibold">The MHS Suite</h2>
			<div className="grid gap-8 md:grid-cols-3 mt-8 md:mt-12">
				{features.map((feature) => (
					<FeatureCard key={feature.id} {...feature} />
				))}
			</div>
		</section>);
}
