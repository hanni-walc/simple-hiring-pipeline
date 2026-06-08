import { buildHiringDashboard, sampleCandidates, sampleInterviews, sampleJobs } from '../../lib/product';

const dashboard = buildHiringDashboard(sampleJobs, sampleCandidates, sampleInterviews);

export default function DashboardPage() {
  return (
    <main className="shell">
      <section className="frame hero">
        <p className="eyebrow">Dashboard</p>
        <h1>Keep hiring moving without spreadsheet chaos.</h1>
        <p className="lead">Track open roles, candidates, and interviews in one calm workspace.</p>
        <div className="row">
          <a className="button" href="/app/jobs">Open jobs</a>
          <a className="ghost" href="/app/candidates">Review candidates</a>
        </div>
      </section>

      <section className="stats">
        <div className="stat"><strong>{dashboard.health}</strong><span className="muted">pipeline health</span></div>
        <div className="stat"><strong>{dashboard.openRoles}</strong><span className="muted">open roles</span></div>
        <div className="stat"><strong>{dashboard.activeCandidates}</strong><span className="muted">active candidates</span></div>
        <div className="stat"><strong>{dashboard.interviewsPending}</strong><span className="muted">interviews pending</span></div>
      </section>

      <section className="grid cols-2" style={{ marginTop: 16 }}>
        <article className="card">
          <p className="kicker">Next action</p>
          <h2>{dashboard.nextAction}</h2>
        </article>
        <article className="card">
          <p className="kicker">Operating style</p>
          <ul className="list">
            <li>Friendly for non-recruiters.</li>
            <li>Simple enough for mobile review.</li>
            <li>Clear handoff from sourcing to interview to offer.</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
