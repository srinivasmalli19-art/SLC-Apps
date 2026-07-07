import '../shared/AppPages.css';

const EFFECTIVE_DATE = 'July 7, 2026';

export default function PrivacyPolicy() {
  return (
    <section className="page-section">
      <div className="page-section__inner app-doc">
        <h2>Privacy Policy</h2>
        <p className="app-doc__meta">Effective date: {EFFECTIVE_DATE} · Applies to: Pasumithra</p>

        <p>
          SLC Technologies ("we", "us", "our") built Pasumithra to connect livestock buyers and
          sellers directly. This Privacy Policy explains what information the app accesses and
          how it is used.
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
              <td>Camera &amp; photos</td>
              <td>To let sellers attach photos to a listing, and to let buyers view listing photos.</td>
            </tr>
            <tr>
              <td>Storage (read &amp; write)</td>
              <td>To select photos from your gallery when creating a listing, and to cache listing images for faster browsing.</td>
            </tr>
            <tr>
              <td>Phone (place calls)</td>
              <td>To let you call a seller directly from a listing, since phone calls are how most livestock deals are actually agreed on.</td>
            </tr>
            <tr>
              <td>Internet</td>
              <td>To load and post listings, sync your favorites, and support in-app messaging between buyers and sellers.</td>
            </tr>
          </tbody>
        </table>
        <p>
          Each permission is requested at the time it's needed, and used only for the purpose
          described above. You can grant, deny, or revoke any of them at any time from your
          device's Settings.
        </p>

        <h3>2. Account information</h3>
        <p>
          Creating or managing listings requires verifying your phone number. We use this to
          identify your account and to let buyers and sellers reach the right person — we do not
          use it for anything beyond operating the marketplace.
        </p>

        <h3>3. What we do not do</h3>
        <p>
          Pasumithra contains no advertising SDKs and no third-party analytics or tracking
          libraries. We do not sell your information to data brokers or advertisers.
        </p>

        <h3>4. Listings and photos</h3>
        <p>
          Photos and details you add to a listing are visible to other users of the app, since
          that's the point of a listing — buyers need to see what's being offered. Favoriting a
          listing is only visible to you.
        </p>

        <h3>5. Data retention</h3>
        <p>
          Your listings and profile information are retained for as long as your account is
          active. You can delete a listing at any time from your profile. To request deletion of
          your account and associated data, contact us using the details below.
        </p>

        <h3>6. Children's privacy</h3>
        <p>
          Pasumithra is intended for adult buyers and sellers conducting livestock trade and is
          not directed at children. We do not knowingly collect information from children.
        </p>

        <h3>7. Changes to this policy</h3>
        <p>
          If this policy changes, we will update this page and revise the effective date above.
        </p>

        <h3>8. Contact us</h3>
        <p>
          Questions about this policy or how Pasumithra handles data? Email us at{' '}
          <a href="mailto:support@slcvet.com">support@slcvet.com</a>.
        </p>
      </div>
    </section>
  );
}
