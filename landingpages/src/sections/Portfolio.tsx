import type { CSSProperties } from "react";
import { Hammer, Info, Sparkles, Stethoscope, UtensilsCrossed, type LucideIcon } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { Container, SectionHeading, WhatsAppButton } from "../components/ui";

type Concept = {
  name: string;
  segment: string;
  description: string;
  focus: string[];
  brand: string;
  headline: string;
  sub: string;
  cta: string;
  benefits: [string, string, string];
  steps: [string, string, string];
  icon: LucideIcon;
  theme: { accent: string; dark: string; soft: string; bg: string };
};

const concepts: Concept[] = [
  {
    name: "Clínica odontológica",
    segment: "Saúde",
    description: "Página para apresentar tratamentos com clareza e facilitar o agendamento de uma avaliação.",
    focus: ["Agendamento", "Confiança", "Dúvidas comuns"],
    brand: "Clínica Sorriso",
    headline: "Cuidado com o seu sorriso, do início ao fim",
    sub: "Conheça os tratamentos e agende sua avaliação.",
    cta: "Agendar avaliação",
    benefits: ["Atendimento humano", "Ambiente acolhedor", "Plano de tratamento"],
    steps: ["Avaliação", "Planejamento", "Tratamento"],
    icon: Stethoscope,
    theme: { accent: "#0d9488", dark: "#134e4a", soft: "#ccfbf1", bg: "#f0fdfa" },
  },
  {
    name: "Delivery de marmitas",
    segment: "Alimentação",
    description: "Página com cardápio em destaque, regiões atendidas e pedido direto pelo WhatsApp.",
    focus: ["Cardápio", "Pedido rápido", "Região de entrega"],
    brand: "Sabor Caseiro",
    headline: "Marmitas caseiras entregues no horário do almoço",
    sub: "Veja o cardápio da semana e faça seu pedido.",
    cta: "Fazer pedido",
    benefits: ["Cardápio variado", "Entrega local", "Pedido simples"],
    steps: ["Escolha", "Envie o pedido", "Receba"],
    icon: UtensilsCrossed,
    theme: { accent: "#ea580c", dark: "#7c2d12", soft: "#ffedd5", bg: "#fffaf5" },
  },
  {
    name: "Estúdio de beleza",
    segment: "Beleza",
    description: "Página elegante com serviços, galeria de trabalhos e reserva de horário em poucos toques.",
    focus: ["Serviços", "Galeria", "Reserva de horário"],
    brand: "Studio Bela",
    headline: "Realce a sua beleza com cuidado e atenção",
    sub: "Conheça os serviços e reserve o seu horário.",
    cta: "Reservar horário",
    benefits: ["Profissionais dedicadas", "Produtos selecionados", "Horários flexíveis"],
    steps: ["Escolha o serviço", "Reserve", "Relaxe"],
    icon: Sparkles,
    theme: { accent: "#c026d3", dark: "#701a75", soft: "#fae8ff", bg: "#fdf8fe" },
  },
  {
    name: "Reformas e manutenção",
    segment: "Serviços",
    description: "Página para prestadores de serviços explicarem o que fazem e receberem pedidos de orçamento.",
    focus: ["Orçamento", "Serviços oferecidos", "Etapas do trabalho"],
    brand: "Obra Certa",
    headline: "Reformas e reparos com planejamento e combinado claro",
    sub: "Conte o que você precisa e receba um orçamento.",
    cta: "Pedir orçamento",
    benefits: ["Visita técnica", "Orçamento detalhado", "Acompanhamento"],
    steps: ["Contato", "Orçamento", "Execução"],
    icon: Hammer,
    theme: { accent: "#d97706", dark: "#1e293b", soft: "#fef3c7", bg: "#f8fafc" },
  },
];

