import { Link } from 'react-router-dom';
import Layout from '../components/Layout.jsx';

export default function NotFound() {
  return (
    <Layout>
      <section className="page-section" style={{ textAlign: 'center', padding: '96px 24px' }}>
        <h1 style={{ fontSize: '2.4rem', marginBottom: 12 }}>404</h1>
        <p style={{ color: 'var(--color-text-muted)', marginBottom: 24 }}>
          The page you're looking for doesn't exist.
        </p>
        <Link className="button" to="/">Back to Home</Link>
      </section>
    </Layout>
  );
}
