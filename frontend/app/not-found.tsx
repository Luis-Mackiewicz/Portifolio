import Link from "next/link";

export default function Notfound() {
  return (
    <div className="w-full h-dvh flex flex-col items-center justify-center gap-16 bg-linear-to-r from-pink-500 via-red-500 to-yellow-500">
      <h2 className="font-jet font-black text-white sm:text-3xl">
        404: Página não encontrada
      </h2>

      <Link
        href="/"
        passHref
        className="mt-8 px-6 py-3 bg-black text-white font-bold rounded-xl shadow-lg hover:scale-105 transition-transform cursor-target"
      >
        Voltar
      </Link>
    </div>
  );
}
