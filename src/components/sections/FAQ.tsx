"use client";

import { CaretDown } from "@phosphor-icons/react";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { faqItems } from "@/lib/data";
import { cn } from "@/lib/utils";

export function FAQ() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0].id);

  return (
    <section id="faq" className="bg-ink py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Perguntas frequentes"
          title="Antes de agendar, tire suas dúvidas"
          align="center"
          className="mx-auto"
        />

        <div className="mt-10 flex flex-col gap-3">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <Reveal key={item.id}>
                <div className="rounded-2xl border border-border-subtle bg-surface-2">
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? null : item.id)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${item.id}`}
                    className="tap-target flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span className="text-sm font-semibold text-cream sm:text-base">
                      {item.question}
                    </span>
                    <CaretDown
                      aria-hidden="true"
                      size={18}
                      className={cn(
                        "shrink-0 text-muted transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
                        isOpen && "rotate-180 text-accent"
                      )}
                    />
                  </button>
                  <div
                    id={`faq-answer-${item.id}`}
                    className={cn(
                      "grid overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)]",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    )}
                  >
                    <div className="min-h-0">
                      <p className="pretty px-5 pb-4 text-sm text-muted">{item.answer}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
