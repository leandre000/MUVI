"use client";

import { GlareCard } from "@/app/component/ui/glare-card";
import Text from "./Text";
import { Smartphone, Tv, Laptop } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { tv } from "tailwind-variants";

// ------------------ Tailwind Variants ------------------
const cardWrapper = tv({
  base: "w-full flex items-center justify-center",
});

const glareCardStyle = tv({
  base:
    "flex flex-col items-center justify-center p-6 text-white transition-opacity duration-700",
});

const cardContent = tv({
  base: "flex flex-col items-center text-center max-w-[320px] space-y-4",
});

const iconStyle = tv({
  base: "h-8 w-8 text-red-500",
});

const titleStyle = tv({
  base: "text-lg font-semibold",
});

const descriptionStyle = tv({
  base: "text-gray-300",
});

const gridWrapper = tv({
  base: "grid grid-cols-1 md:grid-cols-3 gap-12 place-items-center",
});

// ------------------ Types ------------------
interface StreamData {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
}

// ------------------ Stream Data ------------------
const stream: StreamData[] = [
  {
    id: 1,
    title: "Smartphones",
    description:
      "MuviStream is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store",
    icon: Smartphone,
  },
  {
    id: 2,
    title: "LED TV",
    description:
      "Enjoy MuviStream on the big screen with LED TV support for the best cinematic experience at home.",
    icon: Tv,
  },
  {
    id: 3,
    title: "Laptop",
    description:
      "Stream seamlessly on your laptop with full HD clarity and optimized performance.",
    icon: Laptop,
  },
];

// ------------------ Lazy Card Component ------------------
const LazyCard: React.FC<{ item: StreamData }> = ({ item }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const Icon = item.icon;

  return (
    <div ref={ref} className={cardWrapper()}>
      {inView && (
        <GlareCard className={glareCardStyle()}>
          <div className={cardContent()}>
            <Icon className={iconStyle()} />
            <Text as="h6" className={titleStyle()}>
              {item.title}
            </Text>
            <Text as="p" className={descriptionStyle()}>
              {item.description}
            </Text>
          </div>
        </GlareCard>
      )}
    </div>
  );
};

// ------------------ Stream Card Grid ------------------
const StreamCard: React.FC = () => {
  return (
    <div className={gridWrapper()}>
      {stream.map((item) => (
        <LazyCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default StreamCard;
