"use client";
import React from "react";
import Image from "next/image";
import { ContainerScroll } from "./ui/container-scroll-animation";
import { Button } from "./ui/button";
import Banner from "../../public/assets/track.webp";

export function HeroSection() {
  return (
    <div className="flex flex-col overflow-hidden ">
      <ContainerScroll
        titleComponent={
          <div className="flex justify-center flex-col items-center gap-6">
            <h1 className="text-8xl font-semibold text-black dark:text-white">
              YouTube Creator opinion market. <br />
            </h1>
            <p className="text-black text-xl">
              Invest in YouTube's future. Trade creator predictions. Own
              exclusive NFTs. <br /> Shape tomorrow's content today.
            </p>
            <Button className="text-2xl h-14 px-8">Contact Us</Button>
          </div>
        }
      >
        <Image
          src={Banner}
          alt="hero"
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
