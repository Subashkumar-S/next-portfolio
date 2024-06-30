import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Button } from "./ui/Button";
import { FaLocationArrow } from "react-icons/fa";

export function Hero() {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.03] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex flex-col justify-center p-4 max-w-7xl  m-auto relative z-10  w-full pt-20 md:pt-0">
        <p className="text-center pb-6">Dynamic Web Magic with Next.js</p>
        <TextGenerateEffect
          className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
          words="Transforming Concepts into Seamless User Experiences"
        />
        <p className="mt-4 text-xl md:text-2xl font-normal text-neutral-300 max-w-lg text-center mx-auto pt-8 ">
          Hi! I&apos;m Subash, a Next.js Developer based in India.
        </p>

        <a href="#projects" className="text-center my-4">
          <Button 
            title="Show my work"
            icon={<FaLocationArrow />}
            position="right"
           />
        </a>
      </div>
    </div>
  );
}

