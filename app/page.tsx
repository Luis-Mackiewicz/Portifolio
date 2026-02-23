import Header from "@/app/components/header";
import MyselfImage from "@/public/luis-miguel.svg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />

      <section
        id="inicio"
        className="relative flex w-full items-center justify-center bg-black overflow-hidden pt-24 h-screen"
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
            opacity-90
          "
        >
          <source src="/coding-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute flex flex-col items-center  text-center text-white">
          <h1 className="text-6xl font-barbra font-bold">
            Olá, eu sou Luis Miguel Mackiewicz
          </h1>
          <h2 className="text-xl  text-zinc-300">Desenvolvedor de software</h2>
        </div>
      </section>

      <section id="sobre" className="w-full bg-black px-6 py-24 text-white">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-barbra text-4xl md:text-5xl mb-12">Sobre</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-80 items-center">
            <div className="flex justify-center">
              <Image
                src={MyselfImage}
                alt="Luis Miguel tocando guitarra"
                width={420}
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
                Meu foco é construir páginas estratégicas, pensadas para atrair
                clientes, aumentar vendas e fortalecer marcas.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
