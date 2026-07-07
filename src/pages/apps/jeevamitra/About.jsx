import '../shared/AppPages.css';

export default function About() {
  return (
    <section className="page-section">
      <div className="page-section__inner app-doc">
        <h2>About JeevaMitra</h2>
        <p>
          JeevaMitra (జీవమిత్ర) is a rural geo-spatial livestock and agricultural ecosystem
          platform, built for farmers and shepherds managing livestock day to day. It brings
          together farm record-keeping, veterinary booking, location-aware tools, and a
          voice-assisted interface into one app designed around how rural livestock work actually
          happens on the ground.
        </p>
        <p>
          The app is built to work for both farmers and shepherds, with tailored experiences for
          each role, and to keep working even where mobile connectivity is unreliable — a
          deliberate choice given where its users actually are.
        </p>
        <h3>Accessibility as a design principle, not an afterthought</h3>
        <p>
          JeevaMitra includes a voice-assisted interface specifically so that users with limited
          literacy aren't left out of a digital tool meant to help them. Location-aware features
          use live GPS to connect farmers with nearby services without requiring them to type or
          read an address.
        </p>
        <h3>Built to stay connected to your farm</h3>
        <p>
          Push notifications and in-app alerts keep you informed about your farm and livestock,
          and vet booking is built directly into the app so professional care is a few taps away
          when an animal needs it.
        </p>
      </div>
    </section>
  );
}
