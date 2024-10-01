import { inView, stagger, timeline } from "motion";
import { useEffect } from "react";
import SplitType from 'split-type';
import { FaList, FaClipboardList, FaCheckCircle, FaHistory, FaUserCheck } from "react-icons/fa";


const onboardingSteps = [
	{
		icon: FaClipboardList,
		title: 'Laying the foundation',
		subtitle: 'Pre-screening/Application Stage',
	},
	{
		icon: FaCheckCircle,
		title: 'Know your business',
		subtitle: 'KYC/Identity Verification',
	},
	{
		icon: FaHistory,
		title: 'Run the analysis',
		subtitle: 'Merchant History Check',
	},
	{
		icon: FaList,
		title: 'Navigating the domain',
		subtitle: 'Risk Assessment and Management',
	},
	{
		icon: FaUserCheck,
		title: 'Ready to start',
		subtitle: 'Account Setup',
	},
];

export default function CardDeal() {
	useEffect(() => {
		const isSmall = window.innerWidth <= 1200;

		const title = new SplitType('#onboarding h2')
		title.chars.forEach((c) => c.classList.add('opacity-0'))

		inView(
			'#onboarding',
			() => {
				timeline(
					[
						[
							title.chars,
							{ scale: [0.5, 1], opacity: [0, 1] },
							{ duration: 0.1, delay: stagger(0.05) }
						],
						[
							'#onboarding .step',
							{ y: [32, 0], opacity: [0, 1] },
							{ duration: 0.8, easing: 'ease', delay: stagger(0.2), at: '-0.6' }
						]
					],
				)
			},
			{ amount: isSmall ? 0.5 : 0.7 }
		)
	}, [])

	return (
		<section id="onboarding" className="bg-primary/5 py-16">
			<div className="container">
				<h2 className="text-xl font-semibold">Our Onbording Process</h2>
				<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md-grid-cols-3 mt-4 sm:gap-8">
					{onboardingSteps.map((step, index) => (
						<div key={`onboarding-step-${index}`} className="step opacity-0">
							<div
								className={[
									"p-2 items-center border border-primary/10",
									"rounded-l-full bg-white rounded-full flex gap-x-4",
								].join(' ')}
							>
								<div className="p-5 rounded-full bg-primary/10 w-max">
									<step.icon className="size-6 text-primary-dark" />
								</div>
								<div>
									<p className="text-primary-dark">{step.subtitle}</p>
									<p className="opacity-80 text-sm">{step.title}</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

