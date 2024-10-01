import { cn } from "../../utils"

export default function ShieldIcon({ className }) {
	return (
		<svg
			className={cn('size-6 stroke-current stroke-[1.5]', className)}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path
				strokeLinecap="round"
				strokeLinejoin="round"
				d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
		</svg>);
}
