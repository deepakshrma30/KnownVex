import Image from "next/image";
import React from "react";
import AnimateText from "../animation/animateText";
import Carousel from "../Carousel";
import ArcCarousel from "../arcCarousel";

const HeroSection = () => {
  return (
    <div className="w-full py-2 container px-4">
      <div className="flex justify-evenly  gap-8 items-stretch mb-28">
        {/* <Image src="/images/rocket.svg" alt="rocket" width={300} height={100} /> */}
        <div className="text-center ">
          <h1 className="text-2xl lg:text-5xl font-black  mb-1">Transforming</h1>
          <AnimateText
            once={true}
            text="Aspirations into Achievements"
            el="h4"
            className="px-2 py-1 rounded text-lg lg:text-4xl font-black "
          />
        </div>

        {/* <Image src="/images/trophy.png" alt="rocket" width={300} height={100} /> */}
      </div>
      {/* <Carousel/> */}
      <div>
        <ArcCarousel />
      </div>
    </div>
  );
};

export default HeroSection;
