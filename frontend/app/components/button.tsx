import Image from "next/image";
import NoiseTexture from "@/public/noise-texture.jpg";

type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button
      className="
bg-linear-to-r from-indigo-900 via-indigo-400 to-indigo-900
    text-indigo-50
      border
      border-purple-500/30
     p-2
     w-1/3
     rounded-2xl
     font-jet
     font-semibold
    hover:scale-110
    transition-all
    duration-500
    lg:cursor-target
      "
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}
