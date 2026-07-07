import Layout from '../components/Layout.jsx';
import { apps, CONTACT_EMAIL } from '../data/apps.js';
import './About.css';

export default function About() {
  return (
    <Layout>
      <section className="about-hero">
        <div className="about-hero__inner">
          <span className="about-hero__eyebrow">About</span>
          <h1>SLC Technologies</h1>
          <p className="about-hero__description">
            SLC Technologies builds focused, practical mobile applications for field
            documentation, livestock trade, farm management, and veterinary care — tools built
            around how the people using them actually work, not the other way around.
          </p>
        </div>
      </section>

      <section className="page-section">
        <div className="page-section__inner" style={{ maxWidth: 720 }}>
          <h2>What we build</h2>
          <p className="about-lead">
            Every app we ship solves one real, specific problem well, rather than trying to be
            everything at once:
          </p>
          <ul className="about-list">
            {apps.map((app) => (
              <li key={app.id}>
                <strong>{app.name}</strong> — {app.tagline}
              </li>
            ))}
          </ul>
          <p className="about-lead">
            Several of these — JeevaMitra and Pasumithra in particular — are built specifically
            for India's rural livestock and agricultural community, with attention to
            offline-first reliability, accessibility for users with limited literacy, and the way
            trade and farm work actually happen on the ground rather than how a typical app
            assumes they do.
          </p>
          <p>
            Questions about us or any of our apps? Reach us at{' '}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>
        </div>
      </section>
    </Layout>
  );
}
