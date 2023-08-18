import React from "react";
import { Carousel } from "@material-tailwind/react";

function ReusableCarousel({ cards }) {
  return (
    <div className="flex items-center justify-center">
      <Carousel
        className="rounded-xl w-[28rem]"
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        {cards.map((card, index) => (
          <div key={index} className="flex items-center justify-center">
            {card}
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default ReusableCarousel;
