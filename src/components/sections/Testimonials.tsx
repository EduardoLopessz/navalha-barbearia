import { InstagramLogo, Star } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { business } from "@/lib/data";

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-sage py-20 sm:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Reputação"
          title="Avaliado por quem já passou pela cadeira"
          align="center"
          className="mx-auto"
          tone="sage"
        />

        <Reveal className="mt-12">
          <div className="flex flex-col items-center gap-6 rounded-2xl border border-white/10 bg-sage-2 p-8 text-center sm:flex-row sm:justify-center sm:gap-10 sm:text-left">
            <div>
              <p className="font-serif-display text-5xl font-semibold text-accent">
                {business.rating.toFixed(1).replace(".", ",")}
              </p>
              <div className="mt-2 flex justify-center gap-0.5 text-accent sm:justify-start">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    weight={i < Math.round(business.rating) ? "fill" : "regular"}
                  />
                ))}
              </div>
              <a
                href={business.googleUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-target mt-2 inline-block text-sm text-sage-muted hover:text-cream"
              >
                Ver no Google →
              </a>
            </div>

            <div className="hidden h-16 w-px bg-white/15 sm:block" />

            <div>
              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-target flex items-center justify-center gap-2 text-cream hover:text-accent sm:justify-start"
              >
                <InstagramLogo size={20} />
                <span className="text-sm font-semibold">{business.instagram}</span>
              </a>
              <p className="pretty mt-2 max-w-[280px] text-sm text-sage-muted">
                Acompanhe cortes, bastidores e o Barão Kids direto no Instagram.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
