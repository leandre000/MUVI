"use client";
import Image from 'next/image';
import React, { JSX } from 'react';
import Text from './Text';
import Button from './Button'; 
import { Clapperboard } from 'lucide-react';
// Define the type for a single row's data.
interface RowData {
  images: string[];
  direction: 'left' | 'right';
  borderColor: string;
  duration: string;
  name: string;
}

// Define the props for the AnimatedRow component.
interface AnimatedRowProps {
  images: string[];
  direction: 'left' | 'right';
  borderColor: string;
  duration: string;
  name: string;
}

const rows: RowData[] = [
  {
    images: [
      "/ImgCon3/Image (1).webp",
      "/ImgCon1/Image (2).webp",
      "/ImgCon3/Image (3).webp",
      "/ImgCon1/Image (4).webp",
      "/ImgCon1/Image (5).webp",
      "/ImgCon1/Image (6).webp"
    ],
    direction: 'left', // right to left
    borderColor: 'border-blue-500',
    duration: '20s',
    name: 'blue-1'
  },
  {
    images: [
      "/ImgCon2/Image (1).webp",
      "/ImgCon2/Image (2).webp",
      "/ImgCon3/Image (3).webp",
      "/ImgCon2/Image (4).webp",
      "/ImgCon3/Image (5).webp",
      "/ImgCon2/Image (6).webp"
    ],
    direction: 'right', // left to right
    borderColor: 'border-red-500',
    duration: '20s',
    name: 'red-1'
  },
  {
    images: [
      "/ImgCon1/Image (1).webp",
      "/ImgCon3/Image (2).webp",
      "/ImgCon3/Image (3).webp",
      "/ImgCon3/Image (4).webp",
      "/ImgCon1/Image (5).webp",
      "/ImgCon3/Image (6).webp",
      "/ImgCon1/Image (7).webp"
    ],
    direction: 'left',
    borderColor: 'border-blue-500',
    duration: '25s',
    name: 'blue-2'
  },
  {
    images: [
      "/ImgCon1/Image (1).webp",
      "/ImgCon2/Image (2).webp",
      "/ImgCon3/Image (3).webp",
      "/ImgCon2/Image (4).webp",
      "/ImgCon2/Image (5).webp",
      "/ImgCon3/Image (6).webp"
    ],
    direction: 'right',
    borderColor: 'border-red-500',
    duration: '25s',
    name: 'red-2'
  },
];

const AnimatedRow: React.FC<AnimatedRowProps> = ({ images, direction, borderColor, duration, name }) => (
  <div className={`relative mb-4 ${borderColor} rounded-lg overflow-hidden`}>
    {/* Use the global animation classes here */}
    <div className={`flex w-max ${direction === 'left' ? 'animate-loop-left' : 'animate-loop-right'}`} style={{ animationDuration: duration }}>
      {/* We duplicate the array to ensure a seamless loop. */}
      {[...images, ...images].map((image, index) => (
        <div key={`${name}-${index}`} className="flex-shrink-0 mx-2">
          <Image
            height={600}
            width={600}
            src={image}
            alt={`${name} image ${index + 1}`}
            className="w-20 h-28 sm:w-24 sm:h-32 md:w-28 md:h-36 lg:w-32 lg:h-40 xl:w-36 xl:h-44 object-cover rounded-lg shadow-lg bg-black"
          />
        </div>
      ))}
    </div>
  </div>
);

const Home: React.FC = () => { 
  return (
    <>
      <div className="relative w-full bg-black py-4 overflow-hidden">
        {/* Top gradient fade */}
        <div
          className="absolute top-0 left-0 w-full h-24 z-50"
          style={{
            background:
              "linear-gradient(180deg, #141414 0%, rgba(20, 20, 20, 0) 100%)",
          }}
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent "></div>

        {/* Animated rows */}
        {rows.map((row, index) => (
          <AnimatedRow key={index} {...row} />
        ))}

        {/* Bottom gradient fade (black → transparent) */}
        <div
          className="absolute bottom-0 left-0 w-full h-72 z-40"
          style={{
            background:
              "linear-gradient(180deg, rgba(20, 20, 20, 0) 0%, #000000 100%)",
          }}
        />
      </div>

      {/* Text at bottom */}
    <div className="relative max-w-4xl mx-auto z-50 text-center px-4 sm:px-8 md:px-16 lg:px-24 py-8 sm:py-12">
  <Text as="h1" className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
    The Best Streaming Experience
  </Text>

  <Text as="p" className="text-white leading-relaxed mb-2">
    MuviVibe is the best streaming experience for watching your favorite movies and shows on demand, anytime, anywhere. With MuviVibe, you can enjoy a wide variety of content, including the latest blockbusters, classic movies, popular TV shows, and more. You can also create your own watchlists, so you can easily find the content you want to watch.
  </Text>

  <Button
    label={
      <span className="flex items-center gap-2 justify-center">
        <Clapperboard className="w-5 h-5" />
        Start Watching
      </span>
    }
    onClick={() => {}}
  />
</div>

    </>
  );
};

export default Home;
