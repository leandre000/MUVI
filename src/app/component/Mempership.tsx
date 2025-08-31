"use client";

import React from "react";
import { PinContainer } from "@/app/component/ui/3d-pin";
import Text from "./Text";
import { Clapperboard, Star } from "lucide-react";
import Button from "./Button";

interface MembersPlan {
  id: number;
  title: string;
  points: string[];
  price?: number;
  priceLabel?: string;
}

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
    <div className="bg-black text-white p-4 mt-16 mb-40">
      {/* Header */}
      <div className="flex items-center justify-between mb-6 ">
        <div className="flex items-center gap-2 sm:gap-3">
          <Star className="text-red-600 fill-current w-5 h-5 sm:w-6 sm:h-6" />
          <Text as="h2">Membership Plans</Text>
        </div>
      </div>

      {/* Subtitle */}
      <Text as="p">
        Choose a plan that fits your streaming lifestyle.
      </Text>

      {/* Mapping Membership Plans */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-28 place-items-center mt-12">
        {membersPlans.map((plan) => (
          <PinContainer
            key={plan.id}
            title={`${plan.title} - $${plan.price} / ${plan.priceLabel}`} 
            className="w-[20rem] h-[22rem] flex flex-col p-4 tracking-tight text-slate-100"
          >
            <Text as="h3">
              {plan.title}
            </Text>
            <Text as="p">
              ${plan.price} / {plan.priceLabel}
            </Text>

            {/* Points */}
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {plan.points.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#bb0000] font-extrabold">.</span>
                  {point}
                </li>
              ))}
            </ul>
              <div className="relative left-1/2 -translate-x-1/2  text-center my-6">
                 <Button
                 className="px-16"
         label={
          <span className="flex  gap-2">
              <Clapperboard className="w-4 h-4" />
              Create Plan
            </span>
          }
          onClick={() => {}}
        />
              </div>
          </PinContainer>
        ))}
      </div>
    </div>
  );
};

export default Membership;
