import { cn } from "@/lib/utils";

const LABELS = ["Serviço", "Barbeiro", "Horário", "Seus dados", "Confirmar"];

export function StepIndicator({ step }: { step: number }) {
  return (
    <ol
      aria-label={`Etapa ${step} de ${LABELS.length}: ${LABELS[step - 1]}`}
      className="flex items-center justify-between gap-1"
    >
      {LABELS.map((label, i) => {
        const index = i + 1;
        const isDone = index < step;
        const isCurrent = index === step;
        return (
          <li
            key={label}
            aria-current={isCurrent ? "step" : undefined}
            className="flex flex-1 flex-col items-center gap-2"
          >
            <div
              aria-hidden="true"
              className={cn(
                "flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold transition-colors duration-300",
                isDone && "bg-gold text-ink",
                isCurrent && "border-2 border-gold text-gold",
                !isDone && !isCurrent && "border border-border-subtle text-muted"
              )}
            >
              {index}
            </div>
            <span
              className={cn(
                "hidden text-center text-xs sm:block",
                isCurrent ? "text-cream" : "text-muted"
              )}
            >
              {label}
            </span>
          </li>
        );
      })}
    </ol>
  );
}
