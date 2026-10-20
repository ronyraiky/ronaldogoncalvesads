import { ArrowUpRight, Bike, Briefcase, HeartPulse, Rocket, Scissors, Store, Wrench } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { Container, SectionHeading, WhatsAppIcon, whatsappLinkProps } from "../components/ui";

const audiences = [
  { icon: Store, title: "Empresas locais", text: "Lojas e comércios que querem ser encontrados e entendidos na sua região." },
  { icon: Briefcase, title: "Profissionais autônomos", text: "Consultores, instrutores e especialistas que vendem o próprio trabalho." },
  { icon: Wrench, title: "Prestadores de serviços", text: "Quem precisa explicar o serviço e receber pedidos de orçamento com facilidade." },
  { icon: Bike, title: "Delivery", text: "Cardápio em destaque e pedido direto, sem complicação para o cliente." },
  { icon: HeartPulse, title: "Clínicas", text: "Apresentação clara de tratamentos e agendamento facilitado." },
  { icon: Scissors, title: "Negócios de beleza", text: "Serviços, trabalhos e reserva de horário com visual cuidadoso." },
  { icon: Rocket, title: "Empreendedores", text: "Quem está lançando uma oferta e precisa de uma página para validar e divulgar." },
];

export default function Audience() {
  return (
    <section id="para-quem" aria-labelledby="titulo-publico" className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          id="titulo-publico"
          eyebrow="Para quem é"
          title="Para negócios que querem ser mais bem compreendidos."
          description="Se você depende de pessoas entrando em contato para fechar negócio, uma página estratégica pode ajudar."
        />

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a, i) => (
            <Reveal as="li" key={a.title} delay={(i % 4) * 90}>
              <article className="group h-full rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-900/5">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-slate-100 text-slate-700 transition-colors duration-300 group-hover:bg-indigo-600 group-hover:text-white">
                  <a.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-bold text-ink">{a.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{a.text}</p>
              </article>
            </Reveal>
          ))}
          <Reveal as="li" delay={270}>
            <a
              {...whatsappLinkProps(
                "Olá! Tenho interesse em criar uma página de vendas para o meu negócio, mas não sei se o meu segmento se encaixa. Gostaria de conversar e solicitar um orçamento."
              )}
              className="group relative flex h-full min-h-[11rem] flex-col justify-between overflow-hidden rounded-3xl bg-linear-to-br from-indigo-600 via-violet-600 to-fuchsia-600 p-6 text-white shadow-lg shadow-indigo-900/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600"
            >
              <div aria-hidden="true" className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/15" />
              <WhatsAppIcon className="relative h-7 w-7" />
              <div className="relative">
                <h3 className="text-base font-bold leading-snug">Seu segmento não está na lista?</h3>
                <p className="mt-1.5 inline-flex items-center gap-1 text-sm font-medium text-indigo-100">
                  Fale comigo e vamos avaliar
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
                </p>
              </div>
            </a>
          </Reveal>
        </ul>
      </Container>
    </section>
  );
}
