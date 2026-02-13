interface StatCardProps {
  label: string;
  value: string | number;
  delta?: string;
}

export function StatCard({ label, value, delta }: StatCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#191c2b] via-[#11131d] to-[#0b0d15] px-5 py-4 shadow-[0_15px_60px_rgba(0,0,0,0.45)]">
      <div className="absolute inset-0 opacity-40">
        <div className="h-full w-full bg-[radial-gradient(circle_at_top,#6236ff44,transparent_60%)]" />
      </div>
      <div className="relative">
        <p className="text-[11px] uppercase tracking-[0.3em] text-white/40">
          {label}
        </p>
        <p className="mt-3 text-3xl font-semibold text-white">{value}</p>
        {delta && <p className="mt-1 text-xs text-emerald-400">{delta}</p>}
      </div>
    </div>
  );
}
