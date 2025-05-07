import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function to merge Tailwind CSS classes while handling conflicts
 * Combines clsx for conditional classes and twMerge for proper Tailwind class merging
 * @param inputs - Array of class values (strings, objects, or arrays)
 * @returns Merged and deduped className string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
