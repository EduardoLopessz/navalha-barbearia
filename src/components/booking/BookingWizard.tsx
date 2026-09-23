"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  CalendarCheck,
  CheckCircle,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { StepIndicator } from "@/components/booking/StepIndicator";
import { barbers, business, services } from "@/lib/data";
import {
  buildWhatsappMessage,
  buildWhatsappUrl,
  getAvailableSlots,
  saveBooking,
} from "@/lib/bookings";
import { cn, formatDateLabel, formatDuration, formatPrice } from "@/lib/utils";
import type { Booking } from "@/types";

const TOTAL_STEPS = 5;

function todayISO() {
  const d = new Date();
  const offset = d.getTimezoneOffset();
  const local = new Date(d.getTime() - offset * 60 * 1000);
  return local.toISOString().slice(0, 10);
}

export function BookingWizard() {
  const searchParams = useSearchParams();

  const [step, setStep] = useState(1);
  const [serviceId, setServiceId] = useState(searchParams.get("servico") ?? "");
  const [barberId, setBarberId] = useState(searchParams.get("barbeiro") ?? "");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [confirmed, setConfirmed] = useState<Booking | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const service = services.find((s) => s.id === serviceId);
  const barber = barbers.find((b) => b.id === barberId);

  const availableSlots = useMemo(() => {
    if (!barber || !date) return [];
    return getAvailableSlots(barber, date);
  }, [barber, date]);

  const isClosedDay = Boolean(barber && date && availableSlots.length === 0);

  function goNext() {
    const nextErrors: Record<string, string> = {};
    if (step === 1 && !service) nextErrors.service = "Escolha um serviço para continuar.";
    if (step === 2 && !barber) nextErrors.barber = "Escolha um barbeiro para continuar.";
    if (step === 3) {
      if (!date) nextErrors.date = "Escolha uma data.";
      if (!time) nextErrors.time = "Escolha um horário disponível.";
    }
    if (step === 4) {
      if (name.trim().length < 3) nextErrors.name = "Informe seu nome completo.";
      if (phone.replace(/\D/g, "").length < 10)
        nextErrors.phone = "Informe um telefone válido com DDD.";
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    setStep((s) => Math.min(TOTAL_STEPS, s + 1));
  }

  function goBack() {
    setErrors({});
    setStep((s) => Math.max(1, s - 1));
  }

  function handleConfirm() {
    if (!service || !barber) return;

    const booking: Booking = {
      // eslint-disable-next-line react-hooks/purity -- runs inside a click handler, not render
      id: `${Date.now()}`,
      serviceId: service.id,
      barberId: barber.id,
      date,
      time,
      clientName: name.trim(),
      clientPhone: phone.trim(),
      notes,
      createdAt: new Date().toISOString(),
    };

    saveBooking(booking);
    setConfirmed(booking);

    const message = buildWhatsappMessage({
      service,
      barber,
      date,
      time,
      clientName: name.trim(),
      notes,
    });
    window.open(buildWhatsappUrl(message), "_blank", "noopener,noreferrer");
  }

  function resetForm() {
    setStep(1);
    setServiceId("");
    setBarberId("");
    setDate("");
    setTime("");
    setName("");
    setPhone("");
    setNotes("");
    setConfirmed(null);
    setErrors({});
  }

  if (confirmed) {
    const confirmedService = services.find((s) => s.id === confirmed.serviceId);
    const confirmedBarber = barbers.find((b) => b.id === confirmed.barberId);

    return (
      <div className="mx-auto max-w-lg px-4 pb-20 pt-32 text-center sm:px-6">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-surface-3 text-success">
          <CheckCircle size={40} weight="fill" />
        </div>
        <h1 className="heading-gradient balance mt-6 text-3xl font-semibold">
          Agendamento enviado
        </h1>
        <p className="pretty mt-3 text-sm text-muted">
          Abrimos o WhatsApp com os detalhes para você confirmar direto com a{" "}
          {business.name}. Se a conversa não abriu, use o botão abaixo.
        </p>

        <div className="mt-6 rounded-2xl border border-border-subtle bg-surface-2 p-6 text-left">
          <dl className="flex flex-col gap-3 text-sm">
            <div className="flex justify-between">
              <dt className="text-muted">Serviço</dt>
              <dd className="text-cream">{confirmedService?.name}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted">Barbeiro</dt>
              <dd className="text-cream">{confirmedBarber?.name}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted">Data</dt>
              <dd className="text-cream">{formatDateLabel(confirmed.date)}</dd>
            </div>
            <div className="flex justify-between">
              <dt className="text-muted">Horário</dt>
              <dd className="text-cream">{confirmed.time}</dd>
            </div>
          </dl>
        </div>

        <div className="mt-6 flex flex-col gap-3">
          {confirmedService && confirmedBarber && (
            <a
              href={buildWhatsappUrl(
                buildWhatsappMessage({
                  service: confirmedService,
                  barber: confirmedBarber,
                  date: confirmed.date,
                  time: confirmed.time,
                  clientName: confirmed.clientName,
                  notes: confirmed.notes,
                })
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="tap-target flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-base font-semibold text-ink"
            >
              <WhatsappLogo size={20} weight="fill" />
              Abrir conversa no WhatsApp
            </a>
          )}
          <button
            type="button"
            onClick={resetForm}
            className="tap-target rounded-full border border-border-subtle px-6 py-3 text-base font-semibold text-cream hover:bg-surface-3"
          >
            Fazer outro agendamento
          </button>
          <Link
            href="/"
            className="tap-target text-sm text-muted hover:text-cream"
          >
            Voltar para o início
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-lg px-4 pb-32 pt-28 sm:px-6">
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={step === 1 ? undefined : goBack}
          className={cn(
            "tap-target flex h-9 w-9 items-center justify-center rounded-full border border-border-subtle text-cream",
            step === 1 && "invisible"
          )}
          aria-label="Voltar"
        >
          <ArrowLeft size={18} />
        </button>
        <h1 className="text-lg font-semibold text-cream">Agendar horário</h1>
      </div>

      <div className="mt-6">
        <StepIndicator step={step} />
      </div>

      <div className="mt-8">
        {step === 1 && (
          <fieldset className="flex flex-col gap-3">
            <legend className="mb-2 text-sm font-semibold text-cream">
              Qual serviço você quer marcar?
            </legend>
            {services.map((s) => (
              <label
                key={s.id}
                className={cn(
                  "tap-target flex cursor-pointer items-center justify-between gap-4 rounded-2xl border p-4 transition-colors duration-300",
                  serviceId === s.id
                    ? "border-gold bg-surface-3"
                    : "border-border-subtle bg-surface-2 hover:bg-surface-3"
                )}
              >
                <input
                  type="radio"
                  name="service"
                  value={s.id}
                  checked={serviceId === s.id}
                  onChange={() => {
                    setServiceId(s.id);
                    setErrors((prev) => ({ ...prev, service: "" }));
                  }}
                  className="sr-only"
                />
                <div>
                  <p className="text-sm font-semibold text-cream">{s.name}</p>
                  <p className="mt-1 text-xs text-muted">{formatDuration(s.durationMinutes)}</p>
                </div>
                <p className="font-mono text-sm font-semibold text-gold">
                  {formatPrice(s.price)}
                </p>
              </label>
            ))}
            {errors.service && <p className="text-sm text-wine">{errors.service}</p>}
          </fieldset>
        )}

        {step === 2 && (
          <fieldset className="flex flex-col gap-3">
            <legend className="mb-2 text-sm font-semibold text-cream">
              Com qual barbeiro?
            </legend>
            {barbers.map((b) => (
              <label
                key={b.id}
                className={cn(
                  "tap-target flex cursor-pointer items-center gap-4 rounded-2xl border p-4 transition-colors duration-300",
                  barberId === b.id
                    ? "border-gold bg-surface-3"
                    : "border-border-subtle bg-surface-2 hover:bg-surface-3"
                )}
              >
                <input
                  type="radio"
                  name="barber"
                  value={b.id}
                  checked={barberId === b.id}
                  onChange={() => {
                    setBarberId(b.id);
                    setTime("");
                    setErrors((prev) => ({ ...prev, barber: "" }));
                  }}
                  className="sr-only"
                />
                <img
                  src={`https://api.dicebear.com/9.x/notionists/svg?seed=${encodeURIComponent(
                    b.avatarSeed
                  )}&backgroundColor=1f1f1f`}
                  alt=""
                  width={48}
                  height={48}
                  className="h-12 w-12 shrink-0 rounded-full border border-border-subtle bg-surface-3"
                />
                <div>
                  <p className="text-sm font-semibold text-cream">{b.name}</p>
                  <p className="mt-0.5 text-xs text-muted">{b.role}</p>
                </div>
              </label>
            ))}
            {errors.barber && <p className="text-sm text-wine">{errors.barber}</p>}
          </fieldset>
        )}

        {step === 3 && (
          <div className="flex flex-col gap-5">
            <div>
              <label htmlFor="date" className="mb-2 block text-sm font-semibold text-cream">
                Escolha a data
              </label>
              <input
                id="date"
                type="date"
                min={todayISO()}
                value={date}
                onChange={(e) => {
                  setDate(e.target.value);
                  setTime("");
                  setErrors((prev) => ({ ...prev, date: "" }));
                }}
                className="tap-target w-full rounded-xl border border-border-subtle bg-surface-2 px-4 py-3 text-cream [color-scheme:dark]"
              />
              {errors.date && <p className="mt-2 text-sm text-wine">{errors.date}</p>}
            </div>

            {date && (
              <div>
                <p className="mb-2 text-sm font-semibold text-cream">
                  Horários disponíveis com {barber?.name.split(" ")[0]}
                </p>
                {isClosedDay ? (
                  <p className="rounded-xl border border-border-subtle bg-surface-2 p-4 text-sm text-muted">
                    Fechado nesse dia ou sem horários livres. Escolha outra data.
                  </p>
                ) : (
                  <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
                    {availableSlots.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => {
                          setTime(slot);
                          setErrors((prev) => ({ ...prev, time: "" }));
                        }}
                        className={cn(
                          "tap-target rounded-xl border px-3 py-2 text-sm font-medium transition-colors duration-300",
                          time === slot
                            ? "border-gold bg-gold text-ink"
                            : "border-border-subtle bg-surface-2 text-cream hover:bg-surface-3"
                        )}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                )}
                {errors.time && <p className="mt-2 text-sm text-wine">{errors.time}</p>}
              </div>
            )}
          </div>
        )}

        {step === 4 && (
          <div className="flex flex-col gap-4">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-semibold text-cream">
                Nome completo
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setErrors((prev) => ({ ...prev, name: "" }));
                }}
                autoComplete="name"
                placeholder="Seu nome"
                className="tap-target w-full rounded-xl border border-border-subtle bg-surface-2 px-4 py-3 text-cream placeholder:text-muted"
              />
              {errors.name && <p className="mt-2 text-sm text-wine">{errors.name}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-cream">
                Telefone com DDD
              </label>
              <input
                id="phone"
                type="tel"
                inputMode="tel"
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                  setErrors((prev) => ({ ...prev, phone: "" }));
                }}
                autoComplete="tel"
                placeholder="(11) 91234-5678"
                className="tap-target w-full rounded-xl border border-border-subtle bg-surface-2 px-4 py-3 text-cream placeholder:text-muted"
              />
              {errors.phone && <p className="mt-2 text-sm text-wine">{errors.phone}</p>}
            </div>

            <div>
              <label htmlFor="notes" className="mb-2 block text-sm font-semibold text-cream">
                Observações (opcional)
              </label>
              <textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                placeholder="Alguma referência de corte ou preferência?"
                className="tap-target w-full resize-none rounded-xl border border-border-subtle bg-surface-2 px-4 py-3 text-cream placeholder:text-muted"
              />
            </div>
          </div>
        )}

        {step === 5 && service && barber && (
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl border border-border-subtle bg-surface-2 p-5">
              <dl className="flex flex-col gap-3 text-sm">
                <div className="flex justify-between">
                  <dt className="text-muted">Serviço</dt>
                  <dd className="text-cream">
                    {service.name} · {formatPrice(service.price)}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted">Barbeiro</dt>
                  <dd className="text-cream">{barber.name}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted">Data</dt>
                  <dd className="text-cream">{date ? formatDateLabel(date) : "—"}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted">Horário</dt>
                  <dd className="text-cream">{time}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted">Nome</dt>
                  <dd className="text-cream">{name}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-muted">Telefone</dt>
                  <dd className="text-cream">{phone}</dd>
                </div>
              </dl>
            </div>
            <p className="pretty text-xs text-muted">
              Ao confirmar, vamos abrir o WhatsApp com esses dados prontos para você enviar
              para a {business.name}. O agendamento só é garantido depois da resposta da
              barbearia.
            </p>
          </div>
        )}
      </div>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border-subtle bg-ink/95 backdrop-blur-xl">
        <div className="safe-bottom mx-auto flex max-w-lg gap-3 px-4 py-4 sm:px-6">
          {step < TOTAL_STEPS ? (
            <button
              type="button"
              onClick={goNext}
              className="tap-target flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-base font-semibold text-ink transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-95"
            >
              Continuar
            </button>
          ) : (
            <button
              type="button"
              onClick={handleConfirm}
              className="tap-target flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-base font-semibold text-ink transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-95"
            >
              <CalendarCheck size={20} weight="bold" />
              Confirmar pelo WhatsApp
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
