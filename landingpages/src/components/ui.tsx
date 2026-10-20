import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "../utils/cn";
import {
  WHATSAPP_MISSING_EVENT,
  buildWhatsAppUrl,
  hasWhatsAppNumber,
} from "../config";
import { Reveal } from "./Reveal";

export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8", className)}>{children}</div>;
}

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={cn("h-5 w-5", className)}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

/** Propriedades comuns a todos os links de WhatsApp da página. */
export function whatsappLinkProps(message?: string) {
  return {
    href: buildWhatsAppUrl(message),
    target: "_blank" as const,
    rel: "noopener noreferrer",
    onClick: () => {
      if (!hasWhatsAppNumber) {
        window.dispatchEvent(new Event(WHATSAPP_MISSING_EVENT));
      }
    },
  };
}

type WhatsAppButtonProps = {
  label?: string;
  variant?: "primary" | "onDark";
  size?: "md" | "lg";
  className?: string;
  message?: string;
};

export function WhatsAppButton({
  label = "Solicitar orçamento pelo WhatsApp",
  variant = "primary",
  size = "md",
  className,
  message,
}: WhatsAppButtonProps) {
  return (
    <a
      {...whatsappLinkProps(message)}
      className={cn(
        "group/btn relative inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition-all duration-300 ease-out",
        "hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-4",
        size === "lg" ? "px-7 py-4 text-base sm:text-lg" : "px-6 py-3.5 text-[15px]",
        variant === "primary" &&
          "bg-emerald-700 text-white shadow-lg shadow-emerald-900/25 hover:bg-emerald-800 hover:shadow-xl hover:shadow-emerald-900/30 focus-visible:outline-emerald-700",
        variant === "onDark" &&
          "bg-emerald-400 text-emerald-950 shadow-lg shadow-emerald-500/20 hover:bg-emerald-300 hover:shadow-emerald-400/30 focus-visible:outline-emerald-300",
        className
      )}
    >
      <WhatsAppIcon className="h-5 w-5 shrink-0" />
      <span>{label}</span>
      <ArrowRight
        aria-hidden="true"
        className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1"
      />
    </a>
  );
}

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  dark?: boolean;
  id?: string;
};

export function SectionHeading({ eyebrow, title, description, align = "center", dark, id }: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-xl")}>
      <Reveal>
        <p
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em]",
            dark ? "glass-dark text-indigo-200" : "bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100"
          )}
        >
          <span className={cn("h-1.5 w-1.5 rounded-full", dark ? "bg-indigo-300" : "bg-indigo-500")} aria-hidden="true" />
          {eyebrow}
        </p>
      </Reveal>
      <Reveal delay={80}>
        <h2
          id={id}
          className={cn(
            "mt-5 text-3xl font-extrabold leading-[1.12] tracking-tight text-balance sm:text-4xl lg:text-[2.7rem]",
            dark ? "text-white" : "text-ink"
          )}
        >
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={160}>
          <p className={cn("mt-5 text-base leading-relaxed text-pretty sm:text-lg", dark ? "text-slate-300" : "text-slate-600")}>
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
