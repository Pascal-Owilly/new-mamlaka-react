import { useEffect } from 'react';
import { timeline, stagger, inView } from 'motion';
import SplitType from 'split-type';
import { FaCreditCard, FaExchangeAlt, FaMoneyBillWave, FaPlug } from 'react-icons/fa'

import { cn } from "../utils"

const products = [
	{
		title: 'Payment processing',
		description: 'Streamline your financial transactions with our efficient and reliable payment processing solutions',
		icon: FaMoneyBillWave,
	},
	{
		title: 'Merchant services',
		description: 'Experience a versatile and secure multi-channel payment gateway designed to meet the specific requirements',
		dark: true,
		icon: FaCreditCard,
	},
	{
		title: 'Money transfers',
		description: 'Option for instant transfers with real-time processing, providing users with immediate access to funds',
		dark: true,
		icon: FaExchangeAlt,
	},
	{
		title: 'Plug and play',
		description: 'Exploit our seamless “plug-in” technology allows merchants to accept and manage both credit card and mobile money payments in a secure environment',
		icon: FaPlug,
	},
]

export default function Products() {
	useEffect(() => {
		const title = new SplitType('#products h2')
		title.chars.forEach((line) => line.classList.add('opacity-0'))

		inView(
			'#products',
			() => {
				timeline([
					[
						title.chars,
						{ scale: [0.5, 1], opacity: [0, 1] },
						{ duration: 0.1, delay: stagger(0.05) }
					],
					[
						'.product',
						{ opacity: [0, 1], scale: [0.95, 1] },
						{ duration: 1, delay: stagger(0.1), at: '-0.3' }
					],
				])
			},
			{ amount: 0.4 }
		)
	}, [])

	return (
		<section className="py-16 min-h-[60vh] grid-centered bg-primary/5">
			<div id="products" className="container">
				<h2 className="mb-4 text-2xl font-semibold">Solutions</h2>
				<div className="grid grid-cols-2 gap-4 md:gap-8">
					{products.map((product) => (
						<div
							key={products.name}
							className={
								cn("product rounded-xl space-y-6 p-8 bg-white opacity-0",
									"min-h-64",
									product.dark
										? 'bg-dark'
										: 'bg-white'
								)
							}
						>
							<product.icon className={`text-4xl ${!product.dark && 'text-primary'}`} />
							<p className="text-2xl">{product.title}</p>
							<p>{product.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
