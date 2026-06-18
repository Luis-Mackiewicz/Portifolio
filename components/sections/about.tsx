import MyselfImage from "@/public/images/luis-miguel.svg";
import Image from "next/image";

export default function About() {
  return (
    <section
      id="sobre"
      className="
        w-full min-h-dvh flex justify-center items-center text-indigo-50
        bg-linear-to-r from-gray-700 via-gray-900 to-black scroll-mt-14
      "
    >
      <div className="grid grid-cols-1 gap-y-6 gap-x-12 w-full px-6 pt-16 pb-10 md:w-4/5 lg:grid-cols-2">
        <div className="flex flex-col items-center justify-center lg:col-span-2">
          <h2 className="font-jet font-bold text-lg md:text-3xl">Sobre</h2>
        </div>

        <div className="flex items-center justify-center relative">
          <div className="absolute -inset-4 bg-indigo-500/10 rounded-4xl blur-2xl" />
          <Image
            src={MyselfImage}
            alt="Imagem de Luis Miguel tocando violão"
            className="
              relative w-3/5 rounded-4xl object-cover grayscale hover:grayscale-0
              transition-all duration-500 ring-2 ring-indigo-500/20
              shadow-2xl shadow-indigo-500/10 sm:w-2/5 lg:w-72
            "
          />
        </div>

        <div className="flex flex-col justify-center text-sm space-y-4 md:text-lg">
          <p>
            Meu nome é Luis Miguel Mackiewicz, desenvolvedor{" "}
            <span className="text-indigo-400 font-semibold">fullstack TypeScript</span>,
            com experiência complementar em design e marketing digital.
          </p>
          <p>
            Iniciei minha jornada na tecnologia em 2024, ao ingressar no
            curso de{" "}
            <span className="text-indigo-400 font-semibold">Análise e Desenvolvimento de Sistemas</span>,
            e no mesmo ano conquistei meu primeiro estágio, onde embarquei
            no desenvolvimento de software.
          </p>
          <p>
            Em 2025, atuei com marketing digital, trabalhando com ADS e
            criação de conteúdo para plataformas como Instagram, Facebook,
            Google e TikTok — experiência que hoje aplico para criar
            produtos que não apenas funcionam, mas convertem.
          </p>
          <p>
            Atualmente atuo como desenvolvedor{" "}
            <span className="text-indigo-400 font-semibold">freelancer</span>,
            ajudando empresas e profissionais a irem além de apenas &ldquo;ter um
            site&rdquo;. Meu foco é construir páginas estratégicas, pensadas para
            atrair clientes, aumentar vendas e fortalecer marcas.
          </p>
        </div>
      </div>
    </section>
  );
}
