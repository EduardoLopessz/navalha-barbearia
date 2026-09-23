export type Service = {
  id: string;
  name: string;
  description: string;
  price: number;
  durationMinutes: number;
  icon: "scissors" | "razor" | "towel" | "fade" | "eyebrow" | "pigment";
};

export type Barber = {
  id: string;
  name: string;
  role: string;
  bio: string;
  yearsExperience: number;
  avatarSeed: string;
  instagram: string;
  workDays: number[]; // 0 = domingo ... 6 = sábado
  startHour: number; // 24h, ex: 9
  endHour: number; // 24h, ex: 20
};

export type Testimonial = {
  id: string;
  name: string;
  service: string;
  quote: string;
  rating: number;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type Booking = {
  id: string;
  serviceId: string;
  barberId: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:mm
  clientName: string;
  clientPhone: string;
  notes: string;
  createdAt: string;
};
