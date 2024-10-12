import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowBigRight } from "lucide-react";

export default function ArcCarousel() {
  const [currentIndex, setCurrentIndex] = useState(2);
  const totalImages = 5;
  const [visibleImages, setVisibleImages] = useState(1); // Default for laptops

  useEffect(() => {
    const updateVisibleImages = () => {
      const screenWidth = window.outerWidth;
      console.log(screenWidth);
      if (screenWidth < 640) {
        setVisibleImages(1); // Mobile
      } else if (screenWidth < 1124) {
        setVisibleImages(3); // Tablets
      } else {
        setVisibleImages(5); // Laptops and larger
      }
    };

    updateVisibleImages();
    window.addEventListener("resize", updateVisibleImages);

    return () => {
      window.removeEventListener("resize", updateVisibleImages);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const getImageStyle = (index: number) => {
    const offset = ((index - currentIndex + totalImages) % totalImages) - 2;
    const isCenter = offset === 0;
    const isVisible = Math.abs(offset) < Math.ceil(visibleImages / 2); 
    const xOffset = offset * 250;
    let yOffset;

    if (isCenter) {
      yOffset = -24;
    } else if (Math.abs(offset) === 1) {
      yOffset = 60;
    } else {
      yOffset = 100;
    }

    return isVisible
      ? {
          left: "50%",
          transform: `translateX(calc(-50% + ${xOffset}px)) translateY(${yOffset}px)`,
          top: `${yOffset}px`,
          width: isCenter ? "260px" : "150px",
          height: isCenter ? "260px" : "150px",
          zIndex: isCenter ? 10 : 5,
          transition: "all 0.5s ease-in-out",
          borderColor: isCenter ? "#87CEEB" : "white",
          borderWidth: isCenter ? "4px" : "2px",
        }
      : { display: "none" };
  };

  return (
    <div className="relative w-full h-[376px] -top-8 rounded-lg">
      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        {/* Image carousel and button container */}
        <div className="relative w-full">
          {/* Image carousel */}
          <div className="flex items-center justify-center relative w-full h-[350px]" >
            {[...Array(totalImages)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full overflow-hidden border-2"
                style={getImageStyle(i)}
              >
                <img
                  src={"images/HeroSection" + (i + 1) + ".svg"}
                  alt="Person with papers"
                  className="w-full h-full rounded-full object-cover object-center"
                />
              </div>
            ))}
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 top-72">
            <Link href="/contact">
              <Button size={"lg"} className="text-sm lg:text-base">
                Let&apos;s Start
                <ArrowBigRight fill="#FFF" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
