export const summary = {
  focus: "Polish Codeweb ops stack + client kits",
  nextReview: "Daily standup 09:00",
  owner: "Mads & Agent"
};

export const metrics = [
  { label: "Live client builds", value: 3, delta: "+1 this week" },
  { label: "Sites delivered", value: 2, delta: "Need 2 more for Feb goal" },
  { label: "Avg. turnaround", value: "6.2 days", delta: "Goal < 7 days" },
  { label: "Pipeline", value: "5 prospects", delta: "2 ready to close" }
];

export const currentProjects = [
  {
    name: "Codeweb marketing site",
    type: "Internal build",
    status: "Design polish",
    progress: 55,
    owner: "Mads",
    eta: "Feb 21",
    notes: "Need hero copy + case studies"
  },
  {
    name: "Client A — Kyst Bistro",
    type: "Webflow",
    status: "Build sprint",
    progress: 70,
    owner: "Agent",
    eta: "Feb 18",
    notes: "Waiting on menu photography"
  },
  {
    name: "Client B — Atlas Fitness",
    type: "Next.js",
    status: "QA",
    progress: 88,
    owner: "Mads",
    eta: "Feb 16",
    notes: "Legal review + Stripe test"
  }
];

export const finishedProjects = [
  {
    name: "Demo — Nordic Builders",
    result: "+3 inbound leads",
    shipped: "Feb 12",
    owner: "Agent"
  },
  {
    name: "Demo — Vera Clinic",
    result: "Landing + booking",
    shipped: "Feb 08",
    owner: "Mads"
  },
  {
    name: "Ops dashboard alpha",
    result: "Internal tool",
    shipped: "Jan 31",
    owner: "Team"
  }
];

export const goals = [
  {
    title: "4 paid sites / month",
    progress: 50,
    target: "2/4 locked",
    owner: "Sales"
  },
  {
    title: "$12k pipeline",
    progress: 42,
    target: "$5k committed",
    owner: "Mads"
  },
  {
    title: "Ops playbook v1",
    progress: 40,
    target: "Need QA + templates",
    owner: "Agent"
  }
];

export const ideaBacklog = [
  {
    title: "Client portal",
    detail: "Status, invoices, asset handoff",
    impact: "High"
  },
  {
    title: "Section library",
    detail: "Reusable hero/CTA components",
    impact: "Medium"
  },
  {
    title: "Automated weekly Loom",
    detail: "Ops recap auto-shared with clients",
    impact: "Low"
  }
];

export const snapshots = [
  {
    label: "Blockers",
    items: [
      "Menu photos (Kyst)",
      "Stripe QA (Atlas)",
      "Copy for Codeweb hero"
    ]
  },
  {
    label: "Wins",
    items: [
      "Inbound from LinkedIn post",
      "Ops dashboard shipped",
      "Workspace + domains live"
    ]
  }
];

export const actions = [
  {
    title: "Finalize Codeweb homepage copy",
    owner: "Mads",
    due: "Today"
  },
  {
    title: "Record Loom for clients",
    owner: "Agent",
    due: "Tomorrow"
  },
  {
    title: "Prep sales deck template",
    owner: "Team",
    due: "Monday"
  }
];
