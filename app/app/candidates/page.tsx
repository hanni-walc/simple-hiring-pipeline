import { buildCandidatePipeline, sampleCandidates } from '../../../lib/product';

const pipeline = buildCandidatePipeline(sampleCandidates);

export default function CandidatesPage() {
  return (
    <main className="shell">
      <section className="frame hero">
        <p className="eyebrow">Candidates</p>
        <h1>Move candidates through the pipeline with less friction.</h1>
        <p className="lead">The pipeline keeps the next step obvious: screen, interview, offer, or close out.</p>
      </section>

      <section className="grid cols-2">
        {pipeline.map((item) => (
          <article key={item.candidateId} className="card">
            <p className="kicker">{item.stage}</p>
            <h2>{item.candidateName}</h2>
            <p className="muted">{item.summary}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
