import Header from "@/components/header";
import { ConsoleArt } from "@/components/console-art";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Portfolio from "@/components/sections/portfolio";
import Skills from "@/components/sections/skills";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <ConsoleArt />
      <div>
        <Header />
        <div className="h-dvh overflow-y-scroll">
          <Hero />
          <About />
          <Portfolio />
          <Skills />
          <Contact />
        </div>
      </div>
    </>
  );
}
