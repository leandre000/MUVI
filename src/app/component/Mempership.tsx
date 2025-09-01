"use client";

import React from "react";
import { PinContainer } from "@/app/component/ui/3d-pin";
import Text from "./Text";
import { Clapperboard, Star } from "lucide-react";
import Button from "./Button";
import { useInView } from "react-intersection-observer";
import { tv } from "tailwind-variants";

// ✅ Tailwind Variants
const membershipWrapper = tv({
  base: "bg-black text-white p-4 mt-16 mb-40",
});

const headerWrapper = tv({
  base: "flex items-center justify-between mb-6",
});

const headerTitle = tv({
  base: "flex items-center gap-2 sm:gap-3",
});

const subtitle = tv({
  base: "text-white",
});

const cardsGrid = tv({
  base: "grid grid-cols-1 md:grid-cols-3 gap-28 place-items-center mt-12",
});

const cardContainer = tv({
  base: "w-[20rem] h-[22rem] flex flex-col p-4 tracking-tight text-slate-100 transition-transform duration-500",
});

const cardPlaceholder = tv({
  base: "w-[20rem] h-[22rem] bg-gray-900 rounded-lg animate-pulse",
});

const cardList = tv({
  base: "mt-4 space-y-2 text-sm text-slate-300",
});

const cardListItem = tv({
  base: "flex items-start gap-2",
});

const bullet = tv({
  base: "text-[#bb0000] font-extrabold",
});

const cardButtonWrapper = tv({
  base: "relative left-1/2 -translate-x-1/2 text-center my-6",
});

// ✅ Interfaces
interface MembersPlan {
  id: number;
  title: string;
  points: string[];
  price?: number;
  priceLabel?: string;
}

interface CardWrapperProps {
  plan: MembersPlan;
}

// ✅ Main Component
const Membership: React.FC = () => {
  const membersPlans: MembersPlan[] = [
    {
      id: 1,
      title: "Basic Plan",
      points: [
        "Regular content updates for all features.",
        "Stream on 1 device at a time.",
        "Standard video quality (SD).",
        "Cancel anytime.",
      ],
      price: 9.99,
      priceLabel: "Monthly",
    },
    {
      id: 2,
      title: "Standard Plan",
      points: [
        "Access to all standard content.",
        "Stream on 2 devices at a time.",
        "High-definition video quality (HD).",
        "Create custom watchlists.",
      ],
      price: 9.99,
      priceLabel: "Monthly",
    },
    {
      id: 3,
      title: "Premium Plan",
      points: [
        "Exclusive access to premium content.",
        "Stream on 4 devices at a time.",
        "Ultra HD (4K) video quality.",
        "Ad-free streaming experience.",
      ],
      price: 12.99,
      priceLabel: "Monthly",
    },
  ];

  return (
    <div className={membershipWrapper()}>
      {/* Header */}
      <div className={headerWrapper()}>
        <div className={headerTitle()}>
          <Star className="text-red-600 fill-current w-5 h-5 sm:w-6 sm:h-6" />
          <Text as="h2">Membership Plans</Text>
        </div>
      </div>

      {/* Subtitle */}
      <Text as="p" className={subtitle()}>
        Choose a plan that fits your streaming lifestyle.
      </Text>

      {/* Plans */}
      <div className={cardsGrid()}>
        {membersPlans.map((plan) => (
          <CardWrapper key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default Membership;

// ✅ Card Wrapper with Intersection Observer
const CardWrapper: React.FC<CardWrapperProps> = ({ plan }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div ref={ref} className="w-full flex justify-center">
      {inView ? (
        <PinContainer
          title={`${plan.title} - $${plan.price} / ${plan.priceLabel}`}
          className={cardContainer()}
        >
          <Text as="h3">{plan.title}</Text>
          <Text as="p">
            ${plan.price} / {plan.priceLabel}
          </Text>

          {/* Points */}
          <ul className={cardList()}>
            {plan.points.map((point, idx) => (
              <li key={idx} className={cardListItem()}>
                <span className={bullet()}>.</span>
                {point}
              </li>
            ))}
          </ul>

          {/* Button */}
          <div className={cardButtonWrapper()}>
            <Button
              className="px-16"
              label={
                <span className="flex gap-2">
                  <Clapperboard className="w-4 h-4" />
                  Create Plan
                </span>
              }
              onClick={() => {}}
            />
          </div>
        </PinContainer>
      ) : (
        // ✅ Placeholder
        <div className={cardPlaceholder()}></div>
      )}
    </div>
  );
};
