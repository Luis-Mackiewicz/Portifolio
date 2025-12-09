import Link from "next/link";

export default function Header() {
  return (
    <>
      <header>
        <nav>
          <ul className=" flex text-white gap-5 justify-center">
            <li>
              <Link href="/">inicio</Link>
            </li>
            <li>
              <Link href="/">portifólio</Link>
            </li>
            <li>
              <Link href="/">sobre</Link>
            </li>
            <li>
              <Link href="/">contato</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
