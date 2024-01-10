import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function convertToSlug(inputString) {
  if(inputString){
    return inputString
    .toLowerCase() // Convert to lowercase
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/[^\w-]+/g, '') // Remove non-word characters (excluding hyphens)
    .replace(/--+/g, '-'); // Replace multiple hyphens with a single hyphen
  }
 
}
