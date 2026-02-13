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
    <div className="relative min-h-screen overflow-hidden bg-[#05060a] px-4 py-12 text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-40 top-10 h-72 w-72 rounded-full bg-[#7c3aed33] blur-[160px]" />
        <div className="absolute right-[-10%] top-40 h-80 w-80 rounded-full bg-[#22d3ee22] blur-[180px]" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-[#05060a] via-transparent" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-8">
        <header className="rounded-[32px] border border-white/10 bg-[#0d0f19]/90 p-10 shadow-[0_30px_120px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <span className="text-xs uppercase tracking-[0.4em] text-white/40">
                Codeweb Ops Deck
              </span>
              <h1 className="mt-4 text-4xl font-semibold leading-tight text-white">
                Zero-fluff dashboard for Mesi HQ
              </h1>
              <p className="mt-4 max-w-2xl text-base text-white/60">
                Live control center for what we’re building. Minimal UI, only the
                signals that matter, and a space to drop real updates when they exist.
              </p>
            </div>
            <div className="grid w-full gap-4 rounded-3xl border border-white/10 bg-black/20 p-6 text-sm shadow-inner backdrop-blur-xl lg:w-auto">
              {[
                { label: "Focus", value: summary.focus },
                { label: "Next review", value: summary.nextReview },
                { label: "Owners", value: summary.owner },
              ].map((item) => (
                <div key={item.label} className="flex flex-col gap-1 text-left">
                  <span className="text-[11px] uppercase tracking-[0.35em] text-white/40">
                    {item.label}
                  </span>
                  <span className="text-base font-semibold leading-tight text-white">
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
            title="CURRENT BUILDS"
            description={
              hasProjects
                ? "Active builds with owner + blocker"
                : "No active builds logged yet. Add the first one."
            }
          >
            {hasProjects ? (
              currentProjects.map((project) => (
                <article
                  key={project.name}
                  className="rounded-2xl border border-white/5 bg-white/5 p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                        {project.type}
                      </p>
                      <h3 className="mt-1 text-lg font-semibold">{project.name}</h3>
                    </div>
                    <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/70">
                      {project.status}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-white/60">
                    Owner: {project.owner} • ETA: {project.eta}
                  </p>
                  <p className="mt-2 text-sm text-white/50">{project.notes}</p>
                </article>
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-white/20 p-6 text-sm text-white/50">
                Nothing live yet. Log the first build when it hits design/dev.
              </div>
            )}
          </Section>

          <Section title="RECENT DELIVERIES" description="Shipped work only.">
            {finishedProjects.length ? (
              finishedProjects.map((project) => (
                <div
                  key={project.name}
                  className="rounded-2xl border border-white/5 bg-white/5 p-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                        {project.owner}
                      </p>
                      <h3 className="mt-1 text-lg font-semibold">{project.name}</h3>
                    </div>
                    <span className="text-sm text-emerald-400">{project.result}</span>
                  </div>
                  <p className="mt-2 text-sm text-white/60">Shipped {project.shipped}</p>
                </div>
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-white/20 p-6 text-sm text-white/50">
                Nothing shipped yet. Fill once we deliver.
              </div>
            )}
          </Section>

          <Section
            title="GOALS"
            description="Track only what we actually commit to."
          >
            {goals.map((goal) => (
              <div key={goal.title}>
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold">{goal.title}</h3>
                    <p className="text-xs text-white/50">{goal.target}</p>
                  </div>
                  <span className="text-xs text-white/40">{goal.owner}</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-white/5">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#a855f7] to-[#22d3ee]"
                    style={{ width: `${goal.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </Section>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Section
            title="IDEA BOARD"
            description={
              hasIdeas ? "Stuff we might spin up" : "No ideas logged. Drop them when ready."
            }
          >
            {hasIdeas ? (
              ideaBacklog.map((idea) => (
                <div
                  key={idea.title}
                  className="rounded-2xl border border-white/5 bg-white/5 p-4"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">{idea.title}</h3>
                    <span className="text-xs uppercase tracking-wide text-white/50">
                      {idea.impact} impact
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-white/60">{idea.detail}</p>
                </div>
              ))
            ) : (
              <div className="rounded-2xl border border-dashed border-white/20 p-6 text-sm text-white/50">
                Empty for now. Use this when the brainstorm hits.
              </div>
            )}
          </Section>

          <Section title="SNAPSHOTS" description="Blockers + wins only when they’re real.">
            <div className="grid gap-4 md:grid-cols-2">
              {snapshots.map((snapshot) => (
                <div
                  key={snapshot.label}
                  className="rounded-2xl border border-white/5 bg-white/5 p-4"
                >
                  <p className="text-[11px] uppercase tracking-[0.4em] text-white/35">
                    {snapshot.label}
                  </p>
                  <ul className="mt-3 space-y-2 text-sm text-white/70">
                    {snapshot.items.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-white/40">•</span>
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
          title="WHAT'S NEXT"
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
                  className="rounded-2xl border border-white/5 bg-white/5 p-4"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                    {action.owner}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold">{action.title}</h3>
                  <p className="mt-4 text-sm text-white/60">Due {action.due}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-white/20 p-6 text-sm text-white/50">
              Empty. Drop your top 3 priorities when ready.
            </div>
          )}
        </Section>

        <footer className="rounded-3xl border border-white/10 bg-black/30 p-6 text-sm text-white/50 shadow-inner backdrop-blur-xl">
          Built for the Mesi crew. Update this board daily so we never wonder what’s next.
        </footer>
      </div>
    </div>
  );
}
