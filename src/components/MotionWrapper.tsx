import React from "react";
import { motion } from "framer-motion";
import type { MotionProps } from "framer-motion";

interface MotionWrapperProps extends MotionProps {
  children: React.ReactNode;
  delay?: number;
}

// Default animations for sections
const defaultAnimations = (custom: number = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: custom,
    },
  },
});

export default function MotionWrapper({
  children,
  delay = 0,
  ...props
}: MotionWrapperProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={defaultAnimations(delay)}
      {...props}
    >
      {children}
    </motion.div>
  );
}
