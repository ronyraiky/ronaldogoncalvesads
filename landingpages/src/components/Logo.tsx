import { SITE } from "../config";
import { cn } from "../utils/cn";

function initials(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "•";
  const first = parts[0][0];
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

export default function Logo({ dark, className }: { dark?: boolean; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <span
        aria-hidden="true"
        className="grid h-10 w-10 place-items-center rounded-xl bg-linear-to-br from-indigo-600 via-violet-600 to-fuchsia-500 text-sm font-extrabold tracking-tight text-white shadow-lg shadow-indigo-500/30"
      >
        {initials(SITE.brandName)}
      </span>
      <span className="flex flex-col leading-tight">
        <span className={cn("text-[15px] font-extrabold tracking-tight", dark ? "text-white" : "text-ink")}>
          {SITE.brandName}
        </span>
        <span className={cn("text-xs font-medium", dark ? "text-slate-400" : "text-slate-500")}>{SITE.brandRole}</span>
      </span>
    </span>
  );
}
