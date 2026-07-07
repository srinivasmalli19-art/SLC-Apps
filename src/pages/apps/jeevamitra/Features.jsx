import FeatureGrid from '../../../components/FeatureGrid.jsx';
import { getAppById } from '../../../data/apps.js';
import '../shared/AppPages.css';

const app = getAppById('jeevamitra');

const features = [
  {
    icon: 'leaf',
    title: 'Farm & Livestock Management',
    description: 'Track and manage livestock and farm records in one place, built for day-to-day use by farmers and shepherds.',
  },
  {
    icon: 'stethoscope',
    title: 'Vet Booking',
    description: 'Book veterinary consultations directly from the app when animals need professional care.',
  },
  {
    icon: 'mail',
    title: 'Alerts & Notifications',
    description: 'Stay informed with timely push alerts and notifications relevant to your farm and livestock.',
  },
  {
    icon: 'headset',
    title: 'Voice-Assisted Interface',
    description: 'A voice-assisted experience designed for accessibility, including users with limited literacy.',
  },
  {
    icon: 'gps',
    title: 'Location-Aware Tools',
    description: 'Live GPS and mapping help connect farmers with nearby services without needing to type or read an address.',
  },
  {
    icon: 'layers',
    title: 'Farmer & Shepherd Roles',
    description: 'Tailored experiences for both farmers and shepherds, reflecting how rural livestock ecosystems actually work.',
  },
];

export default function Features() {
  return (
    <section className="page-section">
      <div className="page-section__inner app-doc">
        <div className="page-section__heading" style={{ marginBottom: 32 }}>
          <h2>Features</h2>
          <p>A geo-spatial platform built around the real needs of India's rural livestock and agricultural community.</p>
        </div>
        <FeatureGrid features={features} accent={app.accent} />
      </div>
    </section>
  );
}
