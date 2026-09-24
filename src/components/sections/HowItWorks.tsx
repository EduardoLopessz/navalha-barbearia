import { CalendarCheck, ChatCircleDots, ListChecks } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

const steps = [
  {
    icon: ListChecks,
    title: "Escolha o serviço",
    description:
      "Corte, barba ou o combo completo. Você vê o preço e a duração antes de decidir.",
  },
  {
    icon: CalendarCheck,
    title: "Escolha o barbeiro e o horário",
    description:
      "Veja a agenda real de cada profissional e marque o horário que encaixa na sua rotina.",
  },
  {
    icon: ChatCircleDots,
    title: "Confirme pelo WhatsApp",
    description: "Você recebe a confirmação na hora e um lembrete um dia antes.",
  },
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Como funciona"
          title="Três passos entre você e o próximo corte"
          align="center"
          className="mx-auto"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <div className="relative h-full rounded-2xl border border-border-subtle bg-surface-2 p-6">
                <span className="font-mono text-sm text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mt-4 flex h-10 w-10 items-center justify-center rounded-lg bg-surface-3 text-accent">
                  <step.icon size={22} weight="bold" />
                </div>
                <h3 className="font-serif-display mt-4 text-lg font-semibold text-cream">
                  {step.title}
                </h3>
                <p className="pretty mt-2 text-sm text-muted">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
