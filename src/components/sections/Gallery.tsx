"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Lightbox } from "@/components/ui/Lightbox";
import { galleryPhotos } from "@/lib/data";
import { cn } from "@/lib/utils";

// Alguns quadros ganham mais espaço no bento grid pra evitar um mosaico uniforme.
const SPANS = ["sm:col-span-2 sm:row-span-2", "", "", "", "sm:col-span-2", ""];

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const activePhoto = active !== null ? galleryPhotos[active] : null;

  return (
    <section id="ambiente" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Nosso espaço"
          title="Um dia normal na Barbearia Barão"
          description="Fotos reais tiradas no salão, direto do nosso Instagram. Toque em uma foto para ampliar."
        />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:auto-rows-[160px] sm:grid-cols-4 sm:gap-4">
          {galleryPhotos.map((photo, i) => (
            <Reveal
              key={photo.id}
              delay={i * 0.05}
              className={cn("aspect-square h-full sm:aspect-auto", SPANS[i])}
            >
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Ampliar foto: ${photo.alt}`}
                className="tap-target group relative block h-full w-full overflow-hidden rounded-2xl border border-white/10 active:scale-[0.98]"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 640px) 25vw, 50vw"
                  className="photo-treated object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <Lightbox photo={activePhoto} onClose={() => setActive(null)} />
    </section>
  );
}
