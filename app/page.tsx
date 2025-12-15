import Header from "./components/header";
import Image from "next/image";
export default function Home() {
  return (
    <main>
      <section id="inicio">
        <h1 className="text-6xl font-bold font-cinzel bg-linear-to-l from-(--degrade) to-(--terciary) bg-clip-text text-transparent">
          Luis Miguel Mackiewicz
        </h1>
        <p>
          Conquiste mais clientes com um site focado em conversões e destaque
          sua marca com uma identidade visual poderosa
        </p>
      </section>
      <section id="portifolio"></section>
      <section id="sobre"></section>
      <section id="contato"></section>
    </main>
  );
}
