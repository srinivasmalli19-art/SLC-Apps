import { Link } from 'react-router-dom';
import '../shared/AppPages.css';

const faqs = [
  {
    q: 'Why is the map showing grey tiles or not loading?',
    a: 'This usually means the device has no internet connection at the moment. Live GPS Mode still works offline for capturing coordinates, but reverse geocoding, map tiles, and the map thumbnail require an internet connection.',
  },
  {
    q: 'Why does the address show as "Unknown"?',
    a: 'Reverse geocoding failed to resolve a readable address for those coordinates — this can happen in areas with sparse map data or a weak network connection. The GPS coordinates themselves are still captured accurately.',
  },
  {
    q: 'The camera preview is black or the app crashes on camera open.',
    a: 'Make sure the Camera permission is granted in your device Settings for SLC GPS Camera. If it still fails, try restarting the app, or restarting your device if the camera is in use by another app.',
  },
  {
    q: 'My photo did not save to the gallery.',
    a: 'Check that Photos/Storage permission is granted. Photos are saved to a dedicated "GPS Map Camera Pro" album — check there first if you don\'t see it in your main camera roll.',
  },
  {
    q: 'What does the "CUSTOM LOCATION USED" watermark mean?',
    a: 'It appears automatically whenever a photo was taken using Custom Location Mode (a manually picked point on the map) instead of your device\'s live GPS position, so the source of the location is always clear.',
  },
  {
    q: 'How do I revoke a permission I previously granted?',
    a: 'Open your device Settings → Apps → SLC GPS Camera → Permissions, and adjust Location, Camera, or Storage access at any time.',
  },
];

export default function Support() {
  return (
    <section className="page-section">
      <div className="page-section__inner app-doc">
        <h2>Support</h2>
        <p>
          Answers to common questions about SLC GPS Camera. If your issue isn't covered here,
          reach out on the <Link to="/apps/slc-gps-camera/contact">Contact page</Link> and we'll help
          directly.
        </p>
        <div className="app-doc__faq">
          {faqs.map((item) => (
            <details key={item.q} className="app-doc__faq-item">
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
