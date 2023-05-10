import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const baseURL = process.env.VERCEL_URL
  ? `https://www.ouvrage.dev`
  : `http://localhost:${process.env.PORT ?? 3000}`;
