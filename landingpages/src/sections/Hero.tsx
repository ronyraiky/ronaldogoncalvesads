import { CheckCircle2, Layers, MousePointerClick, Smartphone } from "lucide-react";
import { Reveal } from "../components/Reveal";
import { Container, WhatsAppButton, WhatsAppIcon } from "../components/ui";

const trust = [
  "Estratégia, texto e design com um único profissional",
  "Layout pensado primeiro para o celular",
  "Orçamento sob medida para o seu projeto",
];

function HeroMockup() {
  return (
    <div
      role="img"
      aria-label="Ilustração de uma landing page profissional exibida em um computador e em um celular"
      className="relative mx-auto w-full max-w-[580px] pb-10 sm:pb-12"
    >
      <div aria-hidden="true" className="absolute -inset-6 -z-10 rounded-[3rem] bg-linear-to-br from-indigo-300/40 via-violet-300/30 to-emerald-200/30 blur-3xl" />

      {/* Navegador */}
      <div aria-hidden="true" className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-2xl shadow-indigo-950/15">
        <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-300" />
          </div>
          <div className="mx-auto flex w-3/5 items-center justify-center rounded-md bg-white px-3 py-1 text-[10px] font-medium text-slate-400 ring-1 ring-slate-200">
            suaempresa.com.br
          </div>
          <div className="w-10" />
        </div>

        <div className="bg-linear-to-b from-white to-indigo-50/40 p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-5 w-5 rounded-md bg-linear-to-br from-indigo-600 to-violet-500" />
              <span className="text-[11px] font-bold text-ink">Sua Marca</span>
            </div>
            <div className="hidden items-center gap-3 sm:flex">
              <span className="h-1.5 w-8 rounded-full bg-slate-200" />
              <span className="h-1.5 w-8 rounded-full bg-slate-200" />
              <span className="h-1.5 w-8 rounded-full bg-slate-200" />
            </div>
            <span className="rounded-full bg-emerald-600 px-2.5 py-1 text-[9px] font-semibold text-white">Orçamento</span>
          </div>

          <div className="mt-6 grid grid-cols-5 items-center gap-4">
            <div className="col-span-3">
              <span className="inline-block rounded-full bg-indigo-100 px-2 py-0.5 text-[9px] font-semibold text-indigo-700">
                Atendimento personalizado
              </span>
              <p className="mt-2 text-[15px] font-extrabold leading-tight tracking-tight text-ink sm:text-xl">
                Seu serviço explicado em poucos segundos
              </p>
              <div className="mt-2.5 space-y-1.5">
                <span className="block h-1.5 w-full rounded-full bg-slate-200" />
                <span className="block h-1.5 w-4/5 rounded-full bg-slate-200" />
              </div>
              <span className="mt-3.5 inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-3 py-1.5 text-[10px] font-semibold text-white shadow-md shadow-emerald-600/30">
                <WhatsAppIcon className="h-3 w-3" /> Chamar no WhatsApp
              </span>
            </div>
            <div className="col-span-2">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-linear-to-br from-indigo-500 via-violet-500 to-fuchsia-400">
                <span className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-white/20" />
                <span className="absolute -bottom-6 -left-4 h-24 w-24 rounded-full bg-white/15" />
                <span className="absolute inset-x-3 bottom-3 rounded-lg bg-white/85 p-2">
                  <span className="block h-1.5 w-2/3 rounded-full bg-slate-300" />
                  <span className="mt-1.5 block h-1.5 w-1/2 rounded-full bg-slate-200" />
                </span>
              </div>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2.5">
            {["Clareza", "Rapidez", "Contato"].map((t) => (
              <div key={t} className="rounded-xl border border-slate-100 bg-white p-2.5 shadow-sm">
                <span className="mb-2 block h-4 w-4 rounded-md bg-indigo-100" />
                <span className="block text-[10px] font-bold text-ink">{t}</span>
                <span className="mt-1.5 block h-1 w-full rounded-full bg-slate-100" />
                <span className="mt-1 block h-1 w-2/3 rounded-full bg-slate-100" />
              </div>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-between rounded-xl bg-ink px-3.5 py-3">
            <span className="text-[10px] font-semibold text-white">Vamos conversar sobre o seu projeto?</span>
            <span className="rounded-full bg-emerald-400 px-2.5 py-1 text-[9px] font-bold text-emerald-950">Falar agora</span>
          </div>
        </div>
      </div>

      {/* Celular */}
      <div
        aria-hidden="true"
        className="absolute -bottom-0 -right-1 w-[27%] min-w-[96px] animate-float-slow rounded-[1.4rem] border-[5px] border-ink bg-white shadow-2xl shadow-ink/30 sm:-right-5"
      >
        <div className="aspect-[9/18.5] overflow-hidden rounded-[1rem] bg-linear-to-b from-white to-indigo-50">
          <div className="mx-auto mt-1.5 h-1 w-8 rounded-full bg-slate-200" />
          <div className="p-2">
            <span className="block h-2.5 w-2.5 rounded bg-linear-to-br from-indigo-600 to-violet-500" />
            <p className="mt-2 text-[8px] font-extrabold leading-tight text-ink">Sua oferta, em destaque</p>
            <span className="mt-1.5 block h-1 w-full rounded-full bg-slate-200" />
            <span className="mt-1 block h-1 w-3/4 rounded-full bg-slate-200" />
            <span className="mt-2 flex items-center justify-center gap-1 rounded-full bg-emerald-600 py-1 text-[6px] font-bold text-white">
              <WhatsAppIcon className="h-2 w-2" /> WhatsApp
            </span>
            <span className="mt-2 block aspect-[16/10] rounded-md bg-linear-to-br from-indigo-400 to-violet-400" />
            <span className="mt-2 block h-1 w-full rounded-full bg-slate-200" />
            <span className="mt-1 block h-1 w-2/3 rounded-full bg-slate-200" />
          </div>
        </div>
      </div>

      {/* Etiquetas em vidro */}
      <div aria-hidden="true" className="glass absolute -left-2 top-[22%] hidden animate-float items-center gap-2.5 rounded-2xl px-3.5 py-2.5 sm:flex lg:-left-8">
        <span className="grid h-8 w-8 place-items-center rounded-xl bg-indigo-600 text-white">
          <Layers className="h-4 w-4" />
        </span>
        <span className="text-xs font-bold leading-tight text-ink">
          Estrutura
          <span className="block font-medium text-slate-500">pensada para converter</span>
        </span>
      </div>
      <div aria-hidden="true" className="glass absolute -right-1 top-[7%] hidden animate-float-slow items-center gap-2.5 rounded-2xl px-3.5 py-2.5 sm:flex lg:-right-6">
        <span className="grid h-8 w-8 place-items-center rounded-xl bg-emerald-600 text-white">
          <MousePointerClick className="h-4 w-4" />
        </span>
        <span className="text-xs font-bold leading-tight text-ink">
          Chamada clara
          <span className="block font-medium text-slate-500">para o WhatsApp</span>
        </span>
      </div>
      <div aria-hidden="true" className="glass absolute -bottom-1 left-2 flex animate-float items-center gap-2.5 rounded-2xl px-3.5 py-2.5 sm:left-6">
        <span className="grid h-8 w-8 place-items-center rounded-xl bg-violet-600 text-white">
          <Smartphone className="h-4 w-4" />
        </span>
        <span className="text-xs font-bold leading-tight text-ink">
          100% responsiva
          <span className="block font-medium text-slate-500">celular e computador</span>
        </span>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="inicio" aria-labelledby="titulo-principal" className="relative overflow-x-clip pt-28 pb-20 sm:pt-36 sm:pb-28">
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-linear-to-b from-indigo-50/70 via-white to-white" />
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />
      <div aria-hidden="true" className="absolute -top-24 left-1/2 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-linear-to-r from-indigo-300/40 via-violet-300/30 to-emerald-200/30 blur-3xl" />

      <Container className="grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-white/80 px-4 py-2 text-xs font-semibold text-indigo-700 shadow-sm backdrop-blur sm:text-sm">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Criação de landing pages e páginas de vendas
            </p>
          </Reveal>

          <Reveal delay={90}>
            <h1
              id="titulo-principal"
              className="mt-6 text-[2.5rem] font-extrabold leading-[1.05] tracking-tight text-balance text-ink sm:text-6xl lg:text-[3.6rem]"
            >
              Transforme visitantes em conversas com uma página que{" "}
              <span className="bg-linear-to-r from-indigo-600 via-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
                apresenta sua oferta com clareza.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600 text-pretty">
              Crio páginas estratégicas, modernas e responsivas para negócios que querem ser entendidos rapidamente e
              facilitar o contato pelo WhatsApp, com ou sem anúncios no Meta Ads e no Google Ads.
            </p>
          </Reveal>

          <Reveal delay={270}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <WhatsAppButton size="lg" label="Solicitar orçamento" className="w-full sm:w-auto" />
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/70 px-6 py-4 text-[15px] font-semibold text-ink backdrop-blur transition-all hover:-translate-y-0.5 hover:border-indigo-300 hover:text-indigo-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-indigo-600"
              >
                Ver exemplos de páginas
              </a>
            </div>
          </Reveal>

          <Reveal delay={360}>
            <ul className="mt-9 space-y-3">
              {trust.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[15px] text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <HeroMockup />
        </Reveal>
      </Container>
    </section>
  );
}
