import Image from "next/image";
import Link from "next/link";
import { CalendarCheck } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-36">
      <div className="absolute inset-0">
        <Image
          src="/images/barao/gallery-acabamento-navalha.jpg"
          alt=""
          fill
          sizes="100vw"
          className="photo-treated object-cover"
        />
        <div className="absolute inset-0 bg-ink/80" />
      </div>

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            Agende agora
          </p>
          <h2 className="font-serif-display balance mt-3 text-3xl font-semibold text-cream sm:text-5xl">
            Seu próximo corte{" "}
            <span className="font-serif-display italic text-accent">começa aqui</span>.
          </h2>
          <p className="pretty mt-4 text-base text-cream/80 sm:text-lg">
            Leva menos de 2 minutos e você escolhe exatamente o barbeiro e o horário que
            quer.
          </p>
          <Link
            href="/agendar"
            className="shine-sweep tap-target mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-base font-semibold text-ink transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.96]"
          >
            <CalendarCheck size={20} weight="bold" />
            Agendar meu horário
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
