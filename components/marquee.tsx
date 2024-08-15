import React from 'react'
import {motion} from "framer-motion"
import Image from 'next/image';
type props={
    marquee:string[];
}

const Marquee = ({marquee}:props) => {
  return (
    <div className="flex MyGradient space-x-10">
            <motion.div
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="flex flex-shrink-0 space-x-10 "
            >
              {marquee?.map((item, index) => (
                <Image
                  src={item}
                  width={200}
                  height={100}
                  alt="index"
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
                  width={200}
                  height={100}
                  alt="index"
                  key={index}
                />
              ))}
            </motion.div>
          </div>
  )
}

export default Marquee
