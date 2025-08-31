"use client";

import React from "react";
import { motion } from "framer-motion";
import Text from "./Text";
import Button from "./Button";
import { Clapperboard } from "lucide-react";

// Wrap custom components with motion for animation support
const MotionText = motion(Text); 

interface FooterProps {
  title: string;
  description: string;
  buttonText: string;
}

const Footer: React.FC = () => {
  const data: FooterProps = {
    title: "Start your free trial today!",
    description:
      "This is a clear and concise call-to-action that encourages users to sign up for a free trial of StreamFlix. By highlighting the benefits of the service and offering a risk-free trial, it aims to convert visitors into subscribers.",
    buttonText: "Open a Free Trial",
  };

  return (
    <div className="flex items-center justify-center p-4 mt-16">
      {/* Main container */}
      <div className="relative w-full max-w-8xl overflow-hidden bg-black text-white rounded-xl shadow-2xl">
        {/* Background overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black to-[#3a0d0d] opacity-90 rounded-xl z-0"></div>

        {/* Content wrapper */}
        <div className="relative flex flex-col md:flex-row items-center justify-between p-6 md:p-10 space-y-6 md:space-y-0 md:space-x-72 gap-x-40 z-10">
          {/* Text content */}
          <div className="flex-1 text-center md:text-left">
            <MotionText
              as="h4" 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {data.title}
            </MotionText>

            <MotionText
              as="p" 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {data.description}
            </MotionText>
          </div>

          {/* Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.4,
              type: "spring",
              stiffness: 100,
            }}
          >
              <Button
         label={
          <span className="flex items-center gap-2 py-2">
              <Clapperboard className="w-5 h-5" />
              {data.buttonText}
            </span>
          }
          onClick={() => {}}
        />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
