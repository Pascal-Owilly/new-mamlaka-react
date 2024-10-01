import { cn } from "../../utils"

export default function ShieldIcon({ className }) {
	return (
		<svg
			className={cn('size-6 stroke-current stroke-[1.5]', className)}
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
		</svg>);
}
