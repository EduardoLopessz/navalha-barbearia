import type { Metadata } from "next";
import { business } from "@/lib/data";

export const metadata: Metadata = {
  title: "Termos de uso",
};

export default function TermosPage() {
  return (
    <div className="mx-auto max-w-2xl px-4 pb-20 pt-32 sm:px-6">
      <h1 className="heading-gradient text-3xl font-semibold sm:text-4xl">
        Termos de uso
      </h1>
      <div className="pretty mt-6 flex flex-col gap-5 text-sm leading-relaxed text-muted">
        <p>
          Ao usar o site da {business.name} para consultar serviços ou solicitar um
          agendamento, você concorda com os pontos abaixo.
        </p>
        <p>
          <strong className="text-cream">Agendamento não é garantido até a resposta.</strong>{" "}
          O formulário de agendamento monta uma mensagem para o WhatsApp da barbearia. O
          horário só fica confirmado depois que a equipe responder confirmando a
          disponibilidade.
        </p>
        <p>
          <strong className="text-cream">Cancelamento.</strong> Pedimos que cancelamentos
          ou remarcações sejam avisados com pelo menos 3 horas de antecedência pelo
          WhatsApp.
        </p>
        <p>
          <strong className="text-cream">Preços.</strong> Os valores exibidos no site
          podem ser ajustados sem aviso prévio. O preço cobrado é sempre o vigente no dia
          do atendimento.
        </p>
        <p>
          <strong className="text-cream">Uso do site.</strong> O conteúdo deste site é de
          uso informativo para clientes da {business.name} e não deve ser copiado ou
          reproduzido sem autorização.
        </p>
      </div>
    </div>
  );
}
