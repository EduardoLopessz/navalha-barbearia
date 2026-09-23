import Link from "next/link";
import { CalendarCheck } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="heading-gradient balance text-3xl font-semibold sm:text-5xl">
            Marque seu horário antes que a agenda da semana feche
          </h2>
          <p className="pretty mt-4 text-base text-muted sm:text-lg">
            Leva menos de 2 minutos e você escolhe exatamente o barbeiro e o horário que
            quer.
          </p>
          <Link
            href="/agendar"
            className="tap-target mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-semibold text-ink transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-95"
          >
            <CalendarCheck size={20} weight="bold" />
            Agendar meu horário
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
