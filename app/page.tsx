import Header from "./components/header";
import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-black w-full h-screen">
      <Header />
      <main className=" flex flex-col items-center text-white w-full h-max pt-9">
        <div className="bg-linear-to-r from-(--primary) to-(--terciary) bg-clip-text text-transparent">
          <h1 className="font-serif text-lg">
            Luis Miguel Oliveira de Almeida Mackiewicz
          </h1>
        </div>
        <h2 className="font-sans text-base">Desenvolvedor Fullstack</h2>
        <Image
          src="/public/luis-ilustracao.avif"
          alt="my image"
          width={500}
          height={500}
        />
      </main>
    </div>
  );
}
