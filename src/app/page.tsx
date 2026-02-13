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
  const hasProjects = currentProjects.length > 0;
  const hasIdeas = ideaBacklog.length > 0;
  const hasActions = actions.length > 0;

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
                Real snapshot of what matters. No filler, only the things we actually own.
              </p>
            </div>
            <div className="grid w-full gap-4 rounded-2xl border border-white/30 bg-white/70 p-5 text-sm shadow-sm dark:border-white/5 dark:bg-zinc-900/80 lg:w-auto">
              {[
                { label: "Focus", value: summary.focus },
                { label: "Next review", value: summary.nextReview },
                { label: "Owners", value: summary.owner },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1 text-left">
                  <span className="text-xs uppercase tracking-[0.3em] text-zinc-500">
                    {item.label}
                  </span>
                  <span className="text-base font-semibold leading-tight text-zinc-900 dark:text-white">
                    {item.value}
                  </span>
                </div>
              ))}
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
            description={
              hasProjects
                ? "Active builds with owner + blocker"
                : "No active builds logged yet. Add the first one."
            }
          >
            {hasProjects ? (
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
                    <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
                      Owner: {project.owner} • ETA: {project.eta}
                    </p>
                    <p className="mt-2 text-sm text-zinc-500">{project.notes}</p>
                  </article>
                ))}
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-zinc-200 p-6 text-sm text-zinc-500 dark:border-zinc-800">
                Nothing live yet. Log the first build when it hits design/dev.
              </div>
            )}
          </Section>

          <Section
            title="Recent deliveries"
            description="Shipped work only."
          >
            <div className="space-y-4">
              {finishedProjects.length ? (
                finishedProjects.map((project) => (
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
                ))
              ) : (
                <div className="rounded-2xl border border-dashed border-zinc-200 p-6 text-sm text-zinc-500 dark:border-zinc-800">
                  Nothing shipped yet. Fill once we deliver.
                </div>
              )}
            </div>
          </Section>

          <Section
            title="Goals in play"
            description="Track only what we actually commit to."
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
            description={
              hasIdeas ? "Stuff we might spin up" : "No ideas logged. Drop them when ready."
            }
          >
            {hasIdeas ? (
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
            ) : (
              <div className="rounded-2xl border border-dashed border-zinc-200 p-6 text-sm text-zinc-500 dark:border-zinc-800">
                Empty for now. Use this when the brainstorm hits.
              </div>
            )}
          </Section>

          <Section
            title="Snapshots"
            description="Blockers + wins only when they’re real."
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
          description={
            hasActions
              ? "If we only get three things done, it’s these."
              : "No actions logged. Add the top priorities."
          }
        >
          {hasActions ? (
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
          ) : (
            <div className="rounded-2xl border border-dashed border-zinc-200 p-6 text-sm text-zinc-500 dark:border-zinc-800">
              Empty. Drop your top 3 priorities when ready.
            </div>
          )}
        </Section>

        <footer className="rounded-3xl border border-white/40 bg-white/70 p-6 text-sm text-zinc-500 shadow-inner backdrop-blur-md dark:border-white/10 dark:bg-zinc-900/70 dark:text-zinc-400">
          Built for the Mesi crew. Update this board daily so we never wonder what’s next.
        </footer>
      </div>
    </div>
  );
}
