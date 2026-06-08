import { buildJobScorecard, sampleCandidates, sampleJobs } from '../../../../lib/product';

const scorecard = buildJobScorecard(sampleJobs[0], sampleCandidates);

export function generateStaticParams() {
  return sampleJobs.map((job) => ({ id: job.id }));
}

export default function JobDetailPage() {
  return (
    <main className="shell">
      <section className="frame hero">
        <p className="eyebrow">Job detail</p>
        <h1>{sampleJobs[0].title}</h1>
        <p className="lead">Use this scorecard view when deciding whether to move a candidate forward or close the loop.</p>
      </section>

      <section className="grid cols-2">
        <article className="card">
          <p className="kicker">Scorecard</p>
          <h2>{scorecard.title}</h2>
          <p className="muted">{scorecard.hiringManager}</p>
          <ul className="list">{scorecard.topSignals.map((signal) => <li key={signal}>{signal}</li>)}</ul>
        </article>
        <article className="card">
          <p className="kicker">Decision</p>
          <h2>{scorecard.decision}</h2>
          <p className="muted">Use the scorecard to align interviews and keep feedback structured.</p>
        </article>
      </section>
    </main>
  );
}
