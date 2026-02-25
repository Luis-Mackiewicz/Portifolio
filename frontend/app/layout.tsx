import type { Metadata } from "next";
import "@/app/globals.css";
import { inter, jetBrains } from "@/app/ui/fonts";
import TargetCursor from "./components/TargetCursor";
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
      className={` ${inter.variable} ${jetBrains.variable} antialiased`}
    >
      <body className="font-inter" cz-shortcut-listen="true">
        <TargetCursor
          spinDuration={5}
          hideDefaultCursor
          parallaxOn
          hoverDuration={4}
        />
        {children}
      </body>
    </html>
  );
}
