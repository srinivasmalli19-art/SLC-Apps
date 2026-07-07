import '../shared/AppPages.css';

const EFFECTIVE_DATE = 'July 7, 2026';

export default function PrivacyPolicy() {
  return (
    <section className="page-section">
      <div className="page-section__inner app-doc">
        <h2>Privacy Policy</h2>
        <p className="app-doc__meta">Effective date: {EFFECTIVE_DATE} · Applies to: SLC GPS Camera (GPS Map Camera Pro)</p>

        <p>
          SLC Technologies ("we", "us", "our") built SLC GPS Camera to help you capture photos
          with location information overlaid on the image. This Privacy Policy explains what
          information the app accesses, how it is used, and what stays entirely on your device.
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
              <td>To determine your current GPS coordinates in Live GPS Mode, and to resolve those coordinates to a readable address (reverse geocoding).</td>
            </tr>
            <tr>
              <td>Camera</td>
              <td>To let you take photos directly within the app.</td>
            </tr>
            <tr>
              <td>Photos / media (read &amp; write storage)</td>
              <td>To save the captured, location-stamped photo to a dedicated album in your device's gallery, and to let you select or preview images within the app.</td>
            </tr>
            <tr>
              <td>Internet &amp; network state</td>
              <td>To load map tiles, perform reverse geocoding, and fetch an optional static map thumbnail that appears on the saved photo.</td>
            </tr>
          </tbody>
        </table>
        <p>
          Every one of these permissions is requested at the time it is needed, and each is used
          only for the purpose described above. You can grant, deny, or revoke any of them at any
          time from your device's Settings, and the app will tell you if a feature can't work
          without a permission you've denied.
        </p>

        <h3>2. What we do not collect</h3>
        <p>
          SLC GPS Camera does not require you to create an account or sign in. We do not collect
          your name, email address, or phone number. The app contains no advertising SDKs and no
          analytics or tracking libraries — it does not build a profile of you, and it does not
          sell or share your data with data brokers or advertisers.
        </p>

        <h3>3. Where your data actually goes</h3>
        <p>
          <strong>Photos and location overlays are created and stored entirely on your device.</strong>{' '}
          The captured image, its GPS overlay, and the album it's saved to all live in your
          device's local storage — SLC Technologies does not receive a copy of your photos, and
          they are never uploaded to our servers, because we do not operate a server that photos
          are sent to.
        </p>
        <p>
          To display maps and resolve coordinates into addresses, the app calls Google's mapping
          services (Maps SDK for Android, Geocoding API, and, optionally, the Static Maps API for
          the thumbnail on your photo). These calls send the coordinates you are viewing or
          capturing to Google so it can return map tiles, an address, or a thumbnail image. This
          data exchange is governed by{' '}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">
            Google's Privacy Policy
          </a>
          . We do not control, and are not responsible for, how Google processes this data beyond
          fulfilling the map/geocoding request.
        </p>

        <h3>4. Data retention</h3>
        <p>
          Because photos are saved locally to your device's gallery, they remain there — and are
          retained for as long — as you choose to keep them. Deleting a photo from your gallery or
          uninstalling the app removes the data associated with that installation from your
          device. We do not retain copies elsewhere.
        </p>

        <h3>5. Children's privacy</h3>
        <p>
          SLC GPS Camera is a general-purpose documentation tool and is not directed at children.
          We do not knowingly collect personal information from children. If you believe a child
          has provided us information, contact us using the details below and we will address it.
        </p>

        <h3>6. Security</h3>
        <p>
          Since photos and location data are stored on-device rather than transmitted to us, their
          security depends on your device's own protections (lock screen, encryption, gallery
          access controls). Any network calls the app makes to Google's mapping services use
          standard encrypted connections (HTTPS).
        </p>

        <h3>7. Your choices</h3>
        <ul>
          <li>Deny or revoke Location, Camera, or Storage permissions at any time from your device Settings.</li>
          <li>Delete individual photos, or the entire "GPS Map Camera Pro" album, directly from your gallery app.</li>
          <li>Uninstall the app to remove it and its local data from your device.</li>
        </ul>

        <h3>8. Changes to this policy</h3>
        <p>
          If this policy changes — for example, if a future version of the app adds a new feature
          that changes how data is handled — we will update this page and revise the effective
          date above.
        </p>

        <h3>9. Contact us</h3>
        <p>
          Questions about this policy or how SLC GPS Camera handles data? Email us at{' '}
          <a href="mailto:support@slcvet.com">support@slcvet.com</a>.
        </p>
      </div>
    </section>
  );
}
