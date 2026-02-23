import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed w-full z-10 bg-black">
      <div className="flex justify-center border-b-4 pt-2.5 pb-2.5">
        <p className="font-bold text-[1rem] bg-linear-to-r from-sky-600 to-emerald-300 bg-clip-text text-transparent">
          Luis Miguel mackiewicz
        </p>
      </div>
      <nav className="border-white border-t-2 border-b-2 pt-2.5 pb-2.5">
        <ul className="flex justify-around font-bold text-white ">
          <li className=" hover:opacity-50">
            <Link href="#inicio">início</Link>
          </li>
          <li className=" hover:opacity-50">
            <Link href="#sobre">sobre</Link>
          </li>
          <li className=" hover:opacity-50">
            <Link href="#portifolio">portifólio</Link>
          </li>
          <li className=" hover:opacity-50">
            <Link href="#contato">contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
