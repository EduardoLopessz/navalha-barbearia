"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { business } from "@/lib/data";

const EASE_FLUID = [0.32, 0.72, 0, 1] as const;

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#barbeiros", label: "Barbeiros" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#ambiente", label: "Ambiente" },
  { href: "#faq", label: "Perguntas" },
  { href: "#contato", label: "Contato" },
];

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

export function NavBar() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const wasOpenRef = useRef(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    const mainEl = document.getElementById("conteudo");
    const footerEl = document.querySelector("footer");
    if (open) {
      mainEl?.setAttribute("inert", "");
      footerEl?.setAttribute("inert", "");
    } else {
      mainEl?.removeAttribute("inert");
      footerEl?.removeAttribute("inert");
    }

    return () => {
      document.body.style.overflow = "";
      mainEl?.removeAttribute("inert");
      footerEl?.removeAttribute("inert");
    };
  }, [open]);

  useEffect(() => {
    if (!open) {
      if (wasOpenRef.current) triggerRef.current?.focus();
      wasOpenRef.current = false;
      return;
    }
    wasOpenRef.current = true;

    const firstLink = overlayRef.current?.querySelector<HTMLElement>(FOCUSABLE_SELECTOR);
    firstLink?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab" || !overlayRef.current) return;

      const focusable = Array.from(
        overlayRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4">
        <div className="mt-6 flex w-max items-center gap-6 rounded-full border border-border-subtle bg-surface-2/80 py-2 pl-4 pr-2 backdrop-blur-xl">
          <Link
            href="/"
            className="tap-target text-sm font-semibold tracking-[0.12em] text-cream"
            onClick={() => setOpen(false)}
          >
            {business.shortName.toUpperCase()}
          </Link>

          <nav aria-label="Navegação principal" className="hidden items-center gap-5 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="tap-target text-sm text-muted transition-colors duration-300 hover:text-cream"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <Link
            href="/agendar"
            className="tap-target hidden rounded-full bg-gold px-3 py-2 text-sm font-semibold text-ink transition-transform duration-300 active:scale-[0.96] md:inline-block"
          >
            Agendar
          </Link>

          <button
            ref={triggerRef}
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            aria-controls="menu-mobile"
            onClick={() => setOpen((v) => !v)}
            className="tap-target relative flex h-9 w-9 items-center justify-center rounded-full bg-surface-3 md:hidden"
          >
            <span
              className={`absolute h-[1.5px] w-4 bg-cream transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? "translate-y-0 rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              className={`absolute h-[1.5px] w-4 bg-cream transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="menu-mobile"
            ref={overlayRef}
            role="dialog"
            aria-modal="true"
            aria-label="Menu de navegação"
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-ink/90 backdrop-blur-2xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE_FLUID }}
          >
            <nav aria-label="Navegação principal" className="flex flex-col items-center gap-6">
              {links.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="tap-target text-2xl font-semibold text-cream"
                  initial={{ opacity: 0, y: 48 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + i * 0.05,
                    ease: EASE_FLUID,
                  }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 48 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + links.length * 0.05,
                  ease: EASE_FLUID,
                }}
              >
                <Link
                  href="/agendar"
                  onClick={() => setOpen(false)}
                  className="tap-target mt-2 inline-block rounded-full bg-gold px-6 py-3 text-base font-semibold text-ink"
                >
                  Agendar horário
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
