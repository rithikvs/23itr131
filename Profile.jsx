import TopNav from '../components/TopNav.jsx';
import { getCurrentUser, getEventInterests } from '../lib/auth.js';

export default function Profile() {
  const user = getCurrentUser();
  const interests = getEventInterests();

  return (
    <div>
      <TopNav active="profile" />
      <main className="page-shell">
        <section className="page-header">
          <h1>Student Profile</h1>
          <p>Your profile is stored locally in the browser, with no backend database needed.</p>
        </section>
        <section className="card profile-card">
          <div>
            <strong>Name</strong>
            <p>{user?.name}</p>
          </div>
          <div>
            <strong>Email</strong>
            <p>{user?.email}</p>
          </div>
          <div>
            <strong>Interest saved</strong>
            <p>{interests.length ? `${interests.length} event(s)` : 'No event interests yet'}</p>
          </div>
          <div>
            <strong>Storage</strong>
            <p>All login state and updates are kept in browser storage only.</p>
          </div>
        </section>
      </main>
    </div>
  );
}
