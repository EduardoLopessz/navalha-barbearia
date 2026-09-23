"use client";

import { WhatsappLogo } from "@phosphor-icons/react";
import { usePathname } from "next/navigation";
import { business } from "@/lib/data";

export function WhatsAppButton() {
  const pathname = usePathname();
  const message = encodeURIComponent(
    `Olá! Vim pelo site da ${business.name} e queria tirar uma dúvida.`
  );

  if (pathname?.startsWith("/agendar")) return null;

  return (
    <a
      href={`https://wa.me/${business.phoneWhatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="tap-target safe-bottom fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-ink shadow-lg shadow-black/40 transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-90"
    >
      <WhatsappLogo size={28} weight="fill" color="#0a0a0a" />
    </a>
  );
}
