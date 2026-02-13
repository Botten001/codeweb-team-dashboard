import {
  actions,
  currentProjects,
  finishedProjects,
  goals,
  ideaBacklog,
  metrics,
  snapshots,
  summary,
} from "@/data/dashboard";
import { Section } from "@/components/Section";
import { StatCard } from "@/components/StatCard";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 via-white to-zinc-100 px-4 py-10 text-zinc-900 dark:from-zinc-900 dark:via-zinc-950 dark:to-black dark:text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <header className="rounded-3xl border border-white/50 bg-white/80 p-8 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-zinc-900/70">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                Mesi mission control
              </p>
              <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-white">
                Codeweb Ops & Momentum Board
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-300">
                Real-time snapshot of everything we’re building. Keep pulses short,
                decisions fast, and handoffs clean.
              </p>
            </div>
            <div className="grid w-full gap-3 rounded-2xl border border-white/30 bg-white/70 p-5 text-sm shadow-sm dark:border-white/5 dark:bg-zinc-900/80 lg:w-auto">
              <div className="flex justify-between">
                <span className="text-zinc-500">Focus</span>
                <span className="font-medium">{summary.focus}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Next review</span>
                <span className="font-medium">{summary.nextReview}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-zinc-500">Owners</span>
                <span className="font-medium">{summary.owner}</span>
              </div>
            </div>
          </div>
        </header>

        <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {metrics.map((metric) => (
            <StatCard key={metric.label} {...metric} />
          ))}
        </section>

        <div className="grid gap-6 lg:grid-cols-3">
          <Section
            title="Current builds"
            description="What’s active right now. Each card should have owner + next blocker."
          >
            <div className="space-y-4">
              {currentProjects.map((project) => (
                <article
                  key={project.name}
                  className="rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm dark:border-white/5 dark:bg-zinc-900"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-zinc-500">{project.type}</p>
                      <h3 className="text-lg font-semibold">{project.name}</h3>
                    </div>
                    <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                      {project.status}
                    </span>
                  </div>
                  <div className="mt-3">
                    <div className="flex items-center justify-between text-xs text-zinc-500">
                      <span>Progress</span>
                      <span>{project.progress}%</span>
                    </div>
                    <div className="mt-1 h-2 rounded-full bg-zinc-100 dark:bg-zinc-800">
                      <div
                        className="h-full rounded-full bg-zinc-900 dark:bg-white"
                        style={{ width: `${project.progress}%` }}
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-4 text-sm text-zinc-500">
                    <span>Owner: {project.owner}</span>
                    <span>ETA: {project.eta}</span>
                  </div>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
                    {project.notes}
                  </p>
                </article>
              ))}
            </div>
          </Section>

          <Section
            title="Recent deliveries"
            description="Shipped work + quick outcome note."
          >
            <div className="space-y-4">
              {finishedProjects.map((project) => (
                <div
                  key={project.name}
                  className="rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm dark:border-white/5 dark:bg-zinc-900"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-zinc-500">{project.owner}</p>
                      <h3 className="text-lg font-semibold">{project.name}</h3>
                    </div>
                    <span className="text-sm text-emerald-600 dark:text-emerald-400">
                      {project.result}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-zinc-500">Shipped {project.shipped}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section
            title="Goals in play"
            description="Progress toward the things that actually matter."
          >
            <div className="space-y-5">
              {goals.map((goal) => (
                <div key={goal.title}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-sm font-semibold">{goal.title}</h3>
                      <p className="text-xs text-zinc-500">{goal.target}</p>
                    </div>
                    <span className="text-xs text-zinc-500">{goal.owner}</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-zinc-100 dark:bg-zinc-800">
                    <div
                      className="h-full rounded-full bg-emerald-500"
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Section
            title="Idea board"
            description="Stuff we might spin up when bandwidth frees."
          >
            <div className="space-y-4">
              {ideaBacklog.map((idea) => (
                <div
                  key={idea.title}
                  className="rounded-2xl border border-dashed border-zinc-200 p-4 dark:border-zinc-800"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{idea.title}</h3>
                    <span className="text-xs uppercase tracking-wide text-zinc-500">
                      {idea.impact} impact
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {idea.detail}
                  </p>
                </div>
              ))}
            </div>
          </Section>

          <Section
            title="Snapshots"
            description="Quick pulse on blockers + wins so everyone stays synced."
          >
            <div className="grid gap-4 md:grid-cols-2">
              {snapshots.map((snapshot) => (
                <div
                  key={snapshot.label}
                  className="rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm dark:border-white/5 dark:bg-zinc-900"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                    {snapshot.label}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-zinc-600 dark:text-zinc-300">
                    {snapshot.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-zinc-400">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>
        </div>

        <Section
          title="What’s next"
          description="If we only get three things done before Monday, it’s these."
          action={
            <button className="rounded-full border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-700 hover:border-zinc-900 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-200 dark:hover:border-white dark:hover:text-white">
              Mark complete
            </button>
          }
        >
          <div className="grid gap-4 md:grid-cols-3">
            {actions.map((action) => (
              <div
                key={action.title}
                className="rounded-2xl border border-zinc-100 bg-white p-4 shadow-sm dark:border-white/5 dark:bg-zinc-900"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  {action.owner}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{action.title}</h3>
                <p className="mt-4 text-sm text-zinc-500">Due {action.due}</p>
              </div>
            ))}
          </div>
        </Section>

        <footer className="rounded-3xl border border-white/40 bg-white/70 p-6 text-sm text-zinc-500 shadow-inner backdrop-blur-md dark:border-white/10 dark:bg-zinc-900/70 dark:text-zinc-400">
          Built for the Mesi crew. Update this board daily so we never wonder what’s next.
        </footer>
      </div>
    </div>
  );
}
