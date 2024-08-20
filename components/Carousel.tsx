import React, { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
const slides = [
  "https://via.placeholder.com/200x200?text=Slide+1",
  "https://via.placeholder.com/200x200?text=Slide+2",
  "https://via.placeholder.com/200x200?text=Slide+3",
  "https://via.placeholder.com/200x200?text=Slide+4",
  "https://via.placeholder.com/200x200?text=Slide+5",
];
const Carousel = () => {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true });

  const rotateCarousel = useCallback(() => {
    if (!embla) return;
    embla.scrollNext();
  }, [embla]);

  useEffect(() => {
    const interval = setInterval(() => {
      rotateCarousel();
    }, 3000);
    return () => clearInterval(interval);
  }, [rotateCarousel]);

  return (
    <div className="flex flex-col items-center">
      <div className="embla w-full max-w-4xl mx-auto" ref={emblaRef}>
        <div className="embla__container flex justify-center items-center">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`embla__slide w-40 h-40 m-4 transform transition-transform duration-500 ease-in-out ${
                index === 0 ? 'z-10 scale-125' : 'z-0 scale-75'
              }`}
              style={{ transform: `rotateY(${index * 72}deg) translateZ(250px)` }}
            >
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-full shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>
      <button
        className="mt-6 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800"
        // onClick={rotateCarousel}
      >
        Let’s Start →
      </button>
    </div>
  );
};

export default Carousel;
