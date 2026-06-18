import type { Metadata } from "next";
import "@/app/globals.css";
import { inter, jetBrains } from "@/app/ui/fonts";
import TargetCursor from "@/components/target-cursor";

const siteUrl = "https://luis-mackiewicz.com.br";

export const metadata: Metadata = {
  title: "Luis Mackiewicz | Desenvolvedor Full Stack TypeScript",
  description:
    "Portfólio de Luis Miguel Mackiewicz, desenvolvedor full stack TypeScript. Criação de websites estratégicos, sistemas web e experiências digitais que convertem.",
  authors: { name: "Luis Miguel Oliveira de Almeida Mackiewicz" },
  keywords: [
    "desenvolvedor full stack",
    "typescript",
    "portfólio",
    "criação de sites",
    "desenvolvimento web",
    "next.js",
    "react",
    "luis mackiewicz",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: "Luis Mackiewicz | Desenvolvedor Full Stack TypeScript",
    description:
      "Portfólio de Luis Miguel Mackiewicz, desenvolvedor full stack TypeScript. Criação de websites estratégicos e sistemas web.",
    url: siteUrl,
    siteName: "Luis Mackiewicz",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Luis Mackiewicz | Desenvolvedor Full Stack TypeScript",
    description:
      "Portfólio de Luis Miguel Mackiewicz, desenvolvedor full stack TypeScript.",
  },
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
      data-cursor="none"
    >
      <body className="font-inter" cz-shortcut-listen="true">
        <TargetCursor />
        {children}
      </body>
    </html>
  );
}
