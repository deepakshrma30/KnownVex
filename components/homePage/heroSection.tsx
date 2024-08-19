"use client";
import Image from "next/image";
import React from "react";
import AnimateText from "../animation/animateText";
import Carousel from "../Carousel";
import ArcCarousel from "../arcCarousel";

const HeroSection = () => {
  return (
    <div className="w-full py-2   container   ">
      <div className="flex justify-evenly  gap-8 items-stretch">
        <Image src="/images/rocket.svg" alt="rocket" width={300} height={100} />
        <div className="text-center ">
          <h1 className="text-5xl font-black  mb-1">Bridging the Gap</h1>
          <h2 className="text-4xl font-black  mb-2">Between</h2>

          <AnimateText
            once={true}
            text="Education & Employment"
            el="h4"
            className="px-2 py-1 rounded text-4xl font-black "
          />
        </div>

        <Image src="/images/trophy.png" alt="rocket" width={300} height={100} />
      </div>
      {/* <Carousel/> */}
      <div>
        <ArcCarousel />
      </div>
    </div>
  );
};

export default HeroSection;
