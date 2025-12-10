import Link from "next/link";

export default function Header() {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-sm">
        <nav>
          <ul className="flex text-white gap-5 justify-center p-5 border-b border-white text-xs">
            <li>
              <Link href="/#inicio">inicio</Link>
            </li>
            <li>
              <Link href="/#portifolio">portifólio</Link>
            </li>
            <li>
              <Link href="/#sobre">sobre</Link>
            </li>
            <li>
              <Link href="/#contato">contato</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
