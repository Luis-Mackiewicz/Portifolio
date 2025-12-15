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
            <p className="realtive translate-y-20">
              Conquiste mais clientes com um site focado em
              <br />
              conversões e destaque sua marca com uma
              <br /> identidade visual poderosa
            </p>
          </div>

          <div className="w-1/2 flex justify-center">
            <Image
              src={CircleBackground}
              alt="Espiral"
              width={500}
              height={500}
            />
            {/* <Image /> */}
          </div>
        </div>
      </section>
      <section
        id="portifolio"
        className="w-full h-screen border-b border-white"
      ></section>
      <section
        id="sobre"
        className="w-full h-screen border-b border-white"
      ></section>
      <section id="contato" className="w-full h-screen bg-terciary"></section>
    </main>
  );
}
