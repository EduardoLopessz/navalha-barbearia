import type { Barber, FaqItem, Service } from "@/types";

export const business = {
  name: "Barbearia Barão",
  shortName: "Barão",
  tagline: "Estilo e sofisticação em cada corte e barba.",
  phoneDisplay: "(41) 99946-8020",
  phoneWhatsapp: "5541999468020",
  email: "contato@barbeariabarao.com.br",
  address: "Rua José de Oliveira Franco, 576 — Bairro Alto, Curitiba, PR",
  addressMapsQuery: "Rua José de Oliveira Franco, 576, Bairro Alto, Curitiba, PR",
  instagram: "@barbeariabarao._",
  instagramUrl: "https://instagram.com/barbeariabarao._",
  googleUrl:
    "https://www.google.com/maps/place/BARBEARIA+BAR%C3%83O+E+BAR%C3%83O+KIDS/@-25.4041065,-49.2105215,17z",
  rating: 4.8,
  // Horário estimado a partir do Google Maps (só confirmamos "abre quinta às 9h").
  // Confirme os dias e horários reais antes de divulgar.
  hours: [
    { label: "Terça a sexta", value: "9h às 19h" },
    { label: "Sábado", value: "9h às 17h" },
    { label: "Domingo e segunda", value: "Fechado" },
  ],
} as const;

// Preços e durações são estimativas de referência — ainda não confirmados
// com o preço real praticado na Barbearia Barão.
export const services: Service[] = [
  {
    id: "corte-classico",
    name: "Corte clássico",
    description: "Tesoura e máquina, com acabamento na navalha ao redor das orelhas e nuca.",
    price: 45,
    durationMinutes: 40,
    icon: "scissors",
    photo: "/images/barao/gallery-detalhe-maquina.jpg",
  },
  {
    id: "corte-barba",
    name: "Corte + barba",
    description: "Combo completo com toalha quente, óleo e alinhamento da barba na navalha.",
    price: 70,
    durationMinutes: 65,
    icon: "razor",
    photo: "/images/barao/gallery-barba-quente.jpg",
  },
  {
    id: "barba-terapia",
    name: "Barba terapia",
    description: "Toalha quente, esfoliação, óleo e finalização na navalha. Só a barba.",
    price: 35,
    durationMinutes: 30,
    icon: "towel",
    photo: "/images/barao/gallery-acabamento-navalha.jpg",
  },
  {
    id: "degrade-navalhado",
    name: "Degradê navalhado",
    description: "Fade baixo, médio ou alto, com contorno fechado na navalha.",
    price: 50,
    durationMinutes: 45,
    icon: "fade",
    photo: "/images/barao/gallery-espelho.jpg",
  },
  {
    id: "corte-infantil",
    name: "Corte infantil (Barão Kids)",
    description: "Atendimento pensado para crianças, com paciência e cadeira temática.",
    price: 40,
    durationMinutes: 35,
    icon: "eyebrow",
    photo: "/images/barao/gallery-barao-kids.jpg",
  },
  {
    id: "sobrancelha",
    name: "Sobrancelha na navalha",
    description: "Limpeza e alinhamento das sobrancelhas, sem pinça, só navalha.",
    price: 20,
    durationMinutes: 15,
    icon: "pigment",
    photo: "/images/barao/gallery-kids-carrinho.jpg",
  },
];

// Só confirmamos os nomes Matuza (dono) e Richard. O terceiro horário fica
// como "sem preferência" em vez de inventar o nome de outro colega.
export const barbers: Barber[] = [
  {
    id: "matuza",
    name: "Matuza",
    role: "Dono e barbeiro",
    bio: "Cuida de cada detalhe da Barbearia Barão, do primeiro corte ao acabamento na navalha.",
    yearsExperience: 0,
    avatarSeed: "Matuza-Barbearia-Barao",
    instagram: business.instagram,
    workDays: [2, 3, 4, 5, 6],
    startHour: 9,
    endHour: 19,
  },
  {
    id: "richard",
    name: "Richard",
    role: "Barbeiro",
    bio: "Faz parte da equipe da Barbearia Barão, do corte ao acabamento.",
    yearsExperience: 0,
    avatarSeed: "Richard-Barbearia-Barao",
    instagram: business.instagram,
    workDays: [2, 3, 4, 5, 6],
    startHour: 9,
    endHour: 19,
  },
  {
    id: "sem-preferencia",
    name: "Sem preferência",
    role: "Qualquer barbeiro disponível",
    bio: "Não tem barbeiro favorito ainda? A equipe Barão encaixa você com quem estiver livre no horário.",
    yearsExperience: 0,
    avatarSeed: "Equipe-Barbearia-Barao",
    instagram: business.instagram,
    workDays: [2, 3, 4, 5, 6],
    startHour: 9,
    endHour: 19,
  },
];

export const galleryPhotos = [
  {
    id: "barba-quente",
    src: "/images/barao/gallery-barba-quente.jpg",
    alt: "Barbeiro fazendo a barba de um cliente com toalha quente na Barbearia Barão",
  },
  {
    id: "detalhe-maquina",
    src: "/images/barao/gallery-detalhe-maquina.jpg",
    alt: "Detalhe do acabamento com máquina no corte de cabelo",
  },
  {
    id: "barao-kids",
    src: "/images/barao/gallery-barao-kids.jpg",
    alt: "Criança sorrindo durante o corte de cabelo na cadeira do Barão Kids",
  },
  {
    id: "espelho",
    src: "/images/barao/gallery-espelho.jpg",
    alt: "Barbeiro mostrando o resultado do corte no espelho para o cliente",
  },
  {
    id: "acabamento-navalha",
    src: "/images/barao/gallery-acabamento-navalha.jpg",
    alt: "Acabamento na navalha na nuca do cliente, com poste de barbeiro ao fundo",
  },
  {
    id: "kids-carrinho",
    src: "/images/barao/gallery-kids-carrinho.jpg",
    alt: "Barbeiro e criança sorrindo na cadeira infantil em formato de carrinho",
  },
] as const;

export const faqItems: FaqItem[] = [
  {
    id: "pagamento",
    question: "Preciso pagar para reservar o horário?",
    answer:
      "Não. O agendamento é gratuito e o pagamento é feito na barbearia, depois do atendimento.",
  },
  {
    id: "remarcar",
    question: "Posso remarcar ou cancelar meu horário?",
    answer: "Pode, é só avisar com antecedência direto pelo WhatsApp da Barbearia Barão.",
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
    answer:
      "Sim, esse é o Barão Kids: atendimento pensado para crianças, com cadeira temática e paciência de sobra.",
  },
  {
    id: "levar",
    question: "Preciso levar alguma coisa?",
    answer: "Não, só a sua disposição. Toalhas e todo o material do corte já ficam por nossa conta.",
  },
  {
    id: "protese",
    question: "Como funciona a prótese capilar?",
    answer:
      "A Barbearia Barão também faz avaliação e aplicação de prótese capilar. Fale com a equipe pelo WhatsApp para agendar essa avaliação.",
  },
  {
    id: "trocar-barbeiro",
    question: "Posso escolher um barbeiro diferente do que eu sempre uso?",
    answer: "Claro. Você pode trocar de barbeiro a qualquer momento na tela de agendamento.",
  },
];
