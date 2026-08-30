import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines and merges Tailwind CSS class names without conflicting rules.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
