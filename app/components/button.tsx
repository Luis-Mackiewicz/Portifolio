import Image from "next/image";
import NoiseTexture from "@/public/noise-texture.jpg";

type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button
      className="
        relative
        overflow-hidden
        rounded-4xl
        px-96
        py-3
        cursor-pointer
        text-black
        font-black

        transform 
        transition-all
        duration-300
        ease-out
        hover:scale-105
      "
    >
      <Image
        src={NoiseTexture}
        alt=""
        fill
        className="object-cover pointer-events-none"
        priority={false}
      />

      {/* Conteúdo do botão */}
      <span className="relative z-10">{children}</span>
    </button>
  );
}
