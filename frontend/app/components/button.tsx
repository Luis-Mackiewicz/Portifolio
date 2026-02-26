import Image from "next/image";
import NoiseTexture from "@/public/noise-texture.jpg";

type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button
      className="
bg-linear-to-r
 from-slate-900
  via-purple-900
   to-slate-900 
    text-white/80
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
    cursor-target
    cursor-pointer
      "
    >
      <span className="relative z-10">{children}</span>
    </button>
  );
}
