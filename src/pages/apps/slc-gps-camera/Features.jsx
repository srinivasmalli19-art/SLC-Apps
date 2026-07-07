import FeatureGrid from '../../../components/FeatureGrid.jsx';
import { getAppById } from '../../../data/apps.js';
import '../shared/AppPages.css';

const app = getAppById('slc-gps-camera');

const features = [
  {
    icon: 'gps',
    title: 'Live GPS Mode',
    description: 'Real-time device GPS coordinates and reverse-geocoded address burned directly onto your photo.',
  },
  {
    icon: 'map',
    title: 'Custom Location Mode',
    description: 'Tap anywhere on the map to pick a specific location, instead of relying on live GPS.',
  },
  {
    icon: 'layers',
    title: 'Photo Overlay',
    description: 'Latitude, longitude, address, date/time, and a small map thumbnail composited directly into the image.',
  },
  {
    icon: 'watermark',
    title: 'Custom Location Watermark',
    description: 'A clear "CUSTOM LOCATION USED" banner is added automatically whenever custom mode is used.',
  },
  {
    icon: 'shield',
    title: 'Documentation Disclaimer',
    description: '"For documentation purposes only" is always shown, so the photo\'s intent is unambiguous.',
  },
  {
    icon: 'gallery',
    title: 'Dedicated Gallery Album',
    description: 'All captures are saved to a dedicated "GPS Map Camera Pro" album in your device gallery.',
  },
];

export default function Features() {
  return (
    <section className="page-section">
      <div className="page-section__inner app-doc">
        <div className="page-section__heading" style={{ marginBottom: 32 }}>
          <h2>Features</h2>
          <p>Everything SLC GPS Camera does, built around one goal: reliable, tamper-evident location documentation.</p>
        </div>
        <FeatureGrid features={features} accent={app.accent} />
      </div>
    </section>
  );
}
