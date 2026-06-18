import Image from "next/image";
import Button from "@/components/whatsapp-button";

const socialLinks = [
  { href: "https://github.com/Luis-Mackiewicz", src: "/icons/github.svg", alt: "GitHub" },
  { href: "https://www.linkedin.com/in/luis-mackiewicz", src: "/icons/linkedin.svg", alt: "LinkedIn" },
  { href: "https://www.instagram.com/luismiguel.dev", src: "/icons/instagram.svg", alt: "Instagram" },
  { href: "https://wa.me/5544991384873", src: "/icons/whatsapp.svg", alt: "WhatsApp" },
];

export default function Contact() {
  return (
    <section
      id="contato"
      className="
        w-full h-dvh flex flex-col items-center
        bg-linear-to-r from-gray-700 via-gray-900 to-black scroll-mt-14
      "
    >
      <div className="flex-1 flex flex-col gap-18 items-center justify-center px-6 text-center md:w-11/12 h-4/5">
        <h2 className="text-indigo-50 text-xl font-black font-jet md:text-3xl">
          Vamos transformar sua ideia<br /> em realidade!
        </h2>
        <Button>whatsapp</Button>
      </div>

      <footer className="relative z-10 mb-8 flex flex-col items-center gap-4 text-zinc-500 text-xs tracking-widest uppercase">
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.alt}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.alt}
              className="opacity-60 hover:opacity-100 transition-opacity duration-300 cursor-target"
            >
              <Image
                src={link.src}
                alt={link.alt}
                width={24}
                height={24}
                className="object-contain"
              />
            </a>
          ))}
        </div>
        &copy; 2026 Luis Miguel Mackiewicz. All rights reserved.
      </footer>
    </section>
  );
}
