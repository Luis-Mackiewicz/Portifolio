import { Lobster_Two, Cinzel, Inter } from "next/font/google";

export const cinzel = Cinzel({
  variable: "--font-cinzel",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});
export const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const lobsterTwo = Lobster_Two({
  variable: "--font-lobster",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});
