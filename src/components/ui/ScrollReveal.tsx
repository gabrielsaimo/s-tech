"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  direction?: "up" | "down" | "left" | "right" | "scale" | "rotate";
  delay?: number;
  duration?: number;
  once?: boolean;
  parallax?: boolean;
  parallaxSpeed?: number;
}

export function ScrollReveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 0.6,
  once = true,
  parallax = false,
  parallaxSpeed = 0.5,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-50px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100 * parallaxSpeed, -100 * parallaxSpeed]);

  const directionVariants = {
    up: { y: 60, rotateX: 10 },
    down: { y: -60, rotateX: -10 },
    left: { x: 60, rotateY: -5 },
    right: { x: -60, rotateY: 5 },
    scale: { scale: 0.8, opacity: 0 },
    rotate: { rotate: -10, scale: 0.9 },
  };

  const getInitialState = () => {
    const base = directionVariants[direction];
    return {
      opacity: 0,
      filter: "blur(10px)",
      ...base,
    };
  };

  const getFinalState = () => ({
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    rotate: 0,
    rotateX: 0,
    rotateY: 0,
    filter: "blur(0px)",
  });

  if (parallax) {
    return (
      <motion.div ref={ref} style={{ y }} className={className}>
        <motion.div
          initial={getInitialState()}
          animate={isInView ? getFinalState() : getInitialState()}
          transition={{
            duration,
            delay,
            ease: [0.25, 0.4, 0.25, 1],
          }}
        >
          {children}
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={getInitialState()}
      animate={isInView ? getFinalState() : getInitialState()}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
      className={className}
      style={{ perspective: 1000 }}
    >
      {children}
    </motion.div>
  );
}

// New component for staggered children animations
interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}

export function StaggerContainer({ 
  children, 
  className,
  staggerDelay = 0.1 
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ 
  children, 
  className 
}: { 
  children: ReactNode; 
  className?: string 
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
        visible: { 
          opacity: 1, 
          y: 0, 
          filter: "blur(0px)",
          transition: {
            duration: 0.5,
            ease: [0.25, 0.4, 0.25, 1],
          }
        },
      }}
    >
      {children}
    </motion.div>
  );
}

