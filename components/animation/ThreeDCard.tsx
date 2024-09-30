"use client";
import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "../ui/card";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface Props {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
  path: string;
}

const ThreeDCard = ({ icon, index,title, description,path }: Props) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const navigate = () => {
    router.push(path);
  }

  const transformStyle = {
    transform: `perspective(1000px) rotateX(${mousePosition.y * 20}deg) rotateY(${
      mousePosition.x * 20
    }deg) scale(1.05)`,
    transition: "transform 0.2s ease-out",
    borderRadius: "10px",
  };

  return (
    <Card
      className={cn(
        "max-w-[316px] p-2 rounded-lg shadow-2xl hover:cursor-pointer transition-colors duration-300",
        {
          "mt-6": index % 2 !== 0,
          "bg-[#807AF9] text-white": isHovered, 
          "bg-white text-black": !isHovered, 
        }
      )}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setMousePosition({ x: 0, y: 0 });
        setIsHovered(false); 
      }}
      onMouseEnter={() => setIsHovered(true)} 
      onClick={() => navigate()}
      style={mousePosition.x || mousePosition.y ? transformStyle : {}}
    >
      <CardHeader>
        <div className="flex items-center justify-start mb-4">
          <span
            className={cn(
              "inline-block p-3 rounded-full text-purple-500 transition-colors duration-300",
              { 
                "bg-white": isHovered, 
                "bg-[#FFEFDD]": !isHovered 
              }
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
