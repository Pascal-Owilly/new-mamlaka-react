import { cn } from "../../utils"

export default function TargetIcon({ className }) {
	return (
		<svg
			className={cn('size-6 stroke-current stroke-[1.5]', className)}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<g
				fill="none"
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="M19 2v3h3m-8.6 5.6L22 2"></path>
				<circle cx={12} cy={12} r={2}></circle>
				<path d="M12.3 6H12a6 6 0 1 0 6 6v-.3"></path>
				<path d="M15 2.5A9.93 9.93 0 1 0 21.5 9M5.3 19.4L4 22m14.7-2.6L20 22"></path>
			</g>
		</svg>);
}

