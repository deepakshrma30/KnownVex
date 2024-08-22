"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Home, TabletSmartphone } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "../animation/reveal";
import ThreeDCard from "../animation/ThreeDCard";

const cardData = [
  {
    icon: <Home />,
    title: "Web Development",
    description:
      "Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.",
  },
  {
    icon: <TabletSmartphone />,
    title: "Android Development",
    description:
      "Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.",
  },
  {
    icon: <Bot />,
    title: "Machine Learning",
    description:
      "Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.",
  },
  {
    icon: <Home />,
    title: "Marketing",
    description:
      "Web development is the work involved in developing a website for the Internet or an intranet. Web development can range from developing a simple single static page of plain text to complex web applications, electronic businesses, and social network services.",
  },
];

const Cards = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const transformStyle = {
    transform: `perspective(1000px) rotateX(${
      mousePosition.y * 10
    }deg) rotateY(${mousePosition.x * 10}deg) scale(1.05)`,
    transition: "transform 0.1s ease-out",
  };
  return (
    <div>
      <section className="py-14">
        <div className="container mx-auto text-center">
          <Reveal>
            <h2 className="text-purple-600 text-lg font-semibold">
              OUR PROGRAMS
            </h2>
          </Reveal>
          <Reveal>
            <h1 className="text-4xl font-black mt-2 ">
              WHAT STYLE OF PROGRAMS
            </h1>
          </Reveal>
          <Reveal>
            <h1 className="text-4xl font-black mt-2  mb-12">DO WE OFFER ?</h1>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap justify-center gap-6">
              {cardData?.map((item, index) => (
                <ThreeDCard key={index} index={index} icon={item?.icon} title={item?.title} description={item?.description}/>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Cards;
