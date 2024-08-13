import Image from "next/image";
import React from "react";
import AnimateText from "../animation/animateText";

const HeroSection = () => {
  return (
    <div className="w-full py-2  container   ">
      <div className="flex justify-evenly gap-12 items-stretch">
        <Image src="/images/rocket.svg" alt="rocket" width={300} height={100} />
        <div className="text-center ">
          <h1 className="text-5xl font-black  mb-2">Bridging the Gap</h1>
          <h2 className="text-4xl font-black  mb-4">Between</h2>

          {/* <h1 className="text-4xl font-black "> */}
            {/* <span className="bg-[#87CEEB]  px-2 py-1 rounded"> */}
            <AnimateText
            once
            text="Education & Employment"
            el="h4"
            className="px-2 py-1 rounded text-4xl font-black "
            // repeatDelay={5000}
          />
              {/* Education & Employment */}
            {/* </span> */}
          {/* </h1> */}
        </div>

        <Image src="/images/trophy.png" alt="rocket" width={300} height={100}  />
      </div>
    </div>
  );
};

export default HeroSection;
