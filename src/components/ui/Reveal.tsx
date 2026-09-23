"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

const EASE_FLUID = [0.32, 0.72, 0, 1] as const;

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay, ease: EASE_FLUID }}
    >
      {children}
    </motion.div>
  );
}
