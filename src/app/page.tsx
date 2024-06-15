"use client"

import { ContactButton } from "@/components/contact-button";
import { AboutMe } from "@/components/sections/about-me";
import { MobileAppFeaturedProjects } from "@/components/sections/apps";
import { FullstackFeaturedProjects } from "@/components/sections/fullstack";
import { GameDevelopmentFeaturedProjects } from "@/components/sections/games";
import { ThemeToggle } from "@/components/theme-toggle";
import { FlipWords } from "@/components/ui/flip-words";
import { Title } from "@/components/ui/title";
import Image from "next/image";
import Contact from "./contact/page";
import { ContactForm } from "@/components/contact-form";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="h-auto py-40 w-full dark:bg-black bg-white  dark:bg-grid-white/[0.06] bg-grid-black/[0.06] relative flex flex-col items-center justify-center">
      
      <motion.div
        className="flex items-center flex-col"
      >
        <motion.p animate={{
          y: 0,
          opacity: 1,
        }}
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 0.6, delay: 0 }} className="text-2xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 mb-2 md:py-4">
          {"<Hi, i'm Sérgio Banhos/>"}
        </motion.p>
        <motion.div animate={{
          y: 0,
          opacity: 1,
        }}
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{ duration: 0.6, delay: 0.6 }} className="text-2xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 md:py-4">
          <FlipWords words={["game", "fullstack", "mobile"]} /> developer
        </motion.div>
      </motion.div>

      <ContactButton/>

      <div className="px-6 w-full h-auto md:px-40">
        <FullstackFeaturedProjects/>
        <MobileAppFeaturedProjects/>
        <GameDevelopmentFeaturedProjects/>
        {/* <ContactForm/> */}
        <Contact/>
        {/* <AboutMe/> */}
      </div>

      <p className="absolute bottom-10">Made by sergipe085</p>
    </div>
  );
}
