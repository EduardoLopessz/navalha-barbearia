import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "dark",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "sage";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-[680px]",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? (
        <div
          className={cn(
            "mb-3 flex items-center gap-3",
            align === "center" && "justify-center"
          )}
        >
          <span aria-hidden="true" className="h-px w-8 bg-accent" />
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {eyebrow}
          </p>
        </div>
      ) : null}
      <h2 className="font-serif-display heading-gradient balance text-3xl font-semibold sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "pretty mt-3 text-base sm:text-lg",
            tone === "sage" ? "text-sage-muted" : "text-muted"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
