import { TechnologyGrid } from "@/components/technology-card";

export default function Skills() {
  return (
    <section
      id="habilidades"
      className="
        w-full h-dvh flex flex-col gap-8 justify-center items-center
        bg-linear-to-r from-gray-700 via-gray-900 to-black scroll-mt-14
      "
    >
      <h2 className="font-jet font-black text-indigo-50 text-lg md:text-3xl">
        Habilidades
      </h2>
      <div
        className="
          grid grid-cols-2 gap-2 p-3
          bg-gray-950 rounded-3xl border border-indigo-500/10 shadow-2xl
          w-full max-h-[calc(100dvh-12rem)] overflow-y-auto
          sm:grid-cols-3 sm:p-4 sm:gap-3
          md:grid-cols-4 md:h-3/4 md:w-4/5
          lg:grid-cols-5
        "
      >
        <TechnologyGrid />
      </div>
    </section>
  );
}
