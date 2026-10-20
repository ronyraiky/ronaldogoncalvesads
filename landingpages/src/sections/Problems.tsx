import { EyeOff, Compass, UserMinus, Smartphone } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { Container, SectionHeading } from "../components/ui";

const problems = [
  {
    icon: EyeOff,
    title: "Oferta apresentada de forma confusa",
    text: "Quando o visitante não entende rápido o que você vende, para quem e por que escolher você, ele sai da página.",
  },
  {
    icon: Compass,
    title: "Falta de direcionamento",
    text: "Sem um caminho claro, a pessoa se perde entre informações e não sabe qual é o próximo passo.",
  },
  {
    icon: UserMinus,
    title: "Dificuldade de transformar visitantes em contatos",
    text: "Interesse existe, mas sem uma chamada clara e fácil de usar, o contato acaba não acontecendo.",
  },
  {
    icon: Smartphone,
    title: "Experiência ruim no celular",
    text: "A maior parte das pessoas chega pelo celular. Páginas lentas ou difíceis de ler afastam possíveis clientes.",
  },
];

export default function Problems() {
  return (
    <section id="desafios" aria-labelledby="titulo-desafios" className="py-20 sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading
            id="titulo-desafios"
            align="left"
            eyebrow="Os desafios"
            title="Divulgar não basta se a página não ajuda a pessoa a decidir."
            description="Você pode investir em anúncios, redes sociais e indicações. Se o visitante chega e não entende sua oferta, a oportunidade se perde no meio do caminho."
          />
          <Reveal delay={240}>
            <p className="mt-6 border-l-2 border-indigo-500 pl-4 text-base font-medium leading-relaxed text-ink">
              Uma página estratégica organiza a mensagem e mostra o próximo passo com clareza.
            </p>
          </Reveal>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {problems.map((p, i) => (
            <Reveal as="li" key={p.title} delay={i * 90}>
              <article className="group h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-900/5">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-rose-50 text-rose-600 ring-1 ring-rose-100 transition-colors group-hover:bg-indigo-50 group-hover:text-indigo-600 group-hover:ring-indigo-100">
                  <p.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-bold leading-snug text-ink">{p.title}</h3>
                <p className="mt-2.5 text-[15px] leading-relaxed text-slate-600">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </ul>
      </Container>
    </section>
  );
}
