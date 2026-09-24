"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { CalendarCheck, Star } from "@phosphor-icons/react";
import { business } from "@/lib/data";

const EASE_FLUID = [0.32, 0.72, 0, 1] as const;

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-ink pb-20 pt-32 sm:pb-28">
      <div className="absolute inset-0">
        <Image
          src="/images/barao/hero-fade.jpg"
          alt="Barbeiro finalizando um degradê na Barbearia Barão"
          fill
          priority
          sizes="100vw"
          className="photo-treated object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/70 via-ink/10 to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: EASE_FLUID }}
        className="relative mx-auto w-full max-w-6xl px-4 sm:px-6"
      >
        <div className="flex items-center gap-3">
          <span aria-hidden="true" className="h-px w-8 bg-accent" />
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Barbearia masculina · Bairro Alto, Curitiba
          </p>
        </div>

        <h1 className="font-serif-display balance mt-4 max-w-2xl text-4xl font-semibold text-cream sm:text-6xl">
          Seu estilo merece{" "}
          <span className="font-serif-display italic text-accent">atenção aos detalhes</span>.
        </h1>

        <p className="pretty mt-5 max-w-md text-base text-cream/80 sm:text-lg">
          Escolha o serviço, o barbeiro e o horário direto pelo celular. Confirmação na
          hora, sem precisar ligar.
        </p>

        <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <Link
            href="/agendar"
            className="shine-sweep tap-target flex w-full items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-base font-semibold text-ink transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.96] sm:w-auto"
          >
            <CalendarCheck size={20} weight="bold" />
            Agendar meu horário
          </Link>

          <div className="flex items-center gap-2 text-sm text-cream/80">
            <div className="flex items-center gap-0.5 text-accent">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  weight={i < Math.round(business.rating) ? "fill" : "regular"}
                />
              ))}
            </div>
            <span className="text-cream">{business.rating.toFixed(1)}</span>
            <span>no Google</span>
          </div>
        </div>
      </motion.div>

      <motion.a
        href="#servicos"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="tap-target absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.18em] text-cream/70 hover:text-cream sm:flex"
      >
        Descer
        <span className="relative h-8 w-px overflow-hidden bg-cream/30">
          <motion.span
            className="absolute inset-x-0 top-0 h-3 bg-accent"
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.a>
    </section>
  );
}
