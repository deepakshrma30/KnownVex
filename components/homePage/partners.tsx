"use client";
import React from "react";

import Marquee from "@/components/marquee";
import Reveal from "../animation/reveal";

const marquee = [
  "/images/1.svg",
  "/images/2.svg",
  "/images/3.svg",
  "/images/4.svg",
  "/images/5.svg",
  "/images/6.svg",
  "/images/7.svg",
  "/images/8.svg",
  "/images/9.svg",
  "/images/10.svg",
  "/images/11.svg",
  "/images/12.svg",
];
const Partners = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto text-center">
        <Reveal>
          <h2 className="text-purple-600 text-lg font-semibold">
            GREAT PARTNERS
          </h2>
        </Reveal>
        <Reveal>
          <h1 className="text-4xl font-black mt-2 ">
            COLLABARATIONS & PARTNERSHIP
          </h1>
        </Reveal>
        <div className="container h-48 flex  justify-center items-center   mx-auto overflow-x-hidden">
          <Marquee marquee={marquee} />
        </div>
      </div>
    </section>
  );
};

export default Partners;
