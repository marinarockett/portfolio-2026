"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Refined easing — matches Framer's default spring feel
const EASE = [0.16, 1, 0.3, 1] as const;
const DURATION = 0.85;

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  direction?: "up" | "left" | "none";
}

export function FadeIn({ children, delay = 0, className = "", direction = "up" }: FadeInProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const yVal = direction === "up" ? 36 : 0;
  const xVal = direction === "left" ? -36 : 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: yVal, x: xVal }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : { opacity: 0, y: yVal, x: xVal }}
      transition={{ duration: DURATION, delay, ease: EASE }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeInStagger({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function FadeInItem({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 28 },
        visible: { opacity: 1, y: 0, transition: { duration: DURATION, ease: EASE } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
