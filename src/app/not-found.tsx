import Link from "next/link";
import { CalendarCheck, House } from "@phosphor-icons/react/dist/ssr";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-lg flex-col items-center justify-center px-4 pt-24 text-center sm:px-6">
      <span className="font-mono text-sm text-accent">Erro 404</span>
      <h1 className="heading-gradient balance mt-3 text-4xl font-semibold sm:text-5xl">
        Essa página saiu para cortar o cabelo
      </h1>
      <p className="pretty mt-4 text-base text-muted">
        A página que você procura não existe ou foi movida. Volte para o início ou marque
        seu horário direto.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="tap-target flex items-center justify-center gap-2 rounded-full border border-border-subtle px-6 py-3 text-base font-semibold text-cream hover:bg-surface-3"
        >
          <House size={20} />
          Voltar ao início
        </Link>
        <Link
          href="/agendar"
          className="tap-target flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-base font-semibold text-ink"
        >
          <CalendarCheck size={20} weight="bold" />
          Agendar horário
        </Link>
      </div>
    </div>
  );
}
