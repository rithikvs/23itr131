import TopNav from '../components/TopNav.jsx';
import { getCurrentUser } from '../lib/auth.js';

const notifications = [
  {
    title: 'New placement drive announced',
    description: 'Global Tech is visiting campus on June 12 for first-round interviews.',
    tag: 'Event'
  },
  {
    title: 'Result update is live',
    description: 'Final placement outcomes for the spring session have been published.',
    tag: 'Result'
  },
  {
    title: 'Interview prep workshop',
    description: 'Resume review and mock interview session is scheduled for June 7.',
    tag: 'Reminder'
  }
];

export default function Dashboard() {
  const user = getCurrentUser();

  return (
    <div>
      <TopNav active="dashboard" />
      <main className="page-shell">
        <section className="page-header">
          <h1>Welcome back, {user?.name || 'Student'}</h1>
          <p>Track campus notifications for placement events, company visits, and result alerts.</p>
        </section>
        <section className="grid-grid">
          {notifications.map((item) => (
            <article className="card notification-card" key={item.title}>
              <div className="tag-row">
                <span className="status-pill status-upcoming">{item.tag}</span>
              </div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
