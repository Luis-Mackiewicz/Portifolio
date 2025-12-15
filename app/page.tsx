import Header from "./components/header";
import Image from "next/image";
import CircleBackground from "@/public/circle-background.svg";
import LuisIlustration from "@/public/luis-ilustration.svg";
import LuisImage from "@/public/luis-miguel.svg";
import WhatsappIcon from "@/public/icons/whatsap.svg";
import Button from "./components/button";

export default function Home() {
  return (
    <main>
      <Header />
      <section
        id="inicio"
        className="flex flex-col w-full h-screen mt-36 items-center border-b border-white"
      >
        <div className="w-full flex items-center justify-between">
          <div className="w-1/2 flex flex-col items-center">
            <h1 className="text-6xl font-bold font-cinzel bg-linear-to-r from-primary to-sky-200 bg-clip-text text-transparent">
              Luis Miguel Mackiewicz
            </h1>

            <h2 className=" text-4xl font-bold">Desenvolvedor fulllstack</h2>

            <p className="realtive translate-y-10">
              Conquiste mais clientes com um site focado em
              <br />
              conversões e destaque sua marca com uma
              <br /> identidade visual poderosa
            </p>

            <Button active className="mt-20">
              Chame
              <Image
                src={WhatsappIcon}
                width={36}
                height={36}
                alt="Whatsapp icon"
              ></Image>
            </Button>
          </div>

          <div className="relative w-1/2 flex items-center justify-center">
            <Image
              src={CircleBackground}
              alt="Espiral"
              width={600}
              height={600}
              className="relative z-0"
            />
            <Image
              src={LuisIlustration}
              alt="Luis Miguel Mackiewicz ilustration"
              width={500}
              height={500}
              className="absolute z-1"
            />
          </div>
        </div>
      </section>
      <section
        id="portifolio"
        className="w-full h-screen border-b border-white"
      >
        <h2>Portifólio</h2>
        <p>Em breve!</p>
      </section>
      <section id="sobre" className="w-full h-screen flex items-center">
        <div className="flex flex-col justify-between">
          <h2 className="font-cinzel font-bold text-6xl">Sobre</h2>
          <Image
            src={LuisImage}
            alt="Luis Miguel playing guitar"
            width={500}
            height={500}
            className="border-4"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <p>
            Olá, eu sou o Luis Miguel Oliveira de Almeida Mackiewicz.
            Desenvolvedor fullstack TypeScript, com experiência complementar em
            design e marketing digital. Minha jornada na tecnologia começou em
            2024, quando ingressei no curso de Análise e Desenvolvimento de
            Sistemas. No mesmo ano, conquistei meu primeiro estágio na área,
            onde mergulhei de vez no desenvolvimento de software. Em 2025, atuei
            com marketing digital, trabalhando com ADS e criação de conteúdo
            para plataformas como Instagram, Facebook, Google e TikTok —
            experiência que hoje utilizo para criar soluções que não só
            funcionam, mas que também geram resultado. Atualmente atuo como
            desenvolvedor freelancer, ajudando empresas e profissionais a irem
            além de apenas “ter um site”. Meu foco é construir páginas
            estratégicas, pensadas para atrair clientes, aumentar vendas e
            fortalecer a identidade visual da sua marca. Se você busca alguém
            que una tecnologia, design e estratégia comercial, estou pronto para
            transformar sua ideia em um projeto de impacto.
          </p>
          <div className="flex">
            <Button active className="mt-20">
              Linkedin
            </Button>
            <Button active className="mt-20">
              Chame
              <Image
                src={WhatsappIcon}
                width={36}
                height={36}
                alt="Whatsapp icon"
              ></Image>
            </Button>
          </div>
        </div>
      </section>
      <section
        id="contato"
        className="w-full h-screen flex flex-col items-center justify-center bg-secundary"
      >
        <h2 className="font-cinzel font-bold text-6xl">
          Vamos transformar sua idéia em realidade!
        </h2>
        <h3>
          Desde o conceito até o resultado final, meu foco é impulsionar o seu
          negócio
        </h3>
        <Button active>Entrar em contato</Button>
      </section>
    </main>
  );
}
