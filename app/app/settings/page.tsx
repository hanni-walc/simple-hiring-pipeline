export default function SettingsPage() {
  return (
    <main className="shell">
      <section className="frame hero">
        <p className="eyebrow">Settings</p>
        <h1>Keep the hiring process simple and calm.</h1>
        <p className="lead">Set reminders, review permissions, and tune the workspace for the team.</p>
      </section>

      <section className="grid cols-2">
        <article className="card">
          <p className="kicker">Notifications</p>
          <ul className="list">
            <li>Interview reminders</li>
            <li>Candidate feedback nudges</li>
            <li>Offer approval alerts</li>
          </ul>
        </article>
        <article className="card">
          <p className="kicker">Permissions</p>
          <ul className="list">
            <li>Hiring manager access</li>
            <li>Team reviewer access</li>
            <li>Read-only guest mode</li>
          </ul>
        </article>
      </section>
    </main>
  );
}
