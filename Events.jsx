import { useState } from 'react';
import TopNav from '../components/TopNav.jsx';
import { getEvents, toggleEventInterest, getEventInterests } from '../lib/auth.js';

export default function Events() {
  const [interests, setInterests] = useState(getEventInterests());
  const events = getEvents();

  const handleInterest = (eventId) => {
    toggleEventInterest(eventId);
    setInterests(getEventInterests());
  };

  return (
    <div>
      <TopNav active="events" />
      <main className="page-shell">
        <section className="page-header">
          <h1>Upcoming Placement Events</h1>
          <p>Bookmark the sessions that matter most and stay notified about campus placement activity.</p>
        </section>
        <section className="grid-grid">
          {events.map((event) => (
            <article className="card event-card" key={event.id}>
              <div className="tag-row">
                <span className="status-pill status-upcoming">{event.date}</span>
              </div>
              <h2>{event.title}</h2>
              <p>{event.description}</p>
              <button className="action-btn" onClick={() => handleInterest(event.id)}>
                {interests.includes(event.id) ? 'Interested' : 'Register Interest'}
              </button>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
