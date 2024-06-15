import { ContactButton } from "@/components/contact-button";
import { AboutMe } from "@/components/sections/about-me";
import { MobileAppFeaturedProjects } from "@/components/sections/apps";
import { FullstackFeaturedProjects } from "@/components/sections/fullstack";
import { GameDevelopmentFeaturedProjects } from "@/components/sections/games";
import { ThemeToggle } from "@/components/theme-toggle";
import { FlipWords } from "@/components/ui/flip-words";
import { Title } from "@/components/ui/title";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-auto py-40 w-full dark:bg-black bg-white  dark:bg-grid-white/[0.06] bg-grid-black/[0.06] relative flex flex-col items-center justify-center">
      
      {/* Radial gradient for the container to give a faded look */}
      {/* <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div> */}
      <p className="text-2xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 mb-2 md:py-4">
        {"<Hi, i'm Sérgio Banhos/>"}
      </p>

      <div className="text-2xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 md:py-4">
        <FlipWords words={["game", "fullstack", "mobile"]} /> developer
      </div>

      <ContactButton/>

      <div className="px-6 w-full md:px-40">
        <FullstackFeaturedProjects/>
        <MobileAppFeaturedProjects/>
        <GameDevelopmentFeaturedProjects/>
        {/* <AboutMe/> */}
      </div>

    </div>
  );
}
