import Header from "./components/header";
import Image from "next/image";
export default function Home() {
  return (
    <main>
      <Header />
      <section id="inicio" className="w-full h-screen mt-40">
        <h1 className="text-6xl font-bold font-cinzel bg-linear-to-l from-(--degrade) to-(--terciary) bg-clip-text text-transparent">
          Luis Miguel Mackiewicz
        </h1>
        <h2>Desenvolvedor fulllstack</h2>
        <p>
          Conquiste mais clientes com um site focado em conversões e destaque
          sua marca com uma identidade visual poderosa
        </p>
      </section>
      <section id="portifolio" className="w-full h-screen"></section>
      <section id="sobre" className="w-full h-screen"></section>
      <section id="contato" className="w-full h-screen"></section>
    </main>
  );
}
