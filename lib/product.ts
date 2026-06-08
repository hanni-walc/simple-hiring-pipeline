export const TITLE = "Simple Hiring Pipeline";
export const PROMISE = "A lightweight pipeline for open roles that non-recruiters can actually use.";
export const BUYER = "startups under 50 people, agencies, local businesses";
export const PAIN = "Hiring becomes a mess of spreadsheets, email, and calendar links.";
export const PRICING = "Subscription per active job or seat.";
export const WEDGE = "Less ATS bloat, faster coordination, and cleaner candidate notes.";
export const DEPLOY = "Vercel app, Postgres, email/calendar integrations, Stripe billing.";
export const MVP = [
  "Create job",
  "Move candidates through stages",
  "Leave notes and scores",
  "Schedule interviews",
  "Send reminders",
  "Mobile-optimized review flow"
];
export const SCREENS = [
  "Job board",
  "Candidate pipeline",
  "Scorecard form",
  "Interview scheduling",
  "Role dashboard",
  "Candidate detail"
];
export const ROUTES = [
  "/",
  "/login",
  "/app",
  "/app/jobs",
  "/app/jobs/[id]",
  "/app/candidates",
  "/app/settings"
];
export const LAUNCH = [
  "Target teams that hate enterprise ATS tools",
  "Make import from spreadsheet painless",
  "Keep the visual design crisp and calm"
];
export const V2 = [
  "Email parsing",
  "Offer letter templates",
  "Candidate portal",
  "Recruiter analytics"
];
export const product = {
  title: TITLE,
  promise: PROMISE,
  buyer: BUYER,
  pain: PAIN,
  pricing: PRICING,
  wedge: WEDGE,
  deploy: DEPLOY,
  mvp: MVP,
  screens: SCREENS,
  routes: ROUTES,
  launch: LAUNCH,
  v2: V2,
  stack: ["Next.js", "TypeScript", "Postgres", "Stripe", "Vercel"],
};
