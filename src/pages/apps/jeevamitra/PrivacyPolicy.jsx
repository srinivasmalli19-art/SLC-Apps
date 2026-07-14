import { Link } from 'react-router-dom';
import '../shared/AppPages.css';

const EFFECTIVE_DATE = 'July 7, 2026';

export default function PrivacyPolicy() {
  return (
    <section className="page-section">
      <div className="page-section__inner app-doc">
        <h2>Privacy Policy</h2>
        <p className="app-doc__meta">Effective date: {EFFECTIVE_DATE} · Applies to: JeevaMitra</p>

        <p>
          SLC Technologies ("we", "us", "our") built JeevaMitra to help farmers and shepherds
          manage livestock, book veterinary care, and stay connected to their farm. This Privacy
          Policy explains what information the app accesses, how it's used, and where it's
          stored.
        </p>

        <h3>1. Information the app accesses</h3>
        <table className="app-doc__table">
          <thead>
            <tr>
              <th>Permission</th>
              <th>Why the app requests it</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Precise &amp; approximate location</td>
              <td>To power location-aware features — showing your farm's location, connecting you with nearby services, and displaying maps.</td>
            </tr>
            <tr>
              <td>Camera, photos &amp; videos</td>
              <td>To let you attach photos or videos to farm and livestock records.</td>
            </tr>
            <tr>
              <td>Microphone</td>
              <td>For the voice-assisted interface — converting what you say into text using your device's speech recognition, so the app is usable without typing or reading.</td>
            </tr>
            <tr>
              <td>Phone (place calls)</td>
              <td>To let you call a vet or contact directly from the app.</td>
            </tr>
            <tr>
              <td>Notifications</td>
              <td>To send you alerts about your farm, livestock, and bookings.</td>
            </tr>
            <tr>
              <td>Internet &amp; network state</td>
              <td>To sync your data with our servers and support offline-first use when connectivity is limited.</td>
            </tr>
          </tbody>
        </table>
        <p>
          Each permission is requested at the time it's needed. You can grant, deny, or revoke any
          of them at any time from your device's Settings — the app will let you know if a
          feature can't work without a permission you've denied.
        </p>

        <h3>2. Account and data storage</h3>
        <p>
          JeevaMitra uses Firebase (a Google service) to operate your account and store your data:
        </p>
        <ul>
          <li><strong>Firebase Authentication</strong> — to create and sign in to your account.</li>
          <li><strong>Cloud Firestore</strong> — to store your farm, livestock, and booking records.</li>
          <li><strong>Firebase Storage</strong> — to store photos and videos you add to your records.</li>
          <li><strong>Firebase Cloud Messaging</strong> — to deliver push notifications and alerts to your device.</li>
        </ul>
        <p>
          This data is used to operate the app's core features for you — it is not sold to
          advertisers or data brokers.
        </p>

        <h3>3. Analytics and diagnostics</h3>
        <p>
          Unlike some of our other apps, JeevaMitra uses the following Firebase services to help
          us understand app usage and fix problems:
        </p>
        <ul>
          <li><strong>Firebase Analytics</strong> — collects usage data (such as which screens and features are used) to help us understand how the app is used and improve it.</li>
          <li><strong>Firebase Crashlytics</strong> — collects crash and error reports so we can find and fix bugs.</li>
          <li><strong>Firebase Performance Monitoring</strong> — collects app performance data (such as load times).</li>
          <li><strong>Firebase Remote Config</strong> — lets us adjust app configuration and feature availability without a personal data footprint.</li>
        </ul>
        <p>
          These services are operated by Google as part of Firebase, and process data on Google's
          infrastructure under{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
            Google's Privacy Policy
          </a>
          .
        </p>

        <h3>4. Maps and location services</h3>
        <p>
          The app uses Google Maps and Geocoding to display maps and resolve locations, which
          sends the coordinates you're viewing to Google to return map data — also governed by
          Google's Privacy Policy linked above.
        </p>

        <h3>5. Voice input</h3>
        <p>
          Speech you provide through the voice-assisted interface is converted to text using your
          device's built-in speech recognition service. We use the resulting text to operate the
          feature you invoked — we do not use voice input for advertising.
        </p>

        <h3>6. Data retention</h3>
        <p>
          Your account data is retained for as long as your account is active. To request
          deletion of your account and associated data, contact us using the details below.
        </p>

        <h3>7. Children's privacy</h3>
        <p>
          JeevaMitra is intended for adult farmers, shepherds, and agricultural workers, and is
          not directed at children. We do not knowingly collect information from children.
        </p>

        <h3>8. Security</h3>
        <p>
          Your data is stored using Firebase's infrastructure and transmitted using encrypted
          (HTTPS) connections.
        </p>

        <h3>9. Your choices</h3>
        <ul>
          <li>Deny or revoke Location, Camera, Microphone, Phone, or Notification permissions at any time from your device Settings.</li>
          <li>Request deletion of your account and data by contacting us.</li>
          <li>Uninstall the app to stop any further data collection from your device.</li>
        </ul>

        <h3>10. Changes to this policy</h3>
        <p>
          If this policy changes, we will update this page and revise the effective date above.
        </p>

        <h3>11. Contact us</h3>
        <p>
          Questions about this policy or how JeevaMitra handles data? Email us at{' '}
          <a href="mailto:support@slcvet.com">support@slcvet.com</a>.
        </p>

        <h3>Related pages</h3>
        <p>
          Visit <Link to="/apps/jeevamitra/support">Support</Link> for common questions, or{' '}
          <Link to="/apps/jeevamitra/delete-account">Delete Your Account</Link> to request removal
          of your account and data.
        </p>
      </div>
    </section>
  );
}
