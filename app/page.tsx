import Header from "@/app/components/header";

export default function Home() {
  return (
    <>
      <Header />

      <section className="relative flex w-full items-center justify-center bg-black overflow-hidden pt-24 h-screen">
        {/* Vídeo */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          controls={false}
          disablePictureInPicture
          disableRemotePlayback
          className="
            h-[calc(100vh-8rem)]
            w-[90vw]
            max-w-none
            rounded-3xl
            object-cover
            pointer-events-none
            select-none
            opacity-90
          "
        >
          <source src="/coding-video.mp4" type="video/mp4" />
        </video>

        <div className="absolute flex flex-col items-center gap-3 text-center text-white">
          <div className="flex gap-2">
            <h1 className="text-4xl font-bold tracking-tight">Olá, eu sou</h1>
            <p className="text-4xl font-bold tracking-tight bg-linear-to-r from-sky-500 to-emerald-400 bg-clip-text text-transparent">
              Luis Miguel Mackiewicz
            </p>
          </div>
          <h2 className="text-xl font-medium text-zinc-300">
            Desenvolvedor Fullstack TypeScript
          </h2>
        </div>
      </section>
    </>
  );
}
