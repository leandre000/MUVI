"use client";

import React, { lazy, useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import Text from "./Text";
import { tv } from "tailwind-variants";

const CometCardDemo = lazy(() => import('./Card').then(mod => ({ default: mod.CometCardDemo })));

// Tailwind Variants
const container = tv({ base: "bg-black text-white p-2 m-4" });
const headerWrapper = tv({ base: "flex items-center justify-between mb-6" });
const headerLeft = tv({ base: "flex items-center gap-2 sm:gap-3" });
const viewAllButton = tv({ base: "flex transition-colors duration-200 text-sm sm:text-base" });
const viewAllText = tv({ base: "hover-underline-animation cursor-pointer py-2 inline-flex items-center gap-1" });
const carouselWrapper = tv({ base: "relative" });
const navButton = tv({ base: "absolute top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 sm:p-3 transition-all duration-200 hover:scale-110" });
const movieCardsContainer = tv({ base: "overflow-hidden" });
const cardsFlex = tv({ base: "flex transition-transform duration-500 ease-in-out gap-3 sm:gap-4 lg:gap-6" });

interface Movie { id: number; title: string; poster: string; rating?: number; }

const TopRatedMovies: React.FC = () => {
  const movies: Movie[] = [
    { id: 1, title: "Horror", poster: "/ImgCon3/Image (1).webp" },
    { id: 2, title: "Action", poster: "/ImgCon1/Image (2).webp" },
    { id: 3, title: "Romantic", poster: "/ImgCon3/Image (3).webp" },
    { id: 4, title: "Weapons", poster: "/ImgCon2/Image (4).webp" },
    { id: 5, title: "GUARDIANS", poster: "/ImgCon3/Image (5).webp" },
    { id: 6, title: "PUNCH", poster: "/ImgCon3/Image (6).webp" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(5);

  // Detect screen size dynamically
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth < 640) setCardsToShow(1); // Mobile
      else if (window.innerWidth < 1024) setCardsToShow(2); // Tablet / sm
      else setCardsToShow(5); // Desktop
    };

    updateCardsToShow();
    window.addEventListener("resize", updateCardsToShow);
    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => Math.min(prev + 1, movies.length - cardsToShow));
  const prevSlide = () => setCurrentIndex((prev) => Math.max(prev - 1, 0));

  const translateX = (100 / cardsToShow) * currentIndex;

  return (
    <div className={container()}>
      {/* Header */}
      <div className={headerWrapper()}>
        <div className={headerLeft()}>
          <Star className="text-red-600 fill-current w-5 h-5 sm:w-6 sm:h-6" />
          <Text as="h2">Top Rated Movies</Text>
        </div>
        <button className={viewAllButton()}>
          <Text as="p" className={viewAllText()}>View All</Text>
        </button>
      </div>

      {/* Subtitle */}
      <Text as="p">
        Anything you are looking for, drama to think, comedy to laugh or documentary to learn something.
      </Text>

      {/* Carousel */}
      <div className={carouselWrapper()}>
        <button onClick={prevSlide} className={navButton({})} style={{ left: 0 }}>
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
        <button onClick={nextSlide} className={navButton({})} style={{ right: 0 }}>
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <div className={movieCardsContainer()}>
          <div className={cardsFlex()} style={{ transform: `translateX(-${translateX}%)` }}>
            {movies.map((movie) => (
              <CometCardDemo key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRatedMovies;
