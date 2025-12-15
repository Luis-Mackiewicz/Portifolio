import Header from "./components/header";
import Image from "next/image";
import CircleBackground from "@/public/circle-background.svg";
import LuisIlustration from "@/public/luis-ilustration.svg";

export default function Home() {
  return (
    <main>
      <Header />
      <section
        id="inicio"
        className="  flex flex-col w-full h-screen mt-36 items-center border-b border-white"
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
      ></section>
      <section id="sobre" className="w-full h-screen "></section>
      <section id="contato" className="w-full h-screen bg-terciary"></section>
    </main>
  );
}
