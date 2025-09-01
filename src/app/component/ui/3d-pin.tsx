"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { tv } from "tailwind-variants";

// ------------------ Tailwind Variants ------------------
const containerWrapper = tv({
  base: "relative group/pin z-50 cursor-pointer",
});

const pinWrapper = tv({
  base:
    "absolute left-1/2 top-1/2 ml-[0.09375rem] mt-4 -translate-x-1/2 -translate-y-1/2",
});

const pinCard = tv({
  base:
    "absolute left-1/2 p-4 top-1/2 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] " +
    "bg-gradient-to-t from-black via-black/90 to-[#3a0d0d] border border-white/[0.1] " +
    "group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden",
});

const pinContent = tv({
  base: "relative z-50",
});

const pinTitleWrapper = tv({
  base:
    "absolute top-0 inset-x-0 flex justify-center",
});

const pinTitleBox = tv({
  base:
    "relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10",
});

const pinTitleText = tv({
  base: "relative z-20 text-white text-xs font-bold inline-block py-0.5",
});

const backgroundCircle = tv({
  base:
    "absolute left-1/2 top-1/2 h-[11.25rem] w-[11.25rem] rounded-[50%] shadow-[0_8px_16px_rgb(0_0_0/0.4)]",
  variants: {
    color: {
      default: "bg-sky-500/[0.08]",
    },
  },
});

const cyanBeam = tv({
  base:
    "absolute right-1/2 bottom-1/2 translate-y-[14px] w-px h-20 group-hover/pin:h-40",
  variants: {
    color: {
      default: "bg-gradient-to-t from-transparent to-[#3a0d0d]",
      solid: "bg-[#3a0d0d]",
    },
    size: {
      sm: "w-[2px] h-[2px] rounded-full",
      md: "w-[4px] h-[4px] rounded-full blur-[3px]",
    },
  },
});

// ------------------ PinContainer ------------------
export const PinContainer = ({
  children,
  title,
  href,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  title?: string;
  href?: string;
  className?: string;
  containerClassName?: string;
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(40deg) scale(0.8)");
  };
  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  return (
    <div
      className={cn(containerWrapper(), containerClassName)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div style={{ perspective: "1000px", transform: "rotateX(70deg) translateZ(0deg)" }} className={pinWrapper()}>
        <div style={{ transform }} className={pinCard()}>
          <div className={cn(pinContent(), className)}>{children}</div>
        </div>
      </div>
      <PinPerspective title={title} href={href} />
    </div>
  );
};

export const PinPerspective = ({ title, href }: { title?: string; href?: string }) => {
  return (
    <motion.div className="w-96 h-80 flex items-center justify-center opacity-0 group-hover/pin:opacity-100 md:group-hover/pin:opacity-100 z-[60] transition duration-500">
      <div className="w-full h-full -mt-7 flex-none inset-0">
        <div className={pinTitleWrapper()}>
          {href ? (
            <a href={href} target="_blank" className={pinTitleBox()}>
              <span className={pinTitleText()}>{title}</span>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover/btn:opacity-40"></span>
            </a>
          ) : (
            <div className={pinTitleBox()}>
              <span className={pinTitleText()}>{title}</span>
            </div>
          )}
        </div>

        {/* Background Circles */}
        <div style={{ perspective: "1000px", transform: "rotateX(70deg) translateZ(0)" }} className={pinWrapper()}>
          {[0, 2, 4].map((delay) => (
            <motion.div
              key={delay}
              initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
              animate={{ opacity: [0, 1, 0.5, 0], scale: 1, z: 0 }}
              transition={{ duration: 6, repeat: Infinity, delay }}
              className={backgroundCircle()}
            />
          ))}
        </div>

        {/* Reddish Beam Effects */}
        <motion.div className={cyanBeam({ color: "default" })} />
        <motion.div className={cyanBeam({ color: "default" })} />
        <motion.div className={cyanBeam({ color: "solid", size: "md" })} />
        <motion.div className={cyanBeam({ color: "solid", size: "sm" })} />
      </div>
    </motion.div>
  );
};

