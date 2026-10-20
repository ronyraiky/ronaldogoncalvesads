import { useEffect, useState } from "react";
import { Info, X } from "lucide-react";
import { WHATSAPP_MISSING_EVENT } from "../config";

/** Aviso exibido apenas enquanto o número de WhatsApp ainda não foi configurado em src/config.ts. */
export default function Toast() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer: number | undefined;
    const show = () => {
      setVisible(true);
      window.clearTimeout(timer);
      timer = window.setTimeout(() => setVisible(false), 8000);
    };
    window.addEventListener(WHATSAPP_MISSING_EVENT, show);
    return () => {
      window.removeEventListener(WHATSAPP_MISSING_EVENT, show);
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <div aria-live="polite" role="status" className="pointer-events-none fixed inset-x-0 top-20 z-[70] flex justify-center px-4">
      {visible && (
        <div className="pointer-events-auto flex max-w-md items-start gap-3 rounded-2xl bg-ink px-4 py-3.5 text-sm text-white shadow-2xl ring-1 ring-white/10">
          <Info className="mt-0.5 h-5 w-5 shrink-0 text-amber-300" aria-hidden="true" />
          <p className="leading-relaxed">
            O número de WhatsApp ainda não foi configurado. Defina-o em <strong>src/config.ts</strong> para que a conversa
            abra direto com você.
          </p>
          <button
            type="button"
            onClick={() => setVisible(false)}
            aria-label="Fechar aviso"
            className="-m-1 rounded-lg p-1 text-slate-300 transition hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
