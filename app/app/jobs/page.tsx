import { sampleJobs } from '../../../lib/product';

export default function JobsPage() {
  return (
    <main className="shell">
      <section className="frame hero">
        <p className="eyebrow">Jobs</p>
        <h1>Open roles at a glance.</h1>
        <p className="lead">Every role has a clear manager, department, and stage so the team can decide quickly.</p>
      </section>

      <section className="card">
        <table className="table">
          <thead>
            <tr><th>Role</th><th>Department</th><th>Manager</th><th>Stage</th></tr>
          </thead>
          <tbody>
            {sampleJobs.map((job) => (
              <tr key={job.id}>
                <td><strong>{job.title}</strong></td>
                <td>{job.department}</td>
                <td>{job.hiringManager}</td>
                <td>{job.stage}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </main>
  );
}
