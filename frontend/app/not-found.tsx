import Link from "next/link";
import Dither from "@/app/components/Dither";

export default function Notfound() {
  return (
    <div className="w-full h-screen relative">
      <Dither
        waveColor={[0.5, 0.5, 0.5]}
        disableAnimation={false}
        enableMouseInteraction
        mouseRadius={0.3}
        colorNum={4}
        waveAmplitude={0.3}
        waveFrequency={3}
        waveSpeed={0.05}
      />

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 10,
          textAlign: "center",
        }}
      >
        <div className="flex flex-col gap-8">
          <h2 className="bg-linear-to-br from-red-400 to-red-700 bg-clip-text text-transparent text-8xl font-jet font-bold">
            404: Not found
          </h2>

          <Link
            href="/"
            passHref
            className="mt-8 px-6 py-3 bg-black text-white border border-white font-bold rounded-xl shadow-lg hover:scale-105 transition-transform"
          >
            Voltar
          </Link>
        </div>
      </div>
    </div>
  );
}
