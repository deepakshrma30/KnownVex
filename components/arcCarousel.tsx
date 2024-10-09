import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowBigRight, ArrowRight } from "lucide-react";

export default function ArcCarousel() {
  const imageUrl = "images/HeroSection1.svg";
  const [currentIndex, setCurrentIndex] = useState(2);
  const totalImages = 5;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const getImageStyle = (index: any) => {
    const offset = ((index - currentIndex + totalImages) % totalImages) - 2;
    const isCenter = offset === 0;
    const xOffset = offset * 250; // 80px image width + 15px gap
    // const yOffset = isCenter ? -24 : 100; // Center image at baseline, others 100px lower
    let yOffset;

    if (isCenter) {
      yOffset = -24;
    } else if (Math.abs(offset) === 1) {
      yOffset = 60;
    } else {
      // Outermost images
      yOffset = 100;
    }

    return {
      left: "50%",
      transform: `translateX(calc(-50% + ${xOffset}px)) translateY(${yOffset}px)`,
      top: `${yOffset}px`,
      width: isCenter ? "260px" : "150px",
      height: isCenter ? "260px" : "150px",
      zIndex: isCenter ? 10 : 5,
      transition: "all 0.5s ease-in-out",
      borderColor: isCenter ? "#87CEEB" : "white", // Red border for center image
      borderWidth: isCenter ? "4px" : "2px",
    };
  };

  return (
    <div className="relative w-full h-[376px]  -top-8  rounded-lg">
      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        {/* Image carousel and button container */}
        <div className="relative w-full">
          {/* Image carousel */}
          <div className="flex items-center justify-center relative w-full h-[350px]">
            {[...Array(totalImages)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full  overflow-hidden border-2"
                style={getImageStyle(i)}
              >
                <img
                  src={"images/HeroSection"+ (i + 1) +".svg"}
                  alt="Person with papers"
                  className="w-full h-full rounded-full object-cover object-center"
                />
              </div>
            ))}
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 top-72">
            <Link href="/contact"> <Button size={"lg"}>Let&apos;s Start <ArrowBigRight className="ml-2" fill="#FFF"></ArrowBigRight></Button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
