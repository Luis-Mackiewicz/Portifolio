import { Inter } from "next/font/google";
import localFont from "next/font/local";

export const inter = Inter({
  variable: "--font-inter",
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const barbra = localFont({
  src: [
    {
      path: "../../public/fonts/barbra/Barbra-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/barbra/Barbra-High.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-barbra",
  display: "swap",
});
