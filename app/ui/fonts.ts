import { IBM_Plex_Mono, Inter } from "next/font/google";

export const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const IBM = IBM_Plex_Mono({
  variable: "--font-ibm",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});
