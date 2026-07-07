import '../shared/AppPages.css';

export default function About() {
  return (
    <section className="page-section">
      <div className="page-section__inner app-doc">
        <h2>About SLC GPS Camera</h2>
        <p>
          SLC GPS Camera (published as GPS Map Camera Pro) is an Android application built for
          people who need proof of where a photo was taken — field staff, surveyors, delivery
          and logistics teams, real estate and construction professionals, and anyone documenting
          site visits.
        </p>
        <p>
          Instead of taking a photo and separately noting the location, SLC GPS Camera captures
          the coordinates, a reverse-geocoded address, and the date and time, and burns them
          directly onto the photo at the moment it is taken. The result is a single image that
          stands on its own as a location-stamped record.
        </p>
        <h3>Two capture modes</h3>
        <p>
          <strong>Live GPS Mode</strong> uses the device's current GPS position in real time.
          The app fetches your live coordinates, resolves them to a readable address, and overlays
          both — along with the date and time — onto the photo as you capture it.
        </p>
        <p>
          <strong>Custom Location Mode</strong> lets you tap any point on a map to select a
          location manually, useful when documenting a location you are near but not standing
          exactly on. Photos taken in this mode are clearly marked with a "CUSTOM LOCATION USED"
          watermark, so there is never ambiguity about how the location was determined.
        </p>
        <h3>Built for documentation, not surveillance</h3>
        <p>
          Every photo captured in the app carries a visible "For documentation purposes only"
          disclaimer and a clear label showing which mode was used. Photos are saved to a
          dedicated "GPS Map Camera Pro" album in your device's gallery, where they stay under
          your control like any other photo.
        </p>
      </div>
    </section>
  );
}
