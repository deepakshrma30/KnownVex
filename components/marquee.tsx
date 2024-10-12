"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {
  marquee: string[];
};

const Marquee = ({ marquee }: Props) => {
  return (
    <div className="flex MyGradient space-x-10 w-[50vw] md:w-[80vw] xl:w-auto overflow-hidden">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 space-x-10"
      >
        {marquee?.map((item, index) => (
          <Image
            src={item}
            width={0}
            height={0}
            sizes="(max-width: 640px) 120px, (max-width: 768px) 150px, (max-width: 1024px) 180px, 200px"
            className="w-[120px] h-[60px] sm:w-[150px] sm:h-[75px] md:w-[180px] md:h-[90px] lg:w-[200px] lg:h-[100px]"
            alt={`marquee-item-${index}`}
            key={index}
          />
        ))}
      </motion.div>

      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0 space-x-10"
      >
        {marquee?.map((item, index) => (
          <Image
            src={item}
            width={0}
            height={0}
            sizes="(max-width: 640px) 120px, (max-width: 768px) 150px, (max-width: 1024px) 180px, 200px"
            className="w-[120px] h-[60px] sm:w-[150px] sm:h-[75px] md:w-[180px] md:h-[90px] lg:w-[200px] lg:h-[100px]"
            alt={`marquee-item-${index}`}
            key={index}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;
