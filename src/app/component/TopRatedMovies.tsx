"use client";

import React, { lazy, useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";  
import Text from "./Text";

const CometCardDemo = lazy(() => import('./Card').then(mod => ({ default: mod.CometCardDemo })));
interface Movie {
  id: number;
  title: string;
  poster: string;
  rating?: number;
};
const TopRatedMovies: React.FC = () => {
  const movies: Movie[] = [
    {
      id: 1,
      title: "Horror",
      poster: "/ImgCon3/Image (1).svg", 
    },
    {
      id: 2,
      title: "Action",
      poster: "/ImgCon3/Image (2).svg", 
    },
    {
      id: 3,
      title: "Romantic",
      poster: "/ImgCon3/Image (3).svg", 
    },
    {
      id: 4,
      title: "Weapons",
      poster: "/ImgCon3/Image (4).svg", 
    },
    {
      id: 5,
      title: "GUARDIANS OF THE GALAXY VOL. 3",
      poster: "/ImgCon3/Image (5).svg", 
    },
    {
      id: 6,
      title: "PUNCH",
      poster: "/ImgCon3/Image (6).svg", 
    },
    {
      id: 7,
      title: "THE HUMAN CENTIPEDE",
      poster: "/ImgCon3/Image (7).svg", 
    },
    {
      id: 8,
      title: "GUARDIANS OF THE GALAXY VOL. 3",
      poster: "/ImgCon3/Image (1).svg", 
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === movies.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? movies.length - 1 : prev - 1));
  };

  // Logic to determine the number of cards to show based on screen size
  const cardsToShow = 5;

  return (
    <div className="bg-black  text-white p-2 m-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 ">
        <div className="flex items-center gap-2 sm:gap-3">
          <Star className="text-red-600 fill-current w-5 h-5 sm:w-6 sm:h-6" />
          <Text as="h2">
            Top Rated Movies
          </Text>
        </div>
        <button className=" flex  transition-colors duration-200 text-sm sm:text-base">
          <Text
            as="span"
              className="hover-underline-animation cursor-pointer py-2 inline-flex items-center gap-1"
              >
          View All  
        </Text>

        </button>
      </div>

      {/* Subtitle */} 
        <Text as="p">
        Anything you are looking for, drama to think, comedy to laugh or
        documentary to learn something.
        </Text> 

      {/* Carousel */}
      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 sm:p-3 transition-all duration-200 hover:scale-110"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 rounded-full p-2 sm:p-3 transition-all duration-200 hover:scale-110"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>

        {/* Movie Cards Container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out gap-3 sm:gap-4 lg:gap-6"
            style={{
              transform: `translateX(-${
                (currentIndex / cardsToShow) * 100
              }%)`,
            }}
          >
            {movies.map((movie, index) => (
              <CometCardDemo key={index} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopRatedMovies;