"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Home, TabletSmartphone } from "lucide-react";
import { cn } from "@/lib/utils";
import Reveal from "../animation/reveal";
import ThreeDCard from "../animation/ThreeDCard";

const cardData = [
  {
    icon: <img src="/images/web-icon.svg" className="w-6"/>,
    title: "Web Development",
    path: "/course/web",
    description:
      "Web development involves building and maintaining websites and web applications. This course covers front-end and back-end development, using technologies like HTML, CSS, JavaScript, and frameworks such as React and Node.js to create responsive and dynamic web experiences.",
  },
  {
    icon: <TabletSmartphone className="w-6 h-6"/>,
    title: "Java",
    path: "/course/java",
    description:
      "Java is a high-level, object-oriented programming language developed by Sun Microsystems in 1995 (now owned by Oracle). It is widely used for building scalable, platform-independent applications. Java follows the 'write once, run anywhere' (WORA) principle, meaning code written in Java can run on any device with a Java Virtual Machine (JVM).",
  },
  {
    icon: <img src="/images/ai-icon.svg" className="w-6"/>,
    title: "Artificial Intelligence",
    path: "/course/ai",
    description:
      "Artificial Intelligence (AI) is the study of creating intelligent agents that can perform tasks that typically require human intelligence. This course includes topics such as machine learning, deep learning, natural language processing, and computer vision, providing practical insights into building AI-driven solutions.",
  },
  {
    icon: <Home className="w-6 h-6"/>,
    title: "Human Resources",
    path: "/course/hr",
    description:
      "Human Resources (HR) focuses on managing people within organizations, including recruitment, training, performance management, and employee relations. This course provides an understanding of HR practices, compliance, and strategies to foster a productive and positive workplace environment.",
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
      <section className="py-8 xl:py-14">
        <div className="container px-4 mx-auto text-center">
          <Reveal>
            <h2 className="text-purple-600 text-base xl:text-lg font-semibold">
              OUR PROGRAMS
            </h2>
          </Reveal>
          <Reveal>
            <h1 className="text-xl xl:text-4xl font-black mt-2">
              WHAT STYLE OF PROGRAMS
            </h1>
          </Reveal>
          <Reveal>
            <h1 className="text-xl xl:text-4xl font-black mt-2 mb-6 xl:mb-12">DO WE OFFER ?</h1>
          </Reveal>
          <Reveal>
            <div className="flex flex-wrap justify-center gap-6">
              {cardData?.map((item, index) => (
                <ThreeDCard key={index} index={index} icon={item?.icon} title={item?.title} description={item?.description} path={item?.path}/>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default Cards;
