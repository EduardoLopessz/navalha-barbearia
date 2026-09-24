import type { Barber, Booking, Service } from "@/types";
import { business } from "@/lib/data";

const STORAGE_KEY = "barao_bookings";

export function getStoredBookings(): Booking[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveBooking(booking: Booking) {
  if (typeof window === "undefined") return;
  const current = getStoredBookings();
  const next = [...current, booking];
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
}

/** Gera os horários possíveis de um barbeiro num dia, em intervalos de 40 min. */
export function generateSlotsForDate(barber: Barber, dateStr: string): string[] {
  const date = new Date(`${dateStr}T00:00:00`);
  const weekday = date.getDay();
  if (!barber.workDays.includes(weekday)) return [];

  const slots: string[] = [];
  const stepMinutes = 40;
  let totalMinutes = barber.startHour * 60;
  const endMinutes = barber.endHour * 60;

  while (totalMinutes + stepMinutes <= endMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    slots.push(`${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`);
    totalMinutes += stepMinutes;
  }

  const now = new Date();
  const isToday = date.toDateString() === now.toDateString();
  if (!isToday) return slots;

  const nowMinutes = now.getHours() * 60 + now.getMinutes();
  return slots.filter((slot) => {
    const [h, m] = slot.split(":").map(Number);
    return h * 60 + m > nowMinutes + 30;
  });
}

export function getAvailableSlots(barber: Barber, dateStr: string): string[] {
  const allSlots = generateSlotsForDate(barber, dateStr);
  const taken = new Set(
    getStoredBookings()
      .filter((b) => b.barberId === barber.id && b.date === dateStr)
      .map((b) => b.time)
  );
  return allSlots.filter((slot) => !taken.has(slot));
}

export function buildWhatsappMessage({
  service,
  barber,
  date,
  time,
  clientName,
  notes,
}: {
  service: Service;
  barber: Barber;
  date: string;
  time: string;
  clientName: string;
  notes: string;
}) {
  const dateLabel = new Date(`${date}T00:00:00`).toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
  });

  const lines = [
    `Olá! Quero confirmar um agendamento na ${business.name}.`,
    ``,
    `Serviço: ${service.name}`,
    `Barbeiro: ${barber.name}`,
    `Data: ${dateLabel}`,
    `Horário: ${time}`,
    `Nome: ${clientName}`,
  ];
  if (notes.trim()) lines.push(`Observações: ${notes.trim()}`);

  return encodeURIComponent(lines.join("\n"));
}

export function buildWhatsappUrl(message: string) {
  return `https://wa.me/${business.phoneWhatsapp}?text=${message}`;
}
