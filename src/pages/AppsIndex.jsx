import Layout from '../components/Layout.jsx';
import AppGrid from '../components/AppGrid.jsx';
import './AppsIndex.css';

export default function AppsIndex() {
  return (
    <Layout>
      <section className="apps-index-hero">
        <div className="apps-index-hero__inner">
          <h1>All Applications</h1>
          <p>Every app built by SLC Technologies, in one place.</p>
        </div>
      </section>

      <AppGrid />
    </Layout>
  );
}
