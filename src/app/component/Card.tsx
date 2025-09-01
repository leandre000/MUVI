"use client";

import { CometCard } from "@/app/component/ui/comet-card";
import Image from "next/image";
import Text from "./Text";
import { ArrowRight } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { tv } from "tailwind-variants";

// ------------------ Tailwind Variants ------------------
const buttonWrapper = tv({
  base: "my-10 flex w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 " +
        "bg-[#1F2121] p-2 md:p-4 hover:grayscale transition-[filter] duration-700",
});

const imageContainer = tv({
  base: "mx-2 flex-1 relative mt-2 aspect-[3/4] w-full",
});

const posterImage = tv({
  base: "absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover",
});

const titleWrapper = tv({
  base: "mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white",
});

const titleText = tv({
  base: "flex items-center gap-2 cursor-pointer",
});

// ------------------ Types ------------------
interface Movie {
  id: number;
  title: string;
  poster: string;
  rating?: number;
}

interface CometCardDemoProps {
  movie: Movie;
}

// ------------------ Component ------------------
export function CometCardDemo({ movie }: CometCardDemoProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <CometCard>
      <button
        type="button"
        className={buttonWrapper()}
        aria-label={`View movie ${movie.title}`}
        style={{ transformStyle: "preserve-3d", transform: "none", opacity: 1 }}
      >
        <div className={imageContainer()} ref={ref}>
          {inView && (
            <Image
              height={300}
              width={200}
              loading="lazy"
              alt={movie.title}
              src={movie.poster}
              className={posterImage()}
              style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px", opacity: 1 }}
            />
          )}
        </div>

        <div className={titleWrapper()}>
          <Text as="h4" className={titleText()}>
            {movie.title}
            <ArrowRight className="w-4 h-4" />
          </Text>
        </div>
      </button>
    </CometCard>
  );
}
