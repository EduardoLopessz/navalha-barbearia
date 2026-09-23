import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
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
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-gold">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="heading-gradient balance text-3xl font-semibold sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="pretty mt-3 text-base text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
