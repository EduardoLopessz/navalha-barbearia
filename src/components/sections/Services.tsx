import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/lib/data";
import { formatDuration, formatPrice } from "@/lib/utils";

export function Services() {
  return (
    <section id="servicos" className="bg-sage py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Serviços e preços"
          title="Cada corte tem um preço justo e um tempo certo"
          description="Sem surpresa na hora de pagar. O valor e a duração aparecem antes de você escolher o horário."
          tone="sage"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 0.05}>
              <Link
                href={`/agendar?servico=${service.id}`}
                className="hover-lift group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-2xl border border-white/10 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]"
              >
                <Image
                  src={service.photo}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="photo-treated object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-transparent" />

                <div className="relative flex flex-col gap-2 p-6">
                  <h3 className="font-serif-display text-xl font-semibold text-cream">
                    {service.name}
                  </h3>
                  <p className="pretty text-sm text-cream/75">{service.description}</p>
                  <div className="mt-2 flex items-center justify-between border-t border-white/15 pt-3">
                    <div>
                      <p className="font-mono text-lg font-semibold text-cream">
                        {formatPrice(service.price)}
                      </p>
                      <p className="text-xs text-cream/60">
                        {formatDuration(service.durationMinutes)}
                      </p>
                    </div>
                    <span className="flex items-center gap-1 text-sm font-semibold text-accent">
                      Agendar
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
