import { useState, useEffect } from "react";

import { stats } from "../constants";

const Stats = () => {
	// Function to count from 0 to target number
	const [counts, setCounts] = useState(stats.map(() => 0));

	useEffect(() => {
		stats.forEach((stat, index) => {
			let start = 0;
			const end = parseInt(stat.value); // Parse value to ensure it's an integer
			if (isNaN(end)) return; // Handle non-numeric values safely

			const duration = 2000; // Duration of the count (in milliseconds)
			const incrementTime = Math.ceil(duration / end); // Time between increments

			const timer = setInterval(() => {
				start += 1;
				setCounts((prevCounts) => {
					const newCounts = [...prevCounts];
					newCounts[index] = start;
					return newCounts;
				});

				if (start === end) {
					clearInterval(timer);
				}
			}, incrementTime);
		});
	}, []);

	return (
		<section className="container py-8 lg:py-12" >
			<div className="rounded-xl p-6 flex justify-between bg-gray-50" style={{zIndex: '999'}}>
				{stats.map((stat) => (
					<p
						key={stat.id}
						className="text-gradient-2 font-medium uppercase text-xl lg:text-2xl">
						{stat.title}
					</p>
				))}
			</div>
		</section>
	);
};

export default Stats;
