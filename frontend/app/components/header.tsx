import Link from "next/link";

export default function Header() {
  return (
    <header
      className="
        fixed
        top-0
        z-50
        w-full
        bg-black/35
        backdrop-blur-md
        border-b
        border-white/10
      "
    >
      <nav className=" h-12 w-full flex justify-center">
        <ul className="w-full flex items-center justify-between gap-2 text-xs font-jet font-bold text-indigo-50 sm:w-4/5 md:text-base">
          <li className="opacity-80 hover:opacity-50 transition cursor-target">
            <Link href="#inicio">início</Link>
          </li>

          <li className="opacity-80 hover:opacity-50 transition cursor-target">
            <Link href="#sobre">sobre</Link>
          </li>

          <li className="opacity-80 hover:opacity-50 transition cursor-target">
            <Link href="#portifolio">portifólio</Link>
          </li>

          <li className="opacity-80 hover:opacity-50 transition cursor-target">
            <Link href="#habilidades">habilidades</Link>
          </li>

          <li className="opacity-80 hover:opacity-50 transition cursor-target">
            <Link href="#contato">contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
