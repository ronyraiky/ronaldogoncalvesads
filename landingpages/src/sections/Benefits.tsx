import { Megaphone, MessageSquareText, MousePointerClick, Navigation, Smartphone, UserPlus } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { Container, SectionHeading } from "../components/ui";

const benefits = [
  {
    icon: MessageSquareText,
    title: "Comunicação mais clara",
    text: "Sua oferta explicada em linguagem simples, na ordem certa e sem rodeios.",
  },
  {
    icon: Smartphone,
    title: "Design responsivo",
    text: "A página se adapta a celulares, tablets e computadores, mantendo leitura e botões confortáveis.",
  },
  {
    icon: MousePointerClick,
    title: "Chamadas para ação estratégicas",
    text: "Botões posicionados nos momentos em que o visitante está pronto para dar o próximo passo.",
  },
  {
    icon: Navigation,
    title: "Experiência de navegação",
    text: "Hierarquia visual limpa e carregamento leve, para que a pessoa encontre o que precisa com facilidade.",
  },
  {
    icon: UserPlus,
    title: "Geração de contatos",
    text: "O caminho até a sua conversa no WhatsApp fica curto, simples e visível.",
  },
  {
    icon: Megaphone,
    title: "Alinhamento com campanhas",
    text: "A mensagem da página conversa com o anúncio, o que ajuda a manter a coerência de quem clicou.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" aria-labelledby="titulo-beneficios" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="titulo-beneficios"
          eyebrow="Benefícios"
          title="O que uma página bem estruturada muda na sua comunicação."
          description="Cada elemento tem uma função: ajudar a pessoa a entender, confiar e entrar em contato."
        />

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal as="li" key={b.title} delay={(i % 3) * 100}>
              <article className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-indigo-200 hover:shadow-2xl hover:shadow-indigo-900/10">
                <div aria-hidden="true" className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-linear-to-br from-indigo-100 to-violet-100 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-indigo-50 text-indigo-600 ring-1 ring-indigo-100 transition-all duration-300 group-hover:bg-linear-to-br group-hover:from-indigo-600 group-hover:to-violet-600 group-hover:text-white group-hover:ring-transparent">
                  <b.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="relative mt-5 text-lg font-bold text-ink">{b.title}</h3>
                <p className="relative mt-2.5 text-[15px] leading-relaxed text-slate-600">{b.text}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
