"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { type PointerEvent, type ReactNode, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export function TiltCard({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);
  const springX = useSpring(x, { stiffness: 220, damping: 20 });
  const springY = useSpring(y, { stiffness: 220, damping: 20 });

  const rotateX = useTransform(springY, [0, 1], [7, -7]);
  const rotateY = useTransform(springX, [0, 1], [-7, 7]);
  const glareBackground = useTransform([springX, springY], ([gx, gy]: number[]) =>
    `radial-gradient(240px circle at ${gx * 100}% ${gy * 100}%, color-mix(in oklab, white 12%, transparent), transparent 70%)`
  );

  function handlePointerMove(e: PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse" || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width);
    y.set((e.clientY - rect.top) / rect.height);
  }

  function handlePointerEnter(e: PointerEvent<HTMLDivElement>) {
    if (e.pointerType === "mouse") setHovering(true);
  }

  function handlePointerLeave() {
    setHovering(false);
    x.set(0.5);
    y.set(0.5);
  }

  return (
    <motion.div
      ref={ref}
      onPointerMove={handlePointerMove}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={cn("relative [transform-style:preserve-3d]", className)}
    >
      {children}
      <motion.div
        aria-hidden="true"
        animate={{ opacity: hovering ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
        style={{ background: glareBackground }}
      />
    </motion.div>
  );
}
