import Link from "next/link";
import { InstagramLogo, MapPin, Phone } from "@phosphor-icons/react/dist/ssr";
import { business } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border-subtle bg-surface-2">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="text-sm font-semibold tracking-[0.12em] text-cream">
              {business.name.toUpperCase()}
            </p>
            <p className="pretty mt-3 max-w-[260px] text-sm text-muted">
              {business.tagline}
            </p>
          </div>

          <div className="flex flex-col gap-3 text-sm text-muted">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                business.addressMapsQuery
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-target flex items-start gap-2 hover:text-cream"
            >
              <MapPin size={18} className="mt-0.5 shrink-0 text-gold" />
              {business.address}
            </a>
            <a
              href={`tel:+${business.phoneWhatsapp}`}
              className="tap-target flex items-center gap-2 hover:text-cream"
            >
              <Phone size={18} className="shrink-0 text-gold" />
              {business.phoneDisplay}
            </a>
            <a
              href={business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-target flex items-center gap-2 hover:text-cream"
            >
              <InstagramLogo size={18} className="shrink-0 text-gold" />
              {business.instagram}
            </a>
          </div>

          <div className="flex flex-col gap-3 text-sm text-muted">
            {business.hours.map((h) => (
              <div key={h.label} className="flex justify-between gap-4 sm:justify-start">
                <span>{h.label}</span>
                <span className="text-cream">{h.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-border-subtle pt-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {business.name}. Todos os direitos reservados.</p>
          <div className="flex gap-4">
            <Link href="/privacidade" className="tap-target hover:text-cream">
              Política de privacidade
            </Link>
            <Link href="/termos" className="tap-target hover:text-cream">
              Termos de uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
