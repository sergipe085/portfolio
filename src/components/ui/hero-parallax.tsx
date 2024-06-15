"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { Title } from "./title";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-600, 150]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="dark:bg-grid-white/[0.05] bg-grid-black/[0.05] h-auto py-40 overflow-hidden  antialiased relative flex flex-col justify-center self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
        <Header />
        <motion.div
            style={{
                rotateX,
                rotateZ,
                translateY,
                opacity,
            }}
            className="max-w-7xl mx-auto px-4 w-full"
        >
            
            <Title>projects</Title>
            <motion.div className=" mt-16 flex flex-row-reverse space-x-reverse space-x-6 md:space-x-20 mb-20">
            {firstRow.map((product) => (
                <ProductCard
                product={product}
                translate={translateX}
                key={product.title}
                />
            ))}
            </motion.div>
            <motion.div className="flex flex-row  mb-20 space-x-6 md:space-x-20 ">
            {secondRow.map((product) => (
                <ProductCard
                product={product}
                translate={translateXReverse}
                key={product.title}
                />
            ))}
            </motion.div>
            {/* <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
            {thirdRow.map((product) => (
                <ProductCard
                product={product}
                translate={translateX}
                key={product.title}
                />
            ))}
            </motion.div> */}
        </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0 z-50">
        <h1 className="text-xl md:text-2xl font-normal dark:text-white">
            Fullstack Developer
        </h1>
        <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
            Hi, im <br /> Sérgio Banhos
        </h1>
        <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200 mb-4">
            I build beautiful websites and applications with the latest technologies and frameworks for you.
        </p>
        <Button>Contact me</Button>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product aspect-video h-32 md:h-72 relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover  rounded-2xl object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
