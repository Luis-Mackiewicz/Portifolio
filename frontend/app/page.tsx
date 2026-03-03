"use client";

import Header from "@/app/components/header";
import MyselfImage from "@/public/luis-miguel.svg";
import Image from "next/image";
import { useEffect } from "react";
import Button from "./components/button";
import { technologyCards, websiteCards } from "./components/card";
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
      `%${consoleText}`,
      `

      
    `,
    );
  });

  return (
    <div>
      <Header />
      <div
        className="
      h-dvh 
      overflow-y-scroll 
      snap-y 
      snap-mandatory"
      >
        <section
          id="inicio"
          className="
    relative
    flex
    flex-col
    w-full
    h-dvh
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
          className="w-full 
          h-dvh 
          flex 
          justify-center 
          items-center
         text-indigo-50
          bg-linear-to-r
         from-gray-700
         via-gray-900
         to-black
          snap-start"
        >
          <div
            className="
          grid 
          grid-cols-1 
          gap-y-16
          md:w-4/5 
          lg:grid-cols-2"
          >
            <div
              className="
            flex 
            items-center 
            justify-center 
            lg:col-span-2"
            >
              <h2
                className="
              font-jet 
              font-bold 
              text-lg 
              md:text-3xl"
              >
                Sobre
              </h2>
            </div>

            <div
              className="
            flex 
            items-center 
            justify-center"
            >
              <Image
                src={MyselfImage}
                alt="Imagem de Luis Miguel tocando violão"
                className="
                w-1/2 
                rounded-4xl 
                object-cover 
                grayscale 
                hover:grayscale-0 
                transition 
                duration-500 
                md:w-2xs 
                lg:w-96
                cursor-target
                "
              />
            </div>
            <div
              className="
            flex 
            flex-col 
            items-center 
            justify-center 
            text-base 
            pl-4 
            pr-4 
            space-y-2 
            md:text-lg 
            md:pl-0 
            md:pr-0"
            >
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
          className="
          w-full
          h-dvh
          flex
          flex-col
          gap-8 
          justify-center 
          items-center 
          bg-linear-to-r
         from-gray-700
         via-gray-900
         to-black
          snap-start"
        >
          <div className="h-full w-full flex flex-col gap-y-16 justify-center items-center md:h-11/12 md:w-4/5">
            <div className="w-full flex items-center justify-center">
              <h2
                className="
           text-indigo-50 
           font-jet font-bold 
           text-lg

           md:text-3xl"
              >
                Portifólio
              </h2>
            </div>

            <div
              className="
              flex
              flex-col
              items-center
              justify-center
              w-4/5

          "
            >
              {websiteCards}
            </div>
          </div>
        </section>
        <section
          id="habilidades"
          className="
          w-full 
          h-dvh 
          flex 
          flex-col 
          gap-8 
          justify-center 
          items-center 
          bg-linear-to-r
         from-gray-700
         via-gray-900
         to-black
          snap-start"
        >
          <h2
            className="
          font-jet 
          font-black
           text-indigo-50 
           text-lg
           md:text-3xl
           "
          >
            Habilidades
          </h2>
          <div
            className="
          grid 
          grid-cols-2
          gap-4
          p-8
          auto-rows-fr 
          w-4/5 
          bg-gray-950 
          rounded-3xl 
          border
           border-indigo-500/10 
           shadow-2xl
           md:grid-cols-3
           lg:grid-cols-5
           min-h-3/4
           "
          >
            {technologyCards}
          </div>
        </section>
        <section
          id="contato"
          className="
          not-even:w-full 
          h-dvh 
          flex 
          flex-col 
          items-center 
          bg-linear-to-r
           from-gray-700 
           via-gray-900
            to-black 
            snap-start"
        >
          <div
            className="
          flex-1 
          flex 
          flex-col 
          gap-18 
          items-center 
          justify-center 
          px-6 
          text-center
          md:w-11/12
          h-4/5
          "
          >
            <h2
              className="
            text-indigo-50 
            text-xl 
            font-black 
            font-jet
            md:text-3xl
            "
            >
              Vamos transformar sua ideia<br></br> em realidade!
            </h2>
            <Button className="w-">whatsapp</Button>
          </div>

          <footer
            className="
          relative 
          z-10 
          mb-8 
          text-zinc-500 
          text-xs 
          tracking-widest 
          uppercase"
          >
            © 2026 Luis Miguel Mackiewicz. All rights reserved.
          </footer>
        </section>
      </div>
    </div>
  );
}
