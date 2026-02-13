type Project = {
  name: string;
  type: string;
  status: string;
  owner: string;
  eta: string;
  notes: string;
};

type FinishedProject = {
  name: string;
  result: string;
  shipped: string;
  owner: string;
};

type Goal = {
  title: string;
  progress: number;
  target: string;
  owner: string;
};

export const summary = {
  focus: "Ship Codeweb site + lock first clients",
  nextReview: "Daily standup 09:00",
  owner: "Mads & Agent"
};

export const metrics = [
  { label: "Active builds", value: 0, delta: "Add first project" },
  { label: "Deliveries", value: 1, delta: "Dashboard shipped" },
  { label: "Goals", value: "2 live", delta: "Fill in targets" },
  { label: "Pipeline", value: "0 clients", delta: "Need outreach" }
];

export const currentProjects: Project[] = [];

export const finishedProjects: FinishedProject[] = [
  {
    name: "Codeweb dashboard",
    result: "Internal ops board",
    shipped: "Feb 13",
    owner: "Team"
  }
];

export const goals: Goal[] = [
  {
    title: "Sign 2 paid clients by end of March",
    progress: 0,
    target: "Need outreach + proposals",
    owner: "Sales"
  },
  {
    title: "Launch public codeweb.dk",
    progress: 0,
    target: "Design + copy + deploy",
    owner: "Mads"
  },
  {
    title: "Document ops playbook v1",
    progress: 0,
    target: "Structure + templates",
    owner: "Agent"
  }
];

export const ideaBacklog: { title: string; detail: string; impact: string }[] = [];

export const snapshots = [
  {
    label: "Blockers",
    items: ["No blockers logged yet"]
  },
  {
    label: "Wins",
    items: ["Dashboard skeleton live"]
  }
];

export const actions: { title: string; owner: string; due: string }[] = [];
