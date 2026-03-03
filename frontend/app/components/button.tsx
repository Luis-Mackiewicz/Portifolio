import Image from "next/image";
import NoiseTexture from "@/public/noise-texture.jpg";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

const phone = "5544991384873";
const message = "Olá! Vim pelo site e gostaria de saber mais informações.";

const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

export default function Button({ children, className }: ButtonProps) {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      aria-label="abrir conversa no whatsapp"
      role="button"
      className={`
      bg-linear-to-r
     from-indigo-900
     via-indigo-400
     to-indigo-900
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
      cursor-target
      cursor-pointer
    ${className}
        `}
    >
      <span className="relative z-10">{children}</span>
    </a>
  );
}
