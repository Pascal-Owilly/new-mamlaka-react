import { inView, stagger, timeline } from "motion";
import { useEffect } from "react";
import SplitType from "split-type"

import { TargetIcon } from "./icons";

export default function Mission() {
	useEffect(() => {
		const isSmall = window.innerWidth <= 1200;

		const title = new SplitType('#mission h2')
		title.chars.forEach((c) => c.classList.add('opacity-0'))

		const mission = new SplitType('.mission')
		mission.lines.forEach((c) => c.classList.add('opacity-0'))

		inView(
			'#mission',
			() => {
				timeline(
					[
						[
							title.chars,
							{ scale: [0.5, 1], opacity: [0, 1] },
							{ duration: 0.1, delay: stagger(0.05) }
						],
						[
							mission.lines,
							{ y: [12, 0], opacity: [0, 1] },
							{ delay: stagger(0.05), at: '-0.9' }
						],
						[
							'#mission .icon',
							{ x: [32, 0], scale: [0.9, 1], opacity: [0, 1] },
							{ easing: 'ease', duration: 0.5, delay: stagger(0.2), at: '-0.6' }
						]
					],
				)
			},
			{ amount: isSmall ? 0.5 : 0.7 }
		)
	}, [])

	return (
		<section id="mission" className="container py-16 grid grid-cols-3 gap-8">
			<div className="col-span-2">
				<h2 className="text-3xl font-semibold">Our mission</h2>
				<p className="mission mt-8 text-justify">
					Our mission is to empower the financial systems of businesses with innovative payment solutions.<br />
					By embedding accounting functions in the payment platform, we unlock/enable a customized experience that unlocks new growth opportunities.
				</p>
			</div>
			<div className="bg-primary/0 rounded-lg p-8 grid-centered">
				<TargetIcon className="icon size-28 stroke-1" />
			</div>
		</section>)
}
