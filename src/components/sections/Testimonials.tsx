import { Star } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/data";

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Quem já passou pela cadeira"
          title="Depoimentos de clientes reais"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-border-subtle bg-surface-2 p-6">
                <div className="flex gap-0.5 text-gold">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={14} weight={idx < t.rating ? "fill" : "regular"} />
                  ))}
                </div>
                <p className="pretty mt-4 flex-1 text-sm text-cream">“{t.quote}”</p>
                <div className="mt-6 border-t border-border-subtle pt-4">
                  <p className="text-sm font-semibold text-cream">{t.name}</p>
                  <p className="text-xs text-muted">{t.service}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
