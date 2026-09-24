"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { X } from "@phosphor-icons/react";
import { useEffect, useRef } from "react";

const EASE_FLUID = [0.32, 0.72, 0, 1] as const;

export function Lightbox({
  photo,
  onClose,
}: {
  photo: { src: string; alt: string } | null;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<Element | null>(null);

  useEffect(() => {
    if (photo) {
      triggerRef.current = document.activeElement;
      closeRef.current?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      if (triggerRef.current instanceof HTMLElement) triggerRef.current.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [photo]);

  useEffect(() => {
    if (!photo) return;
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [photo, onClose]);

  return (
    <AnimatePresence>
      {photo && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={photo.alt}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/95 p-4 backdrop-blur-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: EASE_FLUID }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.35, ease: EASE_FLUID }}
            className="relative aspect-[3/4] w-full max-w-md"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="480px"
              className="photo-treated rounded-2xl object-cover"
            />
          </motion.div>

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Fechar imagem"
            className="tap-target safe-top absolute right-4 flex h-11 w-11 items-center justify-center rounded-full bg-surface-2 text-cream active:scale-[0.96]"
          >
            <X size={22} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
