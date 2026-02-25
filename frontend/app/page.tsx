"use client";

import Header from "@/app/components/header";
import MyselfImage from "@/public/luis-miguel.svg";
import Image from "next/image";
import { useEffect } from "react";
import Button from "./components/button";
import Card, { technologyCards } from "./components/card/card";
import { listOfTechnologies } from "./components/card/card";

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
    w-full
    h-screen
    items-center
    justify-center
    bg-black
    overflow-hidden
    snap-start
  "
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            controls={false}
            disablePictureInPicture
            disableRemotePlayback
            className="
            
      h-[calc(100vh-8rem)]
      w-[90vw]
      max-w-none
      rounded-3xl
      object-cover
      pointer-events-none
      select-none
      opacity-60
    "
          >
            <source src="/coding-video.mp4" type="video/mp4" />
          </video>

          <div
            className="
      absolute
      flex
      flex-col
      items-center
      text-center
      text-white
      max-w-3xl
      px-6
      space-y-8
    "
          >
            <div className="space-y-4">
              <h1
                className="
          text-4xl
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
          md:text-xl
          text-zinc-300
          tracking-wide
        "
              >
                Desenvolvedor de software
              </h2>
            </div>

            <div className="pt-4">
              <Button>contato</Button>
            </div>
          </div>
        </section>

        <section
          id="sobre"
          className="w-full bg-black px-6 py-24 text-white snap-start "
        >
          <div className="mx-auto max-w-6xl">
            <h2 className="font-jet font-bold text-4xl md:text-5xl mb-12">
              Sobre
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-80 items-center">
              <div className="flex justify-center">
                <Image
                  src={MyselfImage}
                  alt="Luis Miguel tocando guitarra"
                  width={420}
                  sizes="(max-width: 768px) 100vw, 420px"
                  className="rounded-3xl object-cover grayscale hover:grayscale-0 transition duration-500"
                />
              </div>

              <div className="space-y-5 text-zinc-300 leading-relaxed ">
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
                  Meu foco é construir páginas estratégicas, pensadas para
                  atrair clientes, aumentar vendas e fortalecer marcas.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="portifolio"
          className="w-full h-screen flex justify-center items-center bg-black snap-start"
        >
          <h2 className=" text-8xl text-white font-jet">
            Nova sessão em breve!
          </h2>
        </section>
        <section
          id="habilidades"
          className="w-full h-screen flex flex-col gap-8 justify-center items-center bg-black snap-start"
        >
          <h2 className=" font-jet font-black text-white text-5xl">
            Habilidades
          </h2>
          <div className="grid grid-cols-5 auto-rows-fr gap-4 p-6 h-[70%] w-[85%] bg-neutral-900 rounded-3xl border border-white/10 shadow-2xl">
            {technologyCards}
          </div>
        </section>
        <section
          id="contato"
          className="not-even:w-full h-screen flex flex-col items-center bg-linear-to-t from-slate-950 to-lime-500 snap-start"
        >
          <div className="flex-1 flex flex-col gap-10 items-center justify-center px-6 text-center">
            <h2 className="text-white text-6xl font-black font-jet">
              Vamos transformar sua ideia em realidade!
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
