import type { Metadata } from "next";
import { business } from "@/lib/data";

export const metadata: Metadata = {
  title: "Política de privacidade",
};

export default function PrivacidadePage() {
  return (
    <div className="mx-auto max-w-2xl px-4 pb-20 pt-32 sm:px-6">
      <h1 className="heading-gradient text-3xl font-semibold sm:text-4xl">
        Política de privacidade
      </h1>
      <div className="pretty mt-6 flex flex-col gap-5 text-sm leading-relaxed text-muted">
        <p>
          Esta página explica, de forma simples, quais dados a {business.name} coleta
          quando você usa este site e como esses dados são usados.
        </p>
        <p>
          <strong className="text-cream">Dados de agendamento.</strong> Quando você marca
          um horário, pedimos seu nome, telefone e, opcionalmente, observações sobre o
          corte. Esses dados são enviados diretamente para o nosso WhatsApp e usados
          apenas para organizar seu atendimento.
        </p>
        <p>
          <strong className="text-cream">Armazenamento local.</strong> Para mostrar seus
          agendamentos recentes e evitar conflitos de horário, guardamos uma cópia do
          agendamento no armazenamento local do seu navegador. Esses dados não saem do seu
          aparelho e podem ser apagados a qualquer momento limpando os dados do site.
        </p>
        <p>
          <strong className="text-cream">Nenhuma venda de dados.</strong> Não vendemos ou
          compartilhamos suas informações com terceiros para fins de publicidade.
        </p>
        <p>
          Dúvidas sobre seus dados podem ser enviadas para{" "}
          <a href={`mailto:${business.email}`} className="text-gold hover:underline">
            {business.email}
          </a>
          .
        </p>
      </div>
    </div>
  );
}