function MiniPage({ c }: { c: Concept }) {
  const { accent, dark, soft, bg } = c.theme;
  return (
    <div className="mini-scroll" style={{ background: bg, color: dark }}>
      {/* topo */}
      <div className="flex items-center justify-between px-5 py-3.5" style={{ background: "#fff" }}>
        <div className="flex items-center gap-2">
          <span className="h-5 w-5 rounded-md" style={{ background: accent }} />
          <span className="text-[11px] font-extrabold">{c.brand}</span>
        </div>
        <div className="flex items-center gap-2.5">
          <span className="h-1.5 w-7 rounded-full" style={{ background: soft }} />
          <span className="h-1.5 w-7 rounded-full" style={{ background: soft }} />
          <span className="rounded-full px-2.5 py-1 text-[8px] font-bold text-white" style={{ background: accent }}>
            {c.cta}
          </span>
        </div>
      </div>

      {/* herói */}
      <div className="grid grid-cols-5 items-center gap-4 px-5 pb-7 pt-7">
        <div className="col-span-3">
          <p className="text-[18px] font-extrabold leading-[1.1] tracking-tight">{c.headline}</p>
          <p className="mt-2 text-[9px] leading-snug opacity-70">{c.sub}</p>
          <span className="mt-3 inline-block rounded-full px-3 py-1.5 text-[9px] font-bold text-white" style={{ background: accent }}>
            {c.cta}
          </span>
        </div>
        <div className="col-span-2">
          <div
            className="relative grid aspect-square place-items-center overflow-hidden rounded-2xl"
            style={{ background: `linear-gradient(135deg, ${accent}, ${dark})` }}
          >
            <span className="absolute -right-5 -top-5 h-20 w-20 rounded-full bg-white/15" />
            <c.icon className="relative h-12 w-12 text-white" strokeWidth={1.5} />
          </div>
        </div>
      </div>

      {/* benefícios */}
      <div className="grid grid-cols-3 gap-2.5 px-5 pb-7">
        {c.benefits.map((b) => (
          <div key={b} className="rounded-xl bg-white p-3 shadow-sm">
            <span className="mb-2 block h-5 w-5 rounded-lg" style={{ background: soft }} />
            <span className="block text-[9px] font-bold leading-tight">{b}</span>
            <span className="mt-2 block h-1 w-full rounded-full bg-slate-100" />
            <span className="mt-1 block h-1 w-2/3 rounded-full bg-slate-100" />
          </div>
        ))}
      </div>

      {/* como funciona */}
      <div className="px-5 py-7" style={{ background: soft }}>
        <p className="text-center text-[12px] font-extrabold">Como funciona</p>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {c.steps.map((s, i) => (
            <div key={s} className="text-center">
              <span className="mx-auto grid h-7 w-7 place-items-center rounded-full text-[10px] font-extrabold text-white" style={{ background: accent }}>
                {i + 1}
              </span>
              <span className="mt-2 block text-[9px] font-bold leading-tight">{s}</span>
            </div>
          ))}
        </div>
      </div>

      {/* galeria */}
      <div className="grid grid-cols-3 gap-2 px-5 py-7">
        {[0, 1, 2].map((n) => (
          <span key={n} className="block aspect-[4/5] rounded-xl" style={{ background: `linear-gradient(${150 + n * 40}deg, ${accent}${n === 1 ? "" : "cc"}, ${dark}${n === 2 ? "" : "bb"})` }} />
        ))}
      </div>

      {/* chamada final */}
      <div className="px-5 py-8 text-center text-white" style={{ background: dark }}>
        <p className="text-[13px] font-extrabold leading-tight">Pronto para dar o próximo passo?</p>
        <span className="mt-3 inline-block rounded-full bg-emerald-400 px-3.5 py-1.5 text-[9px] font-bold text-emerald-950">
          Chamar no WhatsApp
        </span>
      </div>
      <div className="flex items-center justify-between px-5 py-4">
        <span className="h-1.5 w-16 rounded-full bg-slate-200" />
        <span className="h-1.5 w-10 rounded-full bg-slate-200" />
      </div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" aria-labelledby="titulo-portfolio" className="relative bg-slate-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="titulo-portfolio"
          eyebrow="Portfólio visual"
          title="Exemplos de como a sua página pode ser."
          description="Passe o cursor sobre cada exemplo para ver a página inteira em movimento."
        />

        <Reveal delay={100}>
          <p className="mx-auto mt-8 flex max-w-2xl items-start gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-relaxed text-amber-900">
            <Info className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
            <span>
              <strong>Projetos conceituais.</strong> Os exemplos abaixo foram criados para demonstrar estrutura, estilo e
              organização de conteúdo. Não representam clientes ou resultados reais.
            </span>
          </p>
        </Reveal>

        <ul className="mt-12 grid gap-8 md:grid-cols-2">
          {concepts.map((c, i) => (
            <Reveal as="li" key={c.name} delay={(i % 2) * 120}>
              <article className="group h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-indigo-900/10">
                <div className="p-3 pb-0">
                  <div
                    role="img"
                    aria-label={`Prévia do conceito de página para ${c.name.toLowerCase()}`}
                    className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
                  >
                    <div aria-hidden="true" className="flex items-center gap-2 border-b border-slate-100 bg-slate-50 px-3 py-2">
                      <span className="h-2 w-2 rounded-full bg-rose-300" />
                      <span className="h-2 w-2 rounded-full bg-amber-300" />
                      <span className="h-2 w-2 rounded-full bg-emerald-300" />
                      <span className="mx-auto rounded bg-white px-3 py-0.5 text-[9px] text-slate-400 ring-1 ring-slate-200">
                        exemplo-conceitual.com.br
                      </span>
                    </div>
                    <div aria-hidden="true" className="mini-frame" style={{ "--frame-h": "320px" } as CSSProperties}>
                      <MiniPage c={c} />
                    </div>
                  </div>
                </div>
                <div className="p-6 sm:p-7">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 ring-1 ring-indigo-100">
                      {c.segment}
                    </span>
                    <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-800 ring-1 ring-amber-200">
                      Projeto conceitual
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-ink">{c.name}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-slate-600">{c.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-2" aria-label="Pontos de foco da página">
                    {c.focus.map((f) => (
                      <li key={f} className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-700">
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={100}>
          <div className="mt-14 flex flex-col items-center gap-4 text-center">
            <p className="max-w-md text-lg font-semibold text-ink">Quer uma página como estas, feita para o seu negócio?</p>
            <WhatsAppButton label="Conversar sobre o meu projeto" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
