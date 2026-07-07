import { Link } from 'react-router-dom';
import '../shared/AppPages.css';

export default function Support() {
  return (
    <section className="page-section">
      <div className="page-section__inner app-doc">
        <h2>Support</h2>
        <p>
          SLC Vet hasn't been released yet, so there's no app to troubleshoot. Once it launches,
          support answers for common questions will appear here. Until then, reach out on the{' '}
          <Link to="/apps/slc-vet/contact">Contact page</Link> with any questions.
        </p>
      </div>
    </section>
  );
}
