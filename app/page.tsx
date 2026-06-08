import { BUYER, LAUNCH, PROMISE, V2, WEDGE, buildCandidatePipeline, buildHiringDashboard, buildJobScorecard, sampleCandidates, sampleInterviews, sampleJobs } from '../lib/product';
import { withBasePath } from "@/lib/site-path";

const dashboard = buildHiringDashboard(sampleJobs, sampleCandidates, sampleInterviews);
const pipeline = buildCandidatePipeline(sampleCandidates);
const scorecard = buildJobScorecard(sampleJobs[0], sampleCandidates);

export default function HomePage() {
  return (
    <main className="shell">
      <section className="frame hero">
        <p className="eyebrow">Simple Hiring Pipeline</p>
        <h1>{PROMISE}</h1>
        <p className="lead">{WEDGE} Built for {BUYER} that need a clear way to move candidates without ATS clutter.</p>
        <div className="row">
          <a className="button" href={withBasePath('/app')}>Open dashboard</a>
          <a className="ghost" href={withBasePath('/app/jobs')}>View jobs</a>
        </div>
      </section>

      <section className="grid cols-3">
        <article className="card"><p className="kicker">Pipeline health</p><h2>{dashboard.health}</h2><p className="muted">{dashboard.nextAction}</p></article>
        <article className="card"><p className="kicker">Open roles</p><h2>{dashboard.openRoles}</h2><p className="muted">Active roles ready for candidates.</p></article>
        <article className="card"><p className="kicker">Active candidates</p><h2>{dashboard.activeCandidates}</h2><p className="muted">People moving through the funnel.</p></article>
      </section>

      <section className="grid cols-2" style={{ marginTop: 16 }}>
        <article className="card">
          <p className="kicker">Final artifact</p>
          <h2>{scorecard.title}</h2>
          <p className="muted">{scorecard.hiringManager}</p>
          <ul className="list">{scorecard.topSignals.map((signal) => <li key={signal}>{signal}</li>)}</ul>
          <p className="muted">{scorecard.decision}</p>
        </article>
        <article className="card">
          <p className="kicker">Top of pipeline</p>
          <h2>{pipeline[0].candidateName}</h2>
          <p className="muted">{pipeline[0].summary}</p>
        </article>
      </section>

      <section className="grid cols-2" style={{ marginTop: 16 }}>
        <article className="card">
          <p className="kicker">Launch checklist</p>
          <ul className="list">{LAUNCH.map((item) => <li key={item}>{item}</li>)}</ul>
        </article>
        <article className="card">
          <p className="kicker">What ships in v1</p>
          <div>{V2.map((item) => <span key={item} className="pill">{item}</span>)}</div>
        </article>
      </section>
    </main>
  );
}
