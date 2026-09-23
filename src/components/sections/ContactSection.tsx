import { Clock, InstagramLogo, MapPin, Phone, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { business } from "@/lib/data";

export function ContactSection() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    business.addressMapsQuery
  )}&output=embed`;

  const whatsappMessage = encodeURIComponent(
    `Olá! Vim pelo site da ${business.name} e queria tirar uma dúvida.`
  );

  return (
    <section id="contato" className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Contato" title="Vem tomar um café e cortar o cabelo" />

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 rounded-2xl border border-border-subtle bg-surface-2 p-6">
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  business.addressMapsQuery
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-target flex items-start gap-3 hover:text-gold"
              >
                <MapPin size={22} className="mt-0.5 shrink-0 text-gold" />
                <span className="text-sm text-cream">{business.address}</span>
              </a>

              <a
                href={`tel:+${business.phoneWhatsapp}`}
                className="tap-target flex items-center gap-3 hover:text-gold"
              >
                <Phone size={22} className="shrink-0 text-gold" />
                <span className="text-sm text-cream">{business.phoneDisplay}</span>
              </a>

              <a
                href={business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-target flex items-center gap-3 hover:text-gold"
              >
                <InstagramLogo size={22} className="shrink-0 text-gold" />
                <span className="text-sm text-cream">{business.instagram}</span>
              </a>

              <div className="flex items-start gap-3">
                <Clock size={22} className="mt-0.5 shrink-0 text-gold" />
                <div className="flex flex-col gap-1 text-sm">
                  {business.hours.map((h) => (
                    <div key={h.label} className="flex gap-2">
                      <span className="text-muted">{h.label}:</span>
                      <span className="text-cream">{h.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${business.phoneWhatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-target flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-base font-semibold text-ink transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.96]"
            >
              <WhatsappLogo size={20} weight="fill" />
              Chamar no WhatsApp
            </a>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="h-full min-h-[320px] overflow-hidden rounded-2xl border border-border-subtle">
              <iframe
                title={`Mapa até a ${business.name}`}
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 320 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
