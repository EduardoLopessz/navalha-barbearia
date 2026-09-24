import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryPhotos } from "@/lib/data";

export function Gallery() {
  return (
    <section id="ambiente" className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Nosso espaço"
          title="Um dia normal na Barbearia Barão"
          description="Fotos reais tiradas no salão, direto do nosso Instagram."
        />

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
          {galleryPhotos.map((photo, i) => (
            <Reveal key={photo.id} delay={i * 0.05}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
