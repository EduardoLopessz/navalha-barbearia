# Navalha Barbearia

Site de divulgação e agendamento para uma barbearia fictícia, pensado para ser acessado principalmente pelo celular.

## O que tem no site

- Página inicial com serviços, preços, equipe de barbeiros, depoimentos, perguntas frequentes e contato (WhatsApp, telefone, endereço com mapa).
- Fluxo de agendamento em `/agendar`: escolha de serviço, barbeiro, data e horário disponível, dados do cliente e confirmação enviada pelo WhatsApp.
- Layout responsivo com prioridade mobile, navegação em formato de ilha flutuante e ajustes para uso real em celular (área segura de notch, sem zoom em inputs, feedback de toque).

## Como o agendamento funciona

Não há banco de dados nesta versão piloto. O formulário monta os horários disponíveis por barbeiro (dias e faixa de horário definidos em `src/lib/data.ts`), guarda uma cópia local no navegador para não sugerir o mesmo horário duas vezes, e ao confirmar abre uma conversa no WhatsApp da barbearia com os detalhes prontos. Para virar um produto real, o próximo passo é trocar esse armazenamento local por um banco de dados (ex: Postgres via Vercel, ou Supabase) e uma rota de API que valide conflitos de horário no servidor.

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000.

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion + Phosphor Icons.

## Personalizando

Todo o conteúdo (nome da barbearia, endereço, telefone, serviços, preços, barbeiros e perguntas frequentes) está centralizado em [`src/lib/data.ts`](src/lib/data.ts).
