interface StatCardProps {
  label: string;
  value: string | number;
  delta?: string;
}

export function StatCard({ label, value, delta }: StatCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-100 bg-white px-5 py-4 shadow-sm dark:border-white/5 dark:bg-zinc-900">
      <p className="text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
        {label}
      </p>
      <p className="mt-2 text-2xl font-semibold text-zinc-900 dark:text-white">
        {value}
      </p>
      {delta && (
        <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">{delta}</p>
      )}
    </div>
  );
}
