import '../shared/AppPages.css';

const EFFECTIVE_DATE = 'July 7, 2026';

export default function Terms() {
  return (
    <section className="page-section">
      <div className="page-section__inner app-doc">
        <h2>Terms &amp; Conditions</h2>
        <p className="app-doc__meta">Effective date: {EFFECTIVE_DATE} · Applies to: SLC GPS Camera (GPS Map Camera Pro)</p>

        <p>
          These Terms &amp; Conditions govern your use of SLC GPS Camera (the "App"), published
          by SLC Technologies ("we", "us", "our"). By downloading, installing, or using the App,
          you agree to these terms.
        </p>

        <h3>1. What the app is for</h3>
        <p>
          SLC GPS Camera burns location, address, and timestamp information onto photos for
          documentation purposes — such as field visits, site surveys, or proof-of-location
          records. It is a documentation tool, not a survey-grade or legal-grade positioning
          instrument.
        </p>

        <h3>2. Accuracy of location data</h3>
        <p>
          Location accuracy depends on your device's GPS hardware, signal conditions, and the
          reverse geocoding service used to resolve an address. We do not guarantee the precision
          of coordinates or addresses shown, and the App is not intended for use cases requiring
          certified or legally binding location accuracy.
        </p>

        <h3>3. Custom Location Mode</h3>
        <p>
          Custom Location Mode lets you manually select a point on the map rather than using your
          device's live GPS position. Any photo captured this way is automatically watermarked
          "CUSTOM LOCATION USED." You are responsible for using this mode honestly and for any
          consequences of representing a manually chosen location as your captured location.
        </p>

        <h3>4. Your content</h3>
        <p>
          Photos you capture are stored locally on your device — we do not host, take ownership
          of, or claim rights over your photos. You are solely responsible for the photos you
          take, how you use them, and for complying with any local laws around photography,
          privacy, or location disclosure that apply to your use case.
        </p>

        <h3>5. Acceptable use</h3>
        <p>
          You agree not to use the App to capture or fabricate location evidence for fraudulent,
          unlawful, or deceptive purposes, and not to use it in any way that violates the privacy
          or rights of others (for example, photographing private property or individuals without
          appropriate consent where required by law).
        </p>

        <h3>6. Third-party services</h3>
        <p>
          The App uses Google Maps Platform services (Maps SDK for Android, Geocoding API, and
          optionally the Static Maps API) to display maps and resolve addresses. Your use of these
          features is also subject to Google's own terms of service and privacy policy.
        </p>

        <h3>7. Disclaimer of warranties</h3>
        <p>
          The App is provided "as is" without warranties of any kind, express or implied,
          including but not limited to accuracy, reliability, or fitness for a particular purpose.
          We do not warrant that the App will be uninterrupted or error-free.
        </p>

        <h3>8. Limitation of liability</h3>
        <p>
          To the maximum extent permitted by law, SLC Technologies shall not be liable for any
          indirect, incidental, or consequential damages arising from your use of the App,
          including damages resulting from inaccurate location data or reliance on captured
          photos for legal, contractual, or evidentiary purposes.
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
