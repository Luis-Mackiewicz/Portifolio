import { WebsiteGrid } from "@/components/portfolio-card";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="
        w-full h-dvh flex flex-col gap-8 justify-center items-center
        bg-linear-to-r from-gray-700 via-gray-900 to-black scroll-mt-14
      "
    >
      <div className="flex-1 w-full flex flex-col gap-8 justify-center items-center px-6">
        <div className="w-full flex items-center justify-center">
          <h2 className="text-indigo-50 font-jet font-bold text-lg md:text-3xl">
            Portfólio
          </h2>
        </div>
        <div className="w-full max-w-3xl grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          <WebsiteGrid />
        </div>
      </div>
    </section>
  );
}
