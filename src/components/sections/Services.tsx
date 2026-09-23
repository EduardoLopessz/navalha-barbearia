import {
  Drop,
  Eye,
  PaintBrush,
  Scissors,
  Sparkle,
  Wind,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/data";
import type { Service } from "@/types";
import { formatDuration, formatPrice } from "@/lib/utils";

const ICONS: Record<Service["icon"], typeof Scissors> = {
  scissors: Scissors,
  razor: Wind,
  towel: Drop,
  fade: Sparkle,
  eyebrow: Eye,
  pigment: PaintBrush,
};

export function Services() {
  return (
    <section id="servicos" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Serviços e preços"
          title="Cada corte tem um preço justo e um tempo certo"
          description="Sem surpresa na hora de pagar. O valor e a duração aparecem antes de você escolher o horário."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = ICONS[service.icon];
            return (
              <Reveal key={service.id}>
                <div className="hover-lift flex h-full flex-col rounded-2xl border border-border-subtle bg-surface-2 p-6 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-3 text-gold">
                    <Icon size={22} weight="bold" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-cream">
                    {service.name}
                  </h3>
                  <p className="pretty mt-2 flex-1 text-sm text-muted">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-end justify-between border-t border-border-subtle pt-4">
                    <div>
                      <p className="font-mono text-xl font-semibold text-cream">
                        {formatPrice(service.price)}
                      </p>
                      <p className="text-xs text-muted">
                        {formatDuration(service.durationMinutes)}
                      </p>
                    </div>
                    <Link
                      href={`/agendar?servico=${service.id}`}
                      className="tap-target text-sm font-semibold text-gold hover:text-gold-strong"
                    >
                      Agendar →
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
