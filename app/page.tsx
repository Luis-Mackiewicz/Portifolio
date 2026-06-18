import Header from "@/components/header";
import MyselfImage from "@/public/luis-miguel.svg";
import Image from "next/image";
import Button from "../components/button";
import { TechnologyGrid, WebsiteGrid } from "../components/card";
import { Video } from "../components/video";
import { ConsoleArt } from "../components/console-art";

const socialLinks = [
  {
    href: "https://github.com/luis-miguel-mackiewicz",
    src: "/icons/github.svg",
    alt: "GitHub",
  },
  {
    href: "https://linkedin.com/in/luis-miguel-mackiewicz",
    src: "/icons/linkedin.svg",
    alt: "LinkedIn",
  },
  {
    href: "https://instagram.com/luis.dev_",
    src: "/icons/instagram.svg",
    alt: "Instagram",
  },
  {
    href: "https://wa.me/5544991384873",
    src: "/icons/whatsapp.svg",
    alt: "WhatsApp",
  },
];
export default function Home() {
  return (
    <>
      <ConsoleArt />
    <div>
      <Header />
      <div
        className="
      h-dvh
      overflow-y-scroll"
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
    scroll-mt-14
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

            <Button>contato</Button>
          </div>
        </section>

        <section
          id="sobre"
          className="w-full
          min-h-dvh
          flex
          justify-center
          items-center
          text-indigo-50
          bg-linear-to-r
          from-gray-700
          via-gray-900
          to-black
          scroll-mt-14"
        >
          <div
            className="
          grid
          grid-cols-1
          gap-y-6
          gap-x-12
          w-full
          px-6
          pt-16
          pb-10
          md:w-4/5
          lg:grid-cols-2
          "
        >
          <div
            className="
          flex
          flex-col
          items-center
          justify-center
          lg:col-span-2"
          >
            <h2
              className="
            font-jet
            font-bold
            text-lg
            md:text-3xl
            "
            >
              Sobre
            </h2>
           
          </div>

            <div
              className="
            flex
            items-center
            justify-center
            relative"
            >
              <div className="absolute -inset-4 bg-indigo-500/10 rounded-4xl blur-2xl" />
              <Image
                src={MyselfImage}
                alt="Imagem de Luis Miguel tocando violão"
                className="
                relative
                w-3/5
                rounded-4xl
                object-cover
                grayscale
                hover:grayscale-0
                transition-all
                duration-500
                ring-2 ring-indigo-500/20
                shadow-2xl shadow-indigo-500/10
                sm:w-2/5
                lg:w-72
                "
              />
            </div>
            <div
              className="
            flex
            flex-col
            justify-center
            text-sm
            space-y-4
            md:text-lg
            "
            >
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
                ajudando empresas e profissionais a irem além de apenas "ter um
                site". Meu foco é construir páginas estratégicas, pensadas para
                atrair clientes, aumentar vendas e fortalecer marcas.
              </p>
            </div>
          </div>
        </section>
        <section
          id="portfolio"
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
          scroll-mt-14"
        >
          <div className="flex-1 w-full flex flex-col gap-8 justify-center items-center px-6">
            <div className="w-full flex items-center justify-center">
              <h2
                className="
           text-indigo-50
           font-jet font-bold
           text-lg
           md:text-3xl"
              >
                Portfólio
              </h2>
            </div>

            <div className="w-full max-w-sm">
              <WebsiteGrid />
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
          scroll-mt-14"
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
          gap-2
          p-3
          bg-gray-950
          rounded-3xl
          border
           border-indigo-500/10
           shadow-2xl
           w-full
           max-h-[calc(100dvh-12rem)]
           overflow-y-auto
           sm:grid-cols-3
           sm:p-4
           sm:gap-3
           md:grid-cols-4
           lg:grid-cols-5
           md:h-3/4
           md:w-4/5
           "
          >
            <TechnologyGrid />
          </div>
        </section>
        <section
          id="contato"
          className="
          w-full 
          h-dvh 
          flex 
          flex-col 
          items-center 
          bg-linear-to-r
           from-gray-700 
           via-gray-900
            to-black 
            scroll-mt-14"
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
            <Button>whatsapp</Button>
          </div>

          <footer
            className="
          relative
          z-10
          mb-8
          flex
          flex-col
          items-center
          gap-4
          text-zinc-500
          text-xs
          tracking-widest
          uppercase"
          >
            <div className="flex items-center gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.alt}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.alt}
                  className="opacity-60 hover:opacity-100 transition-opacity duration-300"
                >
                  <Image
                    src={link.src}
                    alt={link.alt}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </a>
              ))}
            </div>
            © 2026 Luis Miguel Mackiewicz. All rights reserved.
          </footer>
        </section>
      </div>
    </div>
    </>
  );
}
