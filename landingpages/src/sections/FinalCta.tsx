import { Check, ShieldCheck } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { Container, WhatsAppButton } from "../components/ui";

const tips = [
  "O tipo do seu negócio",
  "O que você quer apresentar ou vender",
  "Onde pretende divulgar a página",
];

export default function FinalCta() {
  return (
    <section id="contato" aria-labelledby="titulo-contato" className="py-20 sm:py-28">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-white shadow-2xl shadow-indigo-950/30 sm:rounded-[2.5rem] sm:px-14 sm:py-20">
            <div aria-hidden="true" className="bg-grid-dark absolute inset-0" />
            <div aria-hidden="true" className="absolute -left-20 -top-20 h-80 w-80 rounded-full bg-indigo-600/40 blur-3xl" />
            <div aria-hidden="true" className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-emerald-500/25 blur-3xl" />

            <div className="relative mx-auto max-w-3xl text-center">
              <h2 id="titulo-contato" className="text-3xl font-extrabold leading-[1.1] tracking-tight text-balance sm:text-5xl">
                Vamos conversar sobre a página do seu negócio?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
                Conte o que você faz e o que deseja alcançar. Eu explico como o serviço funciona e preparo um orçamento
                sob medida para o seu projeto.
              </p>

              <div className="mt-9 flex justify-center">
                <WhatsAppButton variant="onDark" size="lg" label="Solicitar orçamento pelo WhatsApp" className="w-full sm:w-auto" />
              </div>

              <p className="mt-4 text-sm text-slate-400">Você será direcionado ao WhatsApp com uma mensagem já pronta.</p>

              <div className="glass-dark mx-auto mt-10 max-w-lg rounded-2xl p-5 text-left">
                <p className="flex items-center gap-2 text-sm font-semibold text-white">
                  <ShieldCheck className="h-4 w-4 text-emerald-300" aria-hidden="true" />
                  Para agilizar, você pode contar na primeira mensagem:
                </p>
                <ul className="mt-3 space-y-2">
                  {tips.map((t) => (
                    <li key={t} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <Check className="h-4 w-4 shrink-0 text-emerald-300" strokeWidth={3} aria-hidden="true" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
