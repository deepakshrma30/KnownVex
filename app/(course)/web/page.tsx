import { TypewriterEffectSmooth } from "@/components/animation/typewritersmooth";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";


const words=[
  
    {
        text:"Web",
        className:"text-purple-500"
    },
    {
        text:"Development",
        className:"text-purple-500"
    },
   
]
const page = () => {
  return (
    <section className="flex container mt-4  flex-col md:flex-row items-center justify-between">
      {/* left section  */}
      <div className="text-center md:text-left md:w-1/2 space-y-6">
      
        <TypewriterEffectSmooth words={words}/>
        {/* Elevate Your Skills with Innovative Web Development Training */}
        
        <h2 className="text-2xl font-semibold">
          Ready To Kickstart Your Journey In{" "}
          <span className="text-purple-500">Web Development</span> With Us?
        </h2>
        <p className="text-xl">
          We Can't Wait To Explore Creativity And Build Amazing Websites
          Together!
        </p>
        <Button className="mt-4 rounded-full">Start Course Now</Button>
      </div>

      {/* right section  */}
      <div className="hidden md:flex md:w-1/2 justify-center">
        <img
          src={"/images/course-img.svg"}
          className="w-[650px] h-[500px] "
          alt="course-image"
        />
      </div>
    </section>
  );
};

export default page;
