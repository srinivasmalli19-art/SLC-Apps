import '../shared/AppPages.css';

const EFFECTIVE_DATE = 'July 7, 2026';

export default function Terms() {
  return (
    <section className="page-section">
      <div className="page-section__inner app-doc">
        <h2>Terms &amp; Conditions</h2>
        <p className="app-doc__meta">Effective date: {EFFECTIVE_DATE} · Applies to: JeevaMitra</p>

        <p>
          These Terms &amp; Conditions govern your use of JeevaMitra (the "App"), published by
          SLC Technologies ("we", "us", "our"). By creating an account or using the App, you
          agree to these terms.
        </p>

        <h3>1. What the app is for</h3>
        <p>
          JeevaMitra helps farmers and shepherds manage livestock and farm records, book
          veterinary consultations, and access location-aware and voice-assisted tools. It is a
          farm-management and connectivity tool, not a substitute for professional veterinary or
          agricultural advice.
        </p>

        <h3>2. Vet bookings</h3>
        <p>
          JeevaMitra lets you request a veterinary consultation through the app. We facilitate the
          booking; the actual consultation and any advice or treatment given is the responsibility
          of the veterinary professional providing it, not SLC Technologies.
        </p>

        <h3>3. Your account and data</h3>
        <p>
          You are responsible for the accuracy of the farm and livestock records you enter and
          for keeping your account credentials secure. You retain responsibility for decisions
          made using information in the app.
        </p>

        <h3>4. Location and voice features</h3>
        <p>
          Location-aware and voice-assisted features depend on your device's GPS accuracy,
          network connectivity, and speech recognition — we do not guarantee their precision and
          they should not be relied on for safety-critical decisions.
        </p>

        <h3>5. Acceptable use</h3>
        <p>
          You agree not to use the App to submit false livestock or farm information, to
          impersonate another user, or to use the App for any unlawful purpose.
        </p>

        <h3>6. Third-party services</h3>
        <p>
          The App uses Firebase (Google) for account, data storage, messaging, and analytics
          services, and Google Maps Platform for mapping and location features. Your use of these
          features is also subject to Google's own terms of service.
        </p>

        <h3>7. Disclaimer of warranties</h3>
        <p>
          The App is provided "as is" without warranties of any kind, including accuracy of
          location data, uptime, or fitness for a particular purpose.
        </p>

        <h3>8. Limitation of liability</h3>
        <p>
          To the maximum extent permitted by law, SLC Technologies shall not be liable for
          indirect or consequential damages arising from your use of the App, including reliance
          on location data or a booked veterinary consultation.
        </p>

        <h3>9. Changes to these terms</h3>
        <p>
          We may update these Terms from time to time. Continued use of the App after changes are
          published constitutes acceptance of the revised Terms.
        </p>

        <h3>10. Contact</h3>
        <p>
          Questions about these Terms? Email us at{' '}
          <a href="mailto:support@slcvet.com">support@slcvet.com</a>.
        </p>
      </div>
    </section>
  );
}
