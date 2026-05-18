import TopNav from '../components/TopNav.jsx';
import { getResults } from '../lib/auth.js';

export default function Results() {
  const results = getResults();

  return (
    <div>
      <TopNav active="results" />
      <main className="page-shell">
        <section className="page-header">
          <h1>Latest Placement Results</h1>
          <p>Review recent results and status updates from campus placement drives.</p>
        </section>
        <section className="grid-grid">
          {results.map((result) => (
            <article className="card result-card" key={result.id}>
              <div className="tag-row">
                <span className="status-pill status-success">{result.status}</span>
              </div>
              <h2>{result.title}</h2>
              <p>{result.description}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
