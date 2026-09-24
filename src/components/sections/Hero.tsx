import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, ListMagnifyingGlass, Star } from "@phosphor-icons/react/dist/ssr";
import { business } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-10">
        <div className="w-full max-w-[680px] text-center lg:text-left">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.14em] text-gold">
            Barbearia em Bairro Alto, Curitiba
          </p>
          <h1 className="heading-gradient balance text-4xl font-semibold sm:text-5xl lg:text-6xl">
            Seu corte, no seu horário, sem fila de espera
          </h1>
          <p className="pretty mt-4 text-base text-muted sm:text-lg">
            Escolha o serviço, o barbeiro e o horário direto pelo celular. Você recebe a
            confirmação na hora, sem precisar ligar.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <Link
              href="/agendar"
              className="tap-target flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-base font-semibold text-ink transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.96] sm:w-auto"
            >
              <CalendarCheck size={20} weight="bold" />
              Agendar meu horário
            </Link>
            <a
              href="#servicos"
              className="tap-target flex w-full items-center justify-center gap-2 rounded-full border border-border-subtle px-6 py-3 text-base font-semibold text-cream transition-colors duration-300 hover:bg-surface-3 sm:w-auto"
            >
              <ListMagnifyingGlass size={20} />
              Ver serviços e preços
            </a>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2 text-sm text-muted lg:justify-start">
            <div className="flex items-center gap-0.5 text-gold">
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

        <div className="relative flex w-full max-w-xs items-center justify-center lg:max-w-sm">
          <div className="relative aspect-[3/4] w-full overflow-hidden rounded-3xl border border-white/10">
            <Image
              src="/images/barao/hero-fade.jpg"
              alt="Barbeiro finalizando um degradê na Barbearia Barão"
              fill
              priority
              sizes="(min-width: 1024px) 384px, 320px"
              className="object-cover"
            />
          </div>

          <div className="absolute -right-4 top-6 rounded-2xl border border-border-subtle bg-surface-2 px-4 py-3 text-left shadow-lg shadow-black/40">
            <p className="text-xs text-muted">Avaliação</p>
            <p className="text-sm font-semibold text-cream">{business.rating.toFixed(1)} no Google</p>
          </div>

          <div className="absolute -left-6 bottom-8 rounded-2xl border border-border-subtle bg-surface-2 px-4 py-3 text-left shadow-lg shadow-black/40">
            <p className="text-xs text-muted">Também temos</p>
            <p className="text-sm font-semibold text-cream">Barão Kids</p>
          </div>
        </div>
      </div>
    </section>
  );
}
