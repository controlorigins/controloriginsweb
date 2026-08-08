import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// Extend Window interface for LinkedIn tracking
declare global {
  interface Window {
    lintrk?: (action: string, data: { conversion_id: string }) => void;
  }
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const trackLinkedInConversion = (conversionType: string) => {
  if (typeof window !== "undefined" && window.lintrk) {
    window.lintrk("track", { conversion_id: conversionType });
  }
};
