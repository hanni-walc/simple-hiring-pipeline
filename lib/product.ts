export type Job = {
  id: string;
  title: string;
  department: string;
  hiringManager: string;
  stage: 'open' | 'interviewing' | 'closing' | 'filled';
};

export type Candidate = {
  id: string;
  name: string;
  roleId: string;
  stage: 'screen' | 'interview' | 'offer' | 'rejected';
  score: number;
  notes: string;
};

export type Interview = {
  id: string;
  candidateId: string;
  date: string;
  type: 'screen' | 'technical' | 'final';
  status: 'scheduled' | 'completed' | 'needs feedback';
};

export type HiringDashboard = {
  openRoles: number;
  activeCandidates: number;
  interviewsPending: number;
  health: 'moving' | 'steady' | 'stalled';
  nextAction: string;
};

export type PipelineCard = {
  candidateId: string;
  candidateName: string;
  stage: Candidate['stage'];
  score: number;
  summary: string;
};

export type JobScorecard = {
  title: string;
  hiringManager: string;
  topSignals: string[];
  decision: string;
};

export const TITLE = 'Simple Hiring Pipeline';
export const PROMISE = 'A lightweight pipeline for open roles that non-recruiters can actually use.';
export const BUYER = 'startups under 50 people, agencies, local businesses';
export const PAIN = 'Hiring becomes a mess of spreadsheets, email, and calendar links.';
export const PRICING = 'Subscription per active job or seat.';
export const WEDGE = 'Less ATS bloat, faster coordination, and cleaner candidate notes.';
export const DEPLOY = 'Vercel app, Postgres, email/calendar integrations, Stripe billing.';
export const MVP = ['Create job', 'Move candidates through stages', 'Leave notes and scores', 'Schedule interviews', 'Send reminders', 'Mobile-optimized review flow'];
export const SCREENS = ['Job board', 'Candidate pipeline', 'Scorecard form', 'Interview scheduling', 'Role dashboard', 'Candidate detail'];
export const ROUTES = ['/', '/login', '/app', '/app/jobs', '/app/jobs/[id]', '/app/candidates', '/app/settings'];
export const LAUNCH = ['Target teams that hate enterprise ATS tools', 'Make import from spreadsheet painless', 'Keep the visual design crisp and calm'];
export const V2 = ['Email parsing', 'Offer letter templates', 'Candidate portal', 'Recruiter analytics'];

export const sampleJobs: Job[] = [
  { id: 'job-1', title: 'Operations Coordinator', department: 'Operations', hiringManager: 'Mina', stage: 'open' },
  { id: 'job-2', title: 'Client Success Manager', department: 'Customer Success', hiringManager: 'Jordan', stage: 'interviewing' },
  { id: 'job-3', title: 'Studio Producer', department: 'Production', hiringManager: 'Ari', stage: 'closing' },
];

export const sampleCandidates: Candidate[] = [
  { id: 'cand-1', name: 'Avery Chen', roleId: 'job-3', stage: 'offer', score: 92, notes: 'Strong execution, clear communication, and ready for a quick close.' },
  { id: 'cand-2', name: 'Noah Patel', roleId: 'job-2', stage: 'interview', score: 84, notes: 'Great client empathy and solid calendar coordination experience.' },
  { id: 'cand-3', name: 'Maya Torres', roleId: 'job-1', stage: 'screen', score: 79, notes: 'Organized, reliable, and good with onboarding documentation.' },
  { id: 'cand-4', name: 'Leo Kim', roleId: 'job-2', stage: 'rejected', score: 61, notes: 'Good energy but needs deeper account management experience.' },
];

export const sampleInterviews: Interview[] = [
  { id: 'int-1', candidateId: 'cand-1', date: '2026-06-08', type: 'final', status: 'scheduled' },
  { id: 'int-2', candidateId: 'cand-2', date: '2026-06-07', type: 'technical', status: 'needs feedback' },
  { id: 'int-3', candidateId: 'cand-3', date: '2026-06-07', type: 'screen', status: 'completed' },
];

const STAGE_RANK: Record<Candidate['stage'], number> = {
  offer: 4,
  interview: 3,
  screen: 2,
  rejected: 1,
};

export function buildHiringDashboard(jobs: Job[], candidates: Candidate[], interviews: Interview[]): HiringDashboard {
  const openRoles = jobs.filter((job) => job.stage !== 'filled').length;
  const activeCandidates = candidates.filter((candidate) => candidate.stage !== 'rejected').length;
  const interviewsPending = interviews.filter((interview) => interview.status !== 'completed').length;
  const health: HiringDashboard['health'] =
    activeCandidates >= 2 && interviewsPending <= 2
      ? 'moving'
      : openRoles <= 3
        ? 'steady'
        : 'stalled';

  return {
    openRoles,
    activeCandidates,
    interviewsPending,
    health,
    nextAction: 'Review the next candidate feedback and move one candidate forward today.',
  };
}

export function buildCandidatePipeline(candidates: Candidate[]): PipelineCard[] {
  return [...candidates]
    .sort((left, right) => STAGE_RANK[right.stage] - STAGE_RANK[left.stage] || right.score - left.score || left.name.localeCompare(right.name))
    .map((candidate) => ({
      candidateId: candidate.id,
      candidateName: candidate.name,
      stage: candidate.stage,
      score: candidate.score,
      summary: `Stage ${candidate.stage} · score ${candidate.score} · ${candidate.notes}`,
    }));
}

export function buildJobScorecard(job: Job, candidates: Candidate[]): JobScorecard {
  const relevant = candidates.filter((candidate) => candidate.roleId === job.id).sort((left, right) => right.score - left.score);
  const best = relevant[0];

  return {
    title: `${job.title} scorecard`,
    hiringManager: `${job.hiringManager} manager view`,
    topSignals: best
      ? [`Top candidate: ${best.name}`, `Top score: ${best.score}`, `Key note: ${best.notes}`]
      : [`No candidates yet for ${job.title}`, 'Share the role and schedule the first screen', 'Keep notes attached to each interview'],
    decision: best ? 'Move the strongest candidate to the next stage.' : 'Open the role and add the first candidate.',
  };
}

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
  stack: ['Next.js', 'TypeScript', 'Postgres', 'Stripe', 'Vercel'],
};
