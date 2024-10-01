import { inView, stagger, timeline } from 'motion';
import { useEffect } from 'react';
import { FaDollarSign as Icon } from 'react-icons/fa';
import SplitType from 'split-type';

export default function Offering() {
	useEffect(() => {
		const title = new SplitType('#offering h2')
		title.chars.forEach((c) => c.classList.add('opacity-0'))

		const sub = new SplitType('#offering h3')
		sub.words.forEach((c) => c.classList.add('opacity-0'))

		inView(
			'#offering',
			() => {
				timeline(
					[
						[
							'#offering > div',
							{ y: [24, 0], opacity: [0, 1] },
							{ duration: 1, easing: 'ease', delay: stagger(0.2) },
						],
						[
							title.chars,
							{ scale: [0.5, 1], opacity: [0, 1] },
							{ delay: stagger(0.05), at: '-0.6' }
						],
						[
							sub.words,
							{ y: [12, 0], opacity: [0, 1] },
							{ duration: 0.8, delay: stagger(0.05), at: '<' }
						],
						[
							'#offering ul li',
							{ y: [12, 0], opacity: [0, 1] },
							{ duration: 0.5, delay: stagger(0.05), at: '-0.5' }
						],
						[
							'#offering .icon',
							{ scale: [0.5, 1], opacity: [0, 1] },
							{ duration: 0.8, delay: stagger(0.05), at: '-0.5' }
						],
					],
				)
			},
			{ amount: 0.5 }
		)
	}, [])
	return (
		<section id="offering" className="container text-white py-16">
			<div
				className={[
					"px-8 py-16 rounded-xl relative overflow-hidden opacity-0",
					"bg-dark",
				].join(' ')}
			>
				<div className="absolute right-8 opacity-20 top-1/2 text-primary -translate-y-1/2">
					<Icon className="icon size-[300px]" />
				</div>

				<div className='relative'>
  <h2 className="font-medium tracking-wide"></h2>
  <h3 className="mt-4 text-3xl">
    Our new enhanced offerings are decoupled from accounting software to provide:
  </h3>
  <ul className="mt-8 space-y-1">
    <li>Greater flexibility to manage cash flow</li>
    <li>Optimized currency conversions</li>
    <li>Tailored payment strategies for specific market needs</li>
    <li>Comprehensive payment solutions, including merchant onboarding, pay-ins, and payouts</li>
    <li>Enhanced fraud prevention and optimization to ensure secure transactions</li>
  </ul>
</div>

			</div>
		</section>
	);
}
