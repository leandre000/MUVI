"use client";

import { GlareCard } from "@/app/component/ui/glare-card";
import Text from "./Text";
import { Smartphone, Tv, Laptop } from "lucide-react"; // ✅ Import icons

// Define type-safe StreamData interface
interface StreamData {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType; // ✅ React component type for icons
}

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

const StreamCard: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 place-items-center">
      {stream.map((item) => {
        const Icon = item.icon; // ✅ Assign the icon component
        return (
          <GlareCard
            key={item.id}
            className="flex flex-col items-center justify-center p-6 text-white"
          >
            <div className="flex flex-col items-center text-center max-w-[320px] space-y-4">
              {/* ✅ Dynamic icon rendering */}
              <Icon className="h-8 w-8 text-red-500" />
              <Text as="h6" className="text-lg font-semibold">
                {item.title}
              </Text>
              <Text as="p" className="text-gray-300">
                {item.description}
              </Text>
            </div>
          </GlareCard>
        );
      })}
    </div>
  );
};

export default StreamCard;
