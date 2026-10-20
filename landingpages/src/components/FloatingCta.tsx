import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { WhatsAppIcon, whatsappLinkProps } from "./ui";

/** Botão flutuante de WhatsApp: aparece após o topo da página e some quando a chamada final está visível. */
export default function FloatingCta() {
  const [scrolled, setScrolled] = useState(false);
  const [atFinal, setAtFinal] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 720);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    let io: IntersectionObserver | undefined;
    const target = document.getElementById("contato");
    if (target && typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver(([e]) => setAtFinal(e.isIntersecting), { threshold: 0.25 });
      io.observe(target);
    }
    return () => {
      window.removeEventListener("scroll", onScroll);
      io?.disconnect();
    };
  }, []);

  const show = scrolled && !atFinal;

  return (
    <a
      {...whatsappLinkProps()}
      aria-label="Conversar pelo WhatsApp"
      tabIndex={show ? 0 : -1}
      aria-hidden={!show}
      className={cn(
        "fixed bottom-4 right-4 z-40 inline-flex items-center gap-2.5 rounded-full bg-emerald-700 px-5 py-3.5 text-sm font-semibold text-white shadow-xl shadow-emerald-900/30 transition-all duration-500 hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-700 sm:bottom-6 sm:right-6",
        show ? "translate-y-0 opacity-100 animate-pulse-ring" : "pointer-events-none translate-y-6 opacity-0"
      )}
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span>Chamar no WhatsApp</span>
    </a>
  );
}
