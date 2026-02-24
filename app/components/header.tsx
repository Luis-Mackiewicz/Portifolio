import Link from "next/link";

export default function Header() {
  return (
    <header
      className="
        fixed
        top-0
        z-50
        w-full
        bg-black/60
        backdrop-blur-md
        border-b
        border-white/10
      "
    >
      <nav className="mx-auto max-w-6xl px-6 py-3">
        <ul className="flex items-center justify-between text-sm font-medium text-white">
          <li className="opacity-90 hover:opacity-50 transition">
            <Link href="#inicio">início</Link>
          </li>

          <li className="opacity-90 hover:opacity-50 transition">
            <Link href="#sobre">sobre</Link>
          </li>

          <li className="opacity-90 hover:opacity-50 transition">
            <Link href="#portifolio">portifólio</Link>
          </li>

          <li className="opacity-90 hover:opacity-50 transition">
            <Link href="#contato">contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
