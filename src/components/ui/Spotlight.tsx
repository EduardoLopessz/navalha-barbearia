export function Spotlight({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`spotlight h-[480px] w-[480px] ${className ?? ""}`}
    />
  );
}
