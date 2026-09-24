import { InstagramLogo } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { barbers } from "@/lib/data";

export function Barbers() {
  return (
    <section id="barbeiros" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Nossa equipe"
          title="Escolha quem vai cuidar do seu corte"
          description="Marque com o Matuza, com o Richard, ou deixe em aberto que a equipe encaixa você."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {barbers.map((barber, i) => (
            <Reveal key={barber.id} delay={i * 0.08}>
              <div className="flex h-full flex-col items-center rounded-2xl border border-border-subtle bg-surface-2 p-6 text-center">
                <img
                  src={`https://api.dicebear.com/9.x/notionists/svg?seed=${encodeURIComponent(
                    barber.avatarSeed
                  )}&backgroundColor=1f1f1f`}
                  alt={`Ilustração de ${barber.name}`}
                  width={96}
                  height={96}
                  className="h-24 w-24 rounded-full border border-white/10 bg-surface-3"
                  loading="lazy"
                />
                <h3 className="mt-4 text-lg font-semibold text-cream">{barber.name}</h3>
                <p className="text-sm text-gold">{barber.role}</p>
                <p className="pretty mt-2 text-sm text-muted">{barber.bio}</p>

                <div className="mt-4 flex items-center gap-3">
                  <a
                    href={`https://instagram.com/${barber.instagram.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="tap-target flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle text-muted transition-colors duration-300 hover:text-gold"
                    aria-label={`Instagram de ${barber.name}`}
                  >
                    <InstagramLogo size={18} />
                  </a>
                  <Link
                    href={`/agendar?barbeiro=${barber.id}`}
                    className="tap-target rounded-full bg-surface-3 px-4 py-2 text-sm font-semibold text-cream transition-colors duration-300 hover:bg-elevated"
                  >
                    {barber.id === "sem-preferencia"
                      ? "Agendar sem preferência"
                      : `Agendar com ${barber.name.split(" ")[0]}`}
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
