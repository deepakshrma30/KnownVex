"use client";
import React, { createContext, useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { cn } from "@/lib/utils";

interface Props {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ThreeDCard = ({ icon, title, description, index }: Props) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const transformStyle = {
    transform: `perspective(1000px) rotateX(${
      mousePosition.y * 10
    }deg) rotateY(${mousePosition.x * 10}deg) scale(1.05)`,
    transition: "transform 0.2s ease-out",
    borderRadius: "10px",
  };
  return (
    <Card
      className={cn(
        "max-w-[316px] bg-white text-black p-2 rounded-lg shadow-2xl  hover:cursor-pointer",
        {
          "mt-6": index % 2 !== 0,
          "bg-[#807AF9] text-white": index === 0,
        }
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePosition({ x: 0, y: 0 })}
      style={mousePosition.x || mousePosition.y ? transformStyle : {}}
    >
      <CardHeader>
        <div className="flex items-centre justify-start mb-4">
          <span
            className={cn(
              "inline-block p-3 rounded-full bg-[#FFEFDD] text-purple-500",
              { "bg-white": index === 0 }
            )}
          >
            {icon}
          </span>
        </div>
        <CardTitle className="text-xl font-bold text-left">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-left">{description}</p>
      </CardContent>
    </Card>
  );
};

export default ThreeDCard;
