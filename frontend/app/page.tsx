"use client";

import Header from "@/app/components/header";
import MyselfImage from "@/public/luis-miguel.svg";
import Image from "next/image";
import { useEffect } from "react";
import Button from "./components/button";
import Card, { technologyCards, websiteCards } from "./components/card";
import { Video } from "./components/video";
export default function Home() {
  const consoleText = `
  ██╗     ██╗   ██╗██╗███████╗    ███╗   ███╗ █████╗  ██████╗██╗  ██╗██╗███████╗██╗    ██╗██╗ ██████╗███████╗
  ██║     ██║   ██║██║██╔════╝    ████╗ ████║██╔══██╗██╔════╝██║ ██╔╝██║██╔════╝██║    ██║██║██╔════╝╚══███╔╝
  ██║     ██║   ██║██║███████╗    ██╔████╔██║███████║██║     █████╔╝ ██║█████╗  ██║ █╗ ██║██║██║       ███╔╝
  ██║     ██║   ██║██║╚════██║    ██║╚██╔╝██║██╔══██║██║     ██╔═██╗ ██║██╔══╝  ██║███╗██║██║██║      ███╔╝
  ███████╗╚██████╔╝██║███████║    ██║ ╚═╝ ██║██║  ██║╚██████╗██║  ██╗██║███████╗╚███╔███╔╝██║╚██████╗███████╗
  ╚══════╝ ╚═════╝ ╚═╝╚══════╝    ╚═╝     ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚═╝╚══════╝ ╚══╝╚══╝ ╚═╝ ╚═════╝╚══════╝
  `;

  useEffect(() => {
    console.log(
      `%c${consoleText}`,
      `
      background: linear-gradient(90deg, #6cb500, #00aaff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `,
    );
  });

  return (
    <div>
      <Header />
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory">
        <section
          id="inicio"
          className="
    relative
    flex
    flex-col
    w-full
    h-screen
    items-center
    justify-center
    bg-linear-to-r from-gray-700 via-gray-900 to-black
    overflow-hidden
    snap-start
  "
        >
          <Video />

          <div
            className="
      absolute
      flex
      flex-col
      items-center
      text-center
      text-indigo-50
      max-w-3xl
      px-6
      space-y-8
    "
          >
            <div className="space-y-4">
              <h1
                className="
          text-xl
          md:text-4xl
          font-jet
          font-bold
          leading-tight
        "
              >
                Olá, eu me chamo Luis Miguel Mackiewicz
              </h1>

              <h2
                className="
          text-lg
          font-bold

          md:text-xl
          text-indigo-50/50
          tracking-wide
        "
              >
                Desenvolvedor de software
              </h2>
            </div>

            <div className="w-full">
              <Button>contato</Button>
            </div>
          </div>
        </section>

        <section
          id="sobre"
          className="w-full h-screen flex flex-col justify-center items-center text-indigo-50
              bg-linear-to-r from-gray-700 via-gray-900 to-black

          snap-start "
        >
          <h2 className="font-jet font-bold text-4xl md:text-5xl mb-12">
            Sobre
          </h2>

          <div className="w-4/5 grid grid-cols-1 md:grid-cols-2 items-center">
            <div>
              <Image
                src={MyselfImage}
                alt="Imagem de Luis Miguel tocando violão"
                width={500}
                className="rounded-4xl object-cover grayscale hover:grayscale-0 transition duration-500 cursor-target"
              />
            </div>

            <div className="text-xs space-y-3 text-indigo-50">
              <p>
                Meu nome é Luis Miguel Mackiewicz , desenvolvedor fullstack
                TypeScript, com experiência complementar em design e marketing
                digital.
              </p>

              <p>
                Iniciei minha jornada na tecnologia em 2024, ao ingressar no
                curso de Análise e Desenvolvimento de Sistemas, e no mesmo ano
                conquistei meu primeiro estágio, onde embarquei no
                desenvolvimento de software.
              </p>

              <p>
                Em 2025, atuei com marketing digital, trabalhando com ADS e
                criação de conteúdo para plataformas como Instagram, Facebook,
                Google e TikTok — experiência que hoje aplico para criar
                produtos que não apenas funcionam, mas convertem.
              </p>

              <p>
                Atualmente atuo como desenvolvedor freelancer , ajudando
                empresas e profissionais a irem além de apenas “ter um site”.
                Meu foco é construir páginas estratégicas, pensadas para atrair
                clientes, aumentar vendas e fortalecer marcas.
              </p>
            </div>
          </div>
        </section>
        <section
          id="portifolio"
          className="w-full h-screen flex flex-col gap-8 justify-center items-center bg-linear-to-r from-gray-700 via-gray-900 to-black
 snap-start"
        >
          <h2 className=" text-5xl font-bold text-indigo-50 font-jet">
            Portifólio
          </h2>
          <div className="grid grid-cols[repeat(auto-fit,minmax(200px,1fr))] gap-6 h-[30%] w-full max-w-[10%] mx-auto">
            {websiteCards}
          </div>
        </section>
        <section
          id="habilidades"
          className="w-full h-screen flex flex-col gap-8 justify-center items-center bg-linear-to-r from-gray-700 via-gray-900 to-black
 snap-start"
        >
          <h2 className=" font-jet font-black text-indigo-50 text-5xl">
            Habilidades
          </h2>
          <div className="grid grid-cols-5 auto-rows-fr gap-4 p-6 h-[70%] w-4/5 bg-gray-950 rounded-3xl border border-indigo-500/10 shadow-2xl">
            {technologyCards}
          </div>
        </section>
        <section
          id="contato"
          className="not-even:w-full h-screen flex flex-col items-center bg-linear-to-r from-gray-700 via-gray-900 to-black snap-start"
        >
          <div className="flex-1 flex flex-col gap-10 items-center justify-center px-6 text-center">
            <h2 className="text-indigo-50 text-6xl font-black font-jet">
              Vamos transformar sua ideia<br></br> em realidade!
            </h2>
            <Button>whatsapp</Button>
          </div>

          <footer className="relative z-10 mb-8 text-zinc-500 text-xs tracking-widest uppercase">
            © 2026 Luis Miguel Mackiewicz. All rights reserved.
          </footer>
        </section>
      </div>
    </div>
  );
}
