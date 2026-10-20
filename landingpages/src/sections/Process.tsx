import { ClipboardList, MessagesSquare, PenTool, Rocket, Route, SearchCheck } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { Container, SectionHeading, WhatsAppButton } from "../components/ui";

const steps = [
  {
    icon: MessagesSquare,
    title: "Conversa inicial",
    text: "Pelo WhatsApp, você me conta sobre o negócio e o que pretende com a página. Eu explico como funciona e tiro as dúvidas.",
  },
  {
    icon: ClipboardList,
    title: "Briefing",
    text: "Reunimos as informações essenciais: oferta, público, diferenciais, materiais disponíveis e objetivo da página.",
  },
  {
    icon: Route,
    title: "Planejamento da estrutura",
    text: "Defino a ordem das seções e o caminho do visitante até o contato, antes de começar o visual.",
  },
  {
    icon: PenTool,
    title: "Conteúdo e design",
    text: "Escrevo os textos e crio o design, com identidade visual profissional e foco em leitura no celular.",
  },
  {
    icon: SearchCheck,
    title: "Revisão",
    text: "Você analisa a página e solicita os ajustes combinados. Refinamos até ela estar pronta para ir ao ar.",
  },
  {
    icon: Rocket,
    title: "Publicação",
    text: "Coloco a página no ar, testo os botões e links e deixo tudo pronto para você começar a divulgar.",
  },
];

export default function Process() {
  return (
    <section id="processo" aria-labelledby="titulo-processo" className="relative overflow-hidden bg-ink py-20 text-white sm:py-28">
      <div aria-hidden="true" className="bg-grid-dark absolute inset-0" />
      <div aria-hidden="true" className="absolute -left-32 top-10 h-96 w-96 rounded-full bg-indigo-600/25 blur-3xl" />
      <div aria-hidden="true" className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-violet-600/20 blur-3xl" />

      <Container className="relative">
        <SectionHeading
          id="titulo-processo"
          dark
          eyebrow="Etapas do trabalho"
          title="Um processo simples, claro e acompanhado de perto."
          description="Você sabe o que está acontecendo em cada fase, do primeiro contato até a página no ar."
        />

        <ol className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={(i % 3) * 110}>
              <div className="glass-dark group relative h-full rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-400/40 hover:bg-white/10">
                <div className="flex items-start justify-between">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-linear-to-br from-indigo-500 to-violet-500 text-white shadow-lg shadow-indigo-900/40 transition-transform duration-300 group-hover:scale-110">
                    <s.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <span aria-hidden="true" className="text-5xl font-extrabold leading-none text-white/10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-bold text-white">
                  <span className="sr-only">Etapa {i + 1}: </span>
                  {s.title}
                </h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-slate-300">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={100}>
          <div className="mt-14 flex justify-center">
            <WhatsAppButton variant="onDark" label="Iniciar a conversa inicial" />
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
