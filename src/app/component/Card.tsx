import { CometCard } from "@/app/component/ui/comet-card";
import Image from "next/image";
import Text from "./Text";
import { ArrowRight } from "lucide-react";

interface Movie {
  id: number;
  title: string;
  poster: string;   // ✅ match TopRatedMovies
  rating?: number;  // ✅ optional rating
}
interface CometCardDemoProps {
  movie: Movie;
}
export function CometCardDemo({ movie }: CometCardDemoProps) {

  return (
    <CometCard>
      <button
        type="button"
        className="my-10 flex w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#1F2121] p-2  md:p-4 hover:grayscale transition-[filter] duration-700"
        aria-label="View invite F7RA"
        style={{
          transformStyle: "preserve-3d",
          transform: "none",
          opacity: 1,
        }}
      >
        <div className="mx-2 flex-1">
          <div className="relative mt-2 aspect-[3/4] w-full">
            <Image
              height={300}
              width={200}
              loading="lazy"
              className="absolute inset-0 h-full w-full rounded-[16px] bg-[#000000] object-cover "
              alt={movie.title}
              src={movie.poster}
              style={{
                boxShadow: "rgba(0, 0, 0, 0.05) 0px 5px 6px 0px",
                opacity: 1,
              }}
            />
          </div>
        </div> 
             <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
  <Text as="h4" className="flex items-center gap-2">
    {movie.title}
    <ArrowRight className="w-4 h-4" />
  </Text>
</div>

      </button>
    </CometCard>
  );
}
