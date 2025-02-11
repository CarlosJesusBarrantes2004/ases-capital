"use client";

/* eslint-disable @next/next/no-img-element */
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface CardStackCarouselProps {
  cards: {
    title: string;
    image: string;
    icon: string;
    description: string;
  }[];
  color?: "yellow" | "blue" | "red" | "green";
}

const colorClasses = {
  yellow: "bg-yellow-500",
  blue: "bg-blue-500",
  red: "bg-red-500",
  green: "bg-green-500",
} as const;

function CardStackCarousel({ cards, color }: CardStackCarouselProps) {
  return (
    <div
      className="w-full max-w-60 sm:max-w-sm md:max-w-md mx-auto p-4"
      role="region"
      aria-label="Carrusel de servicios"
    >
      <Swiper
        effect="cards"
        grabCursor={true}
        modules={[EffectCards]}
        className="w-full h-[380px] md:h-[505px] xl:h-[510px]"
      >
        {cards.map((card, index) => (
          <SwiperSlide
            key={index}
            className="rounded-3xl overflow-hidden"
            role="group"
            aria-roledescription="slide"
            aria-label={`Servicio ${index + 1} de ${cards.length}`}
          >
            <article className="relative w-full h-full">
              <img
                src={card.image}
                alt={`Imagen representativa de ${card.title}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div
                className="absolute inset-0 bg-black/40"
                aria-hidden="true"
              ></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                <div
                  className={`${
                    color ? colorClasses[color] : ""
                  } rounded-full p-4 mb-4`}
                  aria-hidden="true"
                >
                  <span className="text-3xl">{card.icon}</span>
                </div>
                <h3 className="text-2xl font-bold tracking-wider text-center">
                  {card.title}
                </h3>
                <p className="sr-only">{card.description}</p>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CardStackCarousel;
