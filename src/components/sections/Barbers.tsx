import { InstagramLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { barbers } from "@/lib/data";

export function Barbers() {
  return (
    <section id="barbeiros" className="bg-sage py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Nossa equipe"
          title="Escolha quem vai cuidar do seu corte"
          description="Marque com o Matuza, com o Richard, ou deixe em aberto que a equipe encaixa você."
          tone="sage"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {barbers.map((barber, i) => (
            <Reveal key={barber.id} delay={i * 0.08}>
              <TiltCard className="h-full rounded-2xl">
                <div className="flex h-full flex-col items-center rounded-2xl border border-white/10 bg-sage-2 p-6 text-center">
                  <img
                    src={`https://api.dicebear.com/9.x/notionists/svg?seed=${encodeURIComponent(
                      barber.avatarSeed
                    )}&backgroundColor=24352c`}
                    alt={`Ilustração de ${barber.name}`}
                    width={96}
                    height={96}
                    className="h-24 w-24 rounded-full border border-white/10 bg-sage"
                    loading="lazy"
                  />
                  <h3 className="font-serif-display mt-4 text-lg font-semibold text-cream">
                    {barber.name}
                  </h3>
                  <p className="text-sm text-accent">{barber.role}</p>
                  <p className="pretty mt-2 text-sm text-sage-muted">{barber.bio}</p>

                  <div className="mt-4 flex items-center gap-3">
                    <a
                      href={`https://instagram.com/${barber.instagram.replace("@", "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tap-target flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-sage-muted transition-colors duration-300 hover:text-accent"
                      aria-label={`Instagram de ${barber.name}`}
                    >
                      <InstagramLogo size={18} />
                    </a>
                    <Link
                      href={`/agendar?barbeiro=${barber.id}`}
                      className="tap-target rounded-full bg-sage px-4 py-2 text-sm font-semibold text-cream transition-colors duration-300 hover:bg-ink"
                    >
                      {barber.id === "sem-preferencia"
                        ? "Agendar sem preferência"
                        : `Agendar com ${barber.name.split(" ")[0]}`}
                    </Link>
                  </div>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
