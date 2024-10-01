import { twMerge } from 'tailwind-merge'

/**
 * Combine tailwind classes
 *
 * @param {ClassValue} inputs
 */
export function cn(...inputs) {
	return twMerge(inputs)
}
