import type { Metadata } from "next";
import { Suspense } from "react";
import { BookingWizard } from "@/components/booking/BookingWizard";

export const metadata: Metadata = {
  title: "Agendar horário",
  description:
    "Escolha o serviço, o barbeiro e o horário e confirme seu agendamento pelo WhatsApp.",
};

export default function AgendarPage() {
  return (
    <Suspense fallback={null}>
      <BookingWizard />
    </Suspense>
  );
}
