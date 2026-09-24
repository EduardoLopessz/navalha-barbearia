"use client";

import { motion } from "framer-motion";

const EASE_FLUID = [0.32, 0.72, 0, 1] as const;

const TAGLINE =
  "Bem-vindo ao clube. Aqui, cuidado masculino tem tempo, capricho e conversa boa até o último risco de navalha.";

export function TaglineReveal() {
  const words = TAGLINE.split(" ");

  return (
    <section className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <motion.p
          className="pretty text-3xl font-semibold leading-snug sm:text-5xl sm:leading-tight"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.045 }}
        >
          {words.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              className="mr-[0.3em] inline-block text-cream"
              variants={{
                hidden: { opacity: 0.28 },
                visible: { opacity: 1 },
              }}
              transition={{ duration: 0.5, ease: EASE_FLUID }}
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </section>
  );
}
