import type { Metadata } from "next";
import "@/app/globals.css";
import { cinzel, inter } from "@/app/ui/fonts";
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
      className={`${cinzel.variable} ${inter.variable}  antialiased`}
    >
      <body className="font-inter">{children}</body>
    </html>
  );
}
