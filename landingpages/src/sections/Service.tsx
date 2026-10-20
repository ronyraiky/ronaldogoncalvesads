import { ArrowRight, Check, MessageCircle, Search, Target } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { Container, SectionHeading, WhatsAppButton } from "../components/ui";

const flow = [
  {
    icon: Search,
    step: "1",
    title: "A pessoa chega",
    text: "Vinda de um anúncio, do Instagram, do Google ou de uma indicação, ela abre a sua página.",
  },
  {
    icon: Target,
    step: "2",
    title: "Entende a oferta",
    text: "Em poucos segundos, vê o que você faz, como funciona e por que vale a pena conversar.",
  },
  {
    icon: MessageCircle,
    step: "3",
    title: "Chama no WhatsApp",
    text: "Com um botão claro e uma mensagem pronta, dá o primeiro passo sem fricção.",
  },
];

const included = [
  "Estrutura planejada para a sua oferta",
  "Textos escritos com foco em clareza e ação",
  "Design moderno alinhado à sua marca",
  "Versão otimizada para celular e computador",
  "Botões de contato pelo WhatsApp",
  "Publicação da página no ar",
];

export default function Service() {
  return (
    <section id="servico" aria-labelledby="titulo-servico" className="relative bg-slate-50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="titulo-servico"
          eyebrow="O serviço"
          title="Uma página com um único objetivo: levar o visitante a falar com você."
          description="Uma landing page é uma página focada em uma oferta específica. Sem menus longos e sem distrações, ela conduz a leitura até o contato."
        />

        <ol className="relative mt-16 grid gap-6 md:grid-cols-3">
          <div aria-hidden="true" className="absolute left-[16%] right-[16%] top-9 hidden border-t-2 border-dashed border-indigo-200 md:block" />
          {flow.map((f, i) => (
            <Reveal as="li" key={f.title} delay={i * 120} className="relative">
              <div className="group h-full rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-900/5">
                <span className="relative mx-auto grid h-[4.5rem] w-[4.5rem] place-items-center rounded-2xl bg-linear-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/30 transition-transform duration-300 group-hover:scale-105">
                  <f.icon className="h-8 w-8" aria-hidden="true" />
                  <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-white text-xs font-extrabold text-indigo-700 shadow ring-1 ring-indigo-100">
                    <span className="sr-only">Passo </span>
                    {f.step}
                  </span>
                </span>
                <h3 className="mt-6 text-xl font-bold text-ink">{f.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-slate-600">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={100}>
          <div className="glass relative mt-10 overflow-hidden rounded-[2rem] p-7 sm:p-10">
            <div aria-hidden="true" className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-indigo-300/30 blur-3xl" />
            <div className="relative grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
              <div>
                <h3 className="text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">O que você recebe</h3>
                <p className="mt-3 leading-relaxed text-slate-600">
                  Cuido da estratégia, dos textos e do visual para você ter uma página pronta para divulgar. Os detalhes
                  de cada projeto são definidos no orçamento.
                </p>
                <div className="mt-6">
                  <WhatsAppButton label="Quero entender como funciona" />
                </div>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-3 rounded-2xl bg-white/80 p-4 text-[15px] font-medium leading-snug text-slate-800 ring-1 ring-slate-200/70">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                      <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
        <p className="mt-6 flex items-center justify-center gap-2 text-sm text-slate-500">
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
          Veja a seguir como isso se transforma em benefícios para o seu negócio.
        </p>
      </Container>
    </section>
  );
}
