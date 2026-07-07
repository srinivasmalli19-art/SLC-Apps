import Layout from '../components/Layout.jsx';
import Icon from '../components/Icon.jsx';
import { CONTACT_EMAIL } from '../data/apps.js';

export default function Contact() {
  return (
    <Layout>
      <section className="contact-cta" style={{ paddingTop: 72 }}>
        <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', letterSpacing: '-0.02em', marginBottom: 12 }}>
          Contact SLC Technologies
        </h1>
        <p>
          General inquiries, partnership questions, or anything not specific to one of our apps —
          we'd like to hear from you.
        </p>
        <a className="button" href={`mailto:${CONTACT_EMAIL}`}>
          <Icon name="mail" size={18} strokeOnly />
          {CONTACT_EMAIL}
        </a>
        <p style={{ marginTop: 20, fontSize: '0.9rem', color: 'var(--color-text-faint)' }}>
          Looking for help with a specific app? Each app's own page has a dedicated Support and
          Contact section.
        </p>
      </section>
    </Layout>
  );
}
