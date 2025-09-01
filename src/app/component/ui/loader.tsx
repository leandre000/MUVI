"use client";

import { motion, easeInOut } from "framer-motion";
import { tv } from "tailwind-variants";
import React from "react";

// ------------------ Tailwind Variants ------------------
const loaderWrapper = tv({
  base: "fixed inset-0 gap-x-3 flex items-center justify-center z-[9999] bg-black/70 dark:bg-black/60",
});

const dot = tv({
  base: "h-4 w-4 px-1 rounded-full border border-red-700 bg-gradient-to-b from-red-500 to-red-800",
});

const loaderTextWrapper = tv({
  base: "relative font-bold text-black dark:text-white text-lg",
});

// ------------------ Loader Components ------------------
export const Loader = () => {
  const transition = (x: number) => ({
    duration: 1,
    repeat: Infinity,
    repeatType: "loop" as const,
    delay: x * 0.2,
    ease: easeInOut,
  });

  return (
    <div className={loaderWrapper()}>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={transition(0)}
        className={dot()}
      />
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={transition(1)}
        className={dot()}
      />
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 10, 0] }}
        transition={transition(2)}
        className={dot()}
      />
    </div>
  );
};

export const LoaderFour = ({ text = "Loading..." }: { text?: string }) => {
  return (
    <div className={loaderWrapper()}>
      <motion.span
        animate={{
          skewX: [0, -40, 0],
          scaleX: [1, 2, 1],
        }}
        transition={{
          duration: 0.05,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 2,
          ease: "linear",
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
        className={loaderTextWrapper()}
      >
        {text}
      </motion.span>
    </div>
  );
};
