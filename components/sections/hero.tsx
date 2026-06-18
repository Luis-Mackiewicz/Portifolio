import { Video } from "@/components/video";
import Button from "@/components/whatsapp-button";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="
        relative flex flex-col w-full h-dvh items-center justify-center
        bg-linear-to-r from-gray-700 via-gray-900 to-black
        overflow-hidden scroll-mt-14
      "
    >
      <Video />
      <div className="absolute flex flex-col items-center text-center text-indigo-50 max-w-3xl px-6 space-y-8">
        <div className="space-y-4">
          <h1 className="text-xl md:text-4xl font-jet font-bold leading-tight">
            Olá, eu me chamo Luis Miguel Mackiewicz
          </h1>
          <h2 className="text-lg font-bold md:text-xl text-indigo-50/50 tracking-wide">
            Desenvolvedor de software
          </h2>
        </div>
        <Button>contato</Button>
      </div>
    </section>
  );
}
