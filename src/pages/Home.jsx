import Layout from '../components/Layout.jsx';
import AppGrid from '../components/AppGrid.jsx';
import './Home.css';

export default function Home() {
  return (
    <Layout>
      <section className="hero">
        <div className="hero__inner">
          <span className="hero__eyebrow">SLC Technologies</span>
          <h1>SLC Applications</h1>
          <p className="hero__subtitle">Developed by SLC Technologies</p>
          <p className="hero__description">
            A collection of purpose-built mobile applications for field documentation,
            livestock trade, farm management, and veterinary care.
          </p>
        </div>
      </section>

      <AppGrid />
    </Layout>
  );
}
