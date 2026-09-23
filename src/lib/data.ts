import type { Barber, FaqItem, Service, Testimonial } from "@/types";

export const business = {
  name: "Navalha Barbearia",
  shortName: "Navalha",
  tagline: "Barba e cabelo tratados como ofício, não como tarefa.",
  phoneDisplay: "(11) 98421-3376",
  phoneWhatsapp: "5511984213376",
  email: "contato@navalhabarbearia.com.br",
  address: "Rua Fradique Coutinho, 682 — Pinheiros, São Paulo, SP",
  addressMapsQuery: "Rua Fradique Coutinho, 682, Pinheiros, São Paulo, SP",
  instagram: "@navalha.barbearia",
  instagramUrl: "https://instagram.com/navalha.barbearia",
  rating: 4.9,
  ratingCount: 312,
  hours: [
    { label: "Terça a sexta", value: "9h às 20h" },
    { label: "Sábado", value: "8h às 18h" },
    { label: "Domingo e segunda", value: "Fechado" },
  ],
} as const;

export const services: Service[] = [
  {
    id: "corte-classico",
    name: "Corte clássico",
    description: "Tesoura e máquina, com acabamento na navalha ao redor das orelhas e nuca.",
    price: 55,
    durationMinutes: 40,
    icon: "scissors",
  },
  {
    id: "corte-barba",
    name: "Corte + barba",
    description: "Combo completo com toalha quente, óleo e alinhamento da barba na navalha.",
    price: 85,
    durationMinutes: 65,
    icon: "razor",
  },
  {
    id: "barba-terapia",
    name: "Barba terapia",
    description: "Toalha quente, esfoliação, óleo e finalização na navalha. Só a barba.",
    price: 45,
    durationMinutes: 30,
    icon: "towel",
  },
  {
    id: "degrade-navalhado",
    name: "Degradê navalhado",
    description: "Fade baixo, médio ou alto, com contorno fechado na navalha.",
    price: 60,
    durationMinutes: 45,
    icon: "fade",
  },
  {
    id: "sobrancelha",
    name: "Sobrancelha na navalha",
    description: "Limpeza e alinhamento das sobrancelhas, sem pinça, só navalha.",
    price: 20,
    durationMinutes: 15,
    icon: "eyebrow",
  },
  {
    id: "pigmentacao-barba",
    name: "Pigmentação de barba",
    description: "Cobertura natural para falhas ou fios brancos, com produto próprio para barba.",
    price: 70,
    durationMinutes: 50,
    icon: "pigment",
  },
];

export const barbers: Barber[] = [
  {
    id: "renato-aquino",
    name: "Renato Aquino",
    role: "Especialista em degradê e barba desenhada",
    bio: "Doze anos de navalha na mão. Renato é procurado por quem quer um fade fechado e uma barba com linhas bem definidas.",
    yearsExperience: 12,
    avatarSeed: "Renato-Aquino-Navalha",
    instagram: "@renato.corta",
    workDays: [2, 3, 4, 5, 6],
    startHour: 9,
    endHour: 20,
  },
  {
    id: "diego-salvador",
    name: "Diego Salvador",
    role: "Cortes clássicos e navalha",
    bio: "Formado pela escola tradicional, Diego prefere tesoura a máquina sempre que dá e capricha em cada acabamento.",
    yearsExperience: 8,
    avatarSeed: "Diego-Salvador-Navalha",
    instagram: "@diego.barber",
    workDays: [2, 3, 4, 5, 6],
    startHour: 9,
    endHour: 20,
  },
  {
    id: "bruno-kaique",
    name: "Bruno Kaique",
    role: "Fades modernos e coloração masculina",
    bio: "Bruno acompanha as referências mais recentes e é o mais procurado por quem quer arriscar um corte diferente.",
    yearsExperience: 6,
    avatarSeed: "Bruno-Kaique-Navalha",
    instagram: "@bruno.fade",
    workDays: [2, 3, 4, 5, 6],
    startHour: 10,
    endHour: 19,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "marcos-tanaka",
    name: "Marcos Vinícius Tanaka",
    service: "Degradê navalhado com Renato",
    quote:
      "Cheguei sem hora marcada uma vez e o Renato ainda me encaixou. Da vez seguinte já agendei pelo site e foi bem mais rápido.",
    rating: 5,
  },
  {
    id: "felipe-andrade",
    name: "Felipe Andrade Souza",
    service: "Barba terapia com Diego",
    quote:
      "A toalha quente sozinha já vale a visita. Saio de lá com a barba alinhada e sem aquela vermelhidão de sempre.",
    rating: 5,
  },
  {
    id: "thiago-ramalho",
    name: "Thiago Ramalho",
    service: "Corte + barba com Bruno",
    quote:
      "Levei uma referência confusa e o Bruno soube exatamente o que dava pra fazer com o meu tipo de cabelo. Ficou melhor do que eu pedi.",
    rating: 4,
  },
];

export const faqItems: FaqItem[] = [
  {
    id: "pagamento",
    question: "Preciso pagar para reservar o horário?",
    answer:
      "Não. O agendamento é gratuito e o pagamento é feito na barbearia, em dinheiro, PIX ou cartão, depois do atendimento.",
  },
  {
    id: "remarcar",
    question: "Posso remarcar ou cancelar meu horário?",
    answer: "Sim, até 3 horas antes do horário marcado, direto pelo WhatsApp.",
  },
  {
    id: "sem-horario",
    question: "Vocês atendem sem hora marcada?",
    answer:
      "Atendemos por ordem de chegada quando há vaga na agenda, mas quem agendou tem prioridade no horário.",
  },
  {
    id: "chegada",
    question: "Quanto tempo antes eu devo chegar?",
    answer: "Chegue com 10 minutos de antecedência para não perder o horário reservado.",
  },
  {
    id: "infantil",
    question: "Corte infantil está disponível?",
    answer: "Sim, atendemos crianças a partir de 5 anos, sem custo adicional na tesoura.",
  },
  {
    id: "estacionamento",
    question: "Tem estacionamento perto?",
    answer: "Sim, o estacionamento da esquina fica a cerca de 40 metros da porta.",
  },
  {
    id: "produtos",
    question: "Quais produtos vocês usam?",
    answer: "Trabalhamos com pomadas e óleos das marcas Malbec Barber e Two Fingers.",
  },
  {
    id: "trocar-barbeiro",
    question: "Posso escolher um barbeiro diferente do que eu sempre uso?",
    answer: "Claro. Você pode trocar de barbeiro a qualquer momento na tela de agendamento.",
  },
];
