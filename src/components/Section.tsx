import { ReactNode } from "react";

interface SectionProps {
  title: string;
  description?: string;
  children: ReactNode;
  action?: ReactNode;
}

export function Section({ title, description, children, action }: SectionProps) {
  return (
    <section className="rounded-2xl border border-white/10 bg-[#0e101b]/70 p-6 shadow-[0_20px_80px_rgba(5,6,10,0.45)] backdrop-blur-xl">
      <header className="mb-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] text-white/40">
            {title}
          </p>
          {description && (
            <p className="mt-1 text-sm text-white/60">{description}</p>
          )}
        </div>
        {action}
      </header>
      <div className="space-y-4">{children}</div>
    </section>
  );
}
