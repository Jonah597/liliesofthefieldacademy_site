/**
 * FILE: utils.ts
 *
 * PURPOSE:
 * Provides a shared utility function for combining and merging CSS class names.
 *
 * RESPONSIBILITIES:
 * - Accepts any number of class name inputs (strings, arrays, objects, or undefined values)
 * - Combines them into a single string using `clsx`
 * - Merges Tailwind CSS classes intelligently using `tailwind-merge` so that
 *   conflicting utility classes are resolved instead of both being applied
 *
 * USED BY:
 * Nearly every component in the project. Any component that conditionally applies
 * CSS classes or accepts a `className` prop will typically use this function.
 *
 * EXAMPLE:
 * cn("px-4 py-2", isActive && "bg-blue-500", undefined)
 * → "px-4 py-2 bg-blue-500"
 *
 * cn("text-sm text-lg")   // without cn, both would apply
 * → "text-lg"             // with tailwind-merge, the later class wins
 */

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple CSS class name inputs into a single, de-duplicated string.
 *
 * This function is the project's standard way to build dynamic class names.
 * It uses `clsx` to handle conditional logic and falsy values gracefully,
 * then passes the result through `tailwind-merge` to resolve any conflicting
 * Tailwind utility classes (e.g., removing "px-2" when "px-4" is also present).
 *
 * @param inputs - Any number of class name values. These can be:
 *                 - Strings: "font-bold text-white"
 *                 - Conditional objects: { "bg-blue-500": isActive }
 *                 - Arrays of any of the above
 *                 - undefined or null (safely ignored)
 *
 * @returns A single string of merged, conflict-resolved class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
