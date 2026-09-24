import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const LABELS = ["Serviço", "Barbeiro", "Horário", "Seus dados", "Confirmar"];

export function StepIndicator({ step }: { step: number }) {
  const progress = ((step - 1) / (LABELS.length - 1)) * 100;

  return (
    <div className="relative">
      <div className="absolute left-[10%] right-[10%] top-3.5 h-0.5 -translate-y-1/2 bg-border-subtle">
        <motion.div
          className="h-full bg-gold"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
        />
      </div>

      <ol
        aria-label={`Etapa ${step} de ${LABELS.length}: ${LABELS[step - 1]}`}
        className="relative flex items-center justify-between gap-1"
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
                  "flex h-7 w-7 items-center justify-center rounded-full bg-ink text-xs font-semibold transition-colors duration-300",
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
    </div>
  );
}
