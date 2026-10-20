import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { Container, SectionHeading, WhatsAppButton } from "../components/ui";
import { cn } from "../utils/cn";

export const faqs = [
  {
    q: "Quanto custa criar uma landing page?",
    a: "O valor depende do que o seu projeto precisa: quantidade de seções, produção de textos, material disponível, integrações e prazo. Por isso, o orçamento é feito sob medida. Depois de entender o seu negócio na conversa inicial, envio uma proposta clara, com tudo o que está incluído.",
  },
  {
    q: "Qual é o prazo para a página ficar pronta?",
    a: "O prazo varia conforme o tamanho da página e a rapidez com que textos, imagens, logotipo e aprovações chegam. Combino uma previsão realista no orçamento, antes de começarmos.",
  },
  {
    q: "Posso pedir revisões?",
    a: "Sim. O processo tem uma etapa de revisão para ajustar textos, layout e detalhes antes da publicação. O número de rodadas de ajustes fica definido no orçamento, para que ambos saibam o que esperar.",
  },
  {
    q: "Preciso ter um domínio para ter a página?",
    a: "Não é obrigatório ter um antes de começar. Se você já tem um endereço próprio (como seunegocio.com.br), a página pode ser conectada a ele. Se não tem, oriento você sobre como registrar um. O custo do registro é pago ao serviço de registro escolhido.",
  },
  {
    q: "Como funciona a hospedagem?",
    a: "A página precisa estar hospedada para ficar no ar. Oriento você na escolha de uma opção adequada ao seu caso e cuido da publicação. Os custos de hospedagem, quando existirem, dependem do serviço escolhido e são informados antes da contratação.",
  },
  {
    q: "Há manutenção depois que a página é publicada?",
    a: "Ajustes e atualizações futuras, como trocar textos, imagens ou ofertas, podem ser combinados. Conversamos sobre isso no orçamento, de acordo com a sua necessidade.",
  },
  {
    q: "A página pode ter integrações?",
    a: "O botão de WhatsApp com mensagem pronta é o centro da página. Dependendo do projeto, também é possível avaliar outras integrações, como ferramentas de análise e acompanhamento de campanhas, link para o Instagram e mapa de localização. Conte o que você usa e eu verifico a viabilidade.",
  },
  {
    q: "Você também contrata e gerencia os anúncios?",
    a: "Meu serviço é a criação da página. Ela é pensada para receber visitantes vindos de campanhas no Meta Ads e no Google Ads, mas a contratação e a configuração dos anúncios ficam com você ou com quem cuida do seu tráfego. A página também funciona para quem divulga por Instagram, indicações ou pesquisa no Google.",
  },
  {
    q: "A página garante vendas?",
    a: "Não prometo resultados específicos. Uma página bem estruturada melhora a forma como a sua oferta é apresentada e facilita o contato, mas as vendas também dependem de preço, concorrência, público, atendimento e investimento em divulgação.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const baseId = useId();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section id="perguntas" aria-labelledby="titulo-perguntas" className="bg-slate-50 py-20 sm:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Container className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="titulo-perguntas"
            align="left"
            eyebrow="Perguntas frequentes"
            title="Tire suas dúvidas antes de começar."
            description="Respostas diretas sobre valores, prazos, domínio, hospedagem e mais. Se algo não estiver aqui, pergunte no WhatsApp."
          />
          <Reveal delay={240}>
            <div className="mt-8">
              <WhatsAppButton label="Perguntar no WhatsApp" message="Olá! Tenho uma dúvida sobre a criação de páginas de vendas e gostaria de conversar para solicitar um orçamento." />
            </div>
          </Reveal>
        </div>

        <ul className="space-y-3">
          {faqs.map((f, i) => {
            const open = openIndex === i;
            const btnId = `${baseId}-btn-${i}`;
            const panelId = `${baseId}-panel-${i}`;
            return (
              <Reveal as="li" key={f.q} delay={Math.min(i, 4) * 70}>
                <div
                  className={cn(
                    "rounded-2xl border bg-white transition-all duration-300",
                    open ? "border-indigo-200 shadow-lg shadow-indigo-900/5" : "border-slate-200 hover:border-slate-300"
                  )}
                >
                  <h3>
                    <button
                      id={btnId}
                      type="button"
                      aria-expanded={open}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(open ? null : i)}
                      className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-5 text-left text-base font-semibold text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:px-6 sm:text-[17px]"
                    >
                      {f.q}
                      <span
                        aria-hidden="true"
                        className={cn(
                          "grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300",
                          open ? "rotate-180 bg-indigo-600 text-white" : "bg-slate-100 text-slate-600"
                        )}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </span>
                    </button>
                  </h3>
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    className={cn("grid transition-[grid-template-rows] duration-300 ease-out", open ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}
                  >
                    <div className="overflow-hidden" inert={!open}>
                      <p className="px-5 pb-6 text-[15px] leading-relaxed text-slate-600 sm:px-6">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
