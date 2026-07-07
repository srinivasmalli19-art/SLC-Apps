import '../shared/AppPages.css';

export default function About() {
  return (
    <section className="page-section">
      <div className="page-section__inner app-doc">
        <h2>About SLC Vet</h2>
        <p>
          SLC Vet is currently in development. We're not publishing feature details or a
          description of what the app does until they're finalized, so this page avoids guessing
          at functionality that hasn't been built yet.
        </p>
        <p>
          Check back here once it's closer to release, or use the Contact page to ask us for an
          update.
        </p>
      </div>
    </section>
  );
}
