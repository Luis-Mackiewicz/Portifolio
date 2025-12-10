import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const cinzel = Cinzel({ subsets: ["latin"], variable: "--font-cinzel" });

export const metadata: Metadata = {
  title: "Luis Mackiewicz | Developer",
  description:
    "Portifólio de Luis Miguel Oliveira de Almeida Mackiewicz, Desenvolvedor de sistemas Full Stack Typescript. Criação de websites e sistemas.",
  authors: { name: "Luis Miguel Oliveira de Almeida Mackiewicz" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${cinzel.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
