import { useEffect, useRef, useState } from "react";
import { ArrowUp, Mail, MapPin, X } from "lucide-react";
import { NAV_LINKS, SITE } from "../config";
import Logo from "./Logo";
import { Container, WhatsAppIcon, whatsappLinkProps } from "./ui";

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11.5H3V9.75Zm6.5 0h3.8v1.57h.06c.53-1 1.82-2.07 3.75-2.07 4 0 4.75 2.63 4.75 6.05v5.95h-4v-5.28c0-1.26-.02-2.88-1.76-2.88-1.76 0-2.03 1.37-2.03 2.79v5.37h-4V9.75Z" />
    </svg>
  );
}

function PrivacyDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === ref.current) onClose();
      }}
      aria-labelledby="titulo-privacidade"
      className="m-auto max-h-[85vh] w-[min(92vw,40rem)] overflow-y-auto rounded-3xl bg-white p-0 text-ink shadow-2xl backdrop:bg-ink/60 backdrop:backdrop-blur-sm"
    >
      <div className="p-6 sm:p-9">
        <div className="flex items-start justify-between gap-4">
          <h2 id="titulo-privacidade" className="text-2xl font-extrabold tracking-tight">
            Política de privacidade
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Fechar política de privacidade"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200 focus-visible:outline-2 focus-visible:outline-indigo-600"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-slate-600">
          <p>
            Esta página não possui formulários e não coleta dados pessoais diretamente. Ela serve para apresentar o serviço
            e levar você ao WhatsApp, caso queira conversar.
          </p>
          <h3 className="pt-1 text-base font-bold text-ink">Quando você clica nos botões de contato</h3>
          <p>
            Você é direcionado ao WhatsApp, que funciona sob os termos e a política de privacidade do próprio aplicativo. As
            informações que você enviar na conversa, como nome e detalhes do seu negócio, serão usadas apenas para
            responder ao seu contato e elaborar um orçamento.
          </p>
          <h3 className="pt-1 text-base font-bold text-ink">Seus direitos</h3>
          <p>
            Conforme a Lei Geral de Proteção de Dados (LGPD), você pode solicitar a consulta, a correção ou a exclusão das
            informações que compartilhou durante o atendimento, entrando em contato pelos canais indicados no rodapé.
          </p>
          <h3 className="pt-1 text-base font-bold text-ink">Compartilhamento</h3>
          <p>Os dados da conversa não são vendidos nem compartilhados com terceiros para fins de publicidade.</p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="mt-7 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Entendi
        </button>
      </div>
    </dialog>
  );
}

export default function Footer() {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const year = new Date().getFullYear();

  const social = [
    SITE.instagram && { href: SITE.instagram, label: "Instagram", icon: <InstagramIcon /> },
    SITE.linkedin && { href: SITE.linkedin, label: "LinkedIn", icon: <LinkedinIcon /> },
  ].filter(Boolean) as { href: string; label: string; icon: React.ReactNode }[];

  const linkClass =
    "rounded text-sm text-slate-400 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300";

  return (
    <footer className="bg-ink text-white">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-12 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Logo dark />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              Criação de landing pages e páginas de vendas com estratégia, texto e design para negócios que querem gerar
              contatos pela internet.
            </p>
            {social.length > 0 && (
              <ul className="mt-6 flex gap-3" aria-label="Redes sociais">
                {social.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${s.label} (abre em nova aba)`}
                      className="grid h-11 w-11 place-items-center rounded-full bg-white/8 text-slate-200 ring-1 ring-white/10 transition-all hover:-translate-y-0.5 hover:bg-white/15 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
                    >
                      {s.icon}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <nav aria-label="Links do rodapé">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">Navegação</h2>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 md:grid-cols-1">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className={linkClass}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">Contato</h2>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a {...whatsappLinkProps()} className="inline-flex items-center gap-2.5 text-slate-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300">
                  <WhatsAppIcon className="h-4 w-4 text-emerald-400" />
                  Conversar pelo WhatsApp
                </a>
              </li>
              {SITE.email && (
                <li>
                  <a href={`mailto:${SITE.email}`} className="inline-flex items-center gap-2.5 text-slate-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300">
                    <Mail className="h-4 w-4 text-indigo-300" aria-hidden="true" />
                    {SITE.email}
                  </a>
                </li>
              )}
              {SITE.location && (
                <li className="flex items-center gap-2.5 text-slate-400">
                  <MapPin className="h-4 w-4 text-indigo-300" aria-hidden="true" />
                  {SITE.location}
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row sm:items-center">
          <p className="text-sm text-slate-400">
            © {year} {SITE.brandName}. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-5">
            <button type="button" onClick={() => setPrivacyOpen(true)} className={`${linkClass} underline-offset-4 hover:underline`}>
              Política de privacidade
            </button>
            <a
              href="#inicio"
              className="inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-2 text-sm font-medium text-slate-200 ring-1 ring-white/10 transition-all hover:-translate-y-0.5 hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-300"
            >
              <ArrowUp className="h-4 w-4" aria-hidden="true" />
              Voltar ao topo
            </a>
          </div>
        </div>
      </Container>
      <PrivacyDialog open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </footer>
  );
}
