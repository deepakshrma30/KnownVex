"use client"
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
type props = {
  children: JSX.Element;
  width?: "fit-content" | "100%";
};
const Reveal = ({ width = "100%", children }: props) => {
    const ref=useRef(null);
    const isInView=useInView(ref,{once:true})
    const controls=useAnimation()

    useEffect(()=>{
        if(isInView){
            controls.start("visible")
        }
    },[isInView])
  return (
    <div ref={ref} style={{ position: "relative", width: width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={controls}
        transition={{duration:0.5}}
        
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Reveal;
