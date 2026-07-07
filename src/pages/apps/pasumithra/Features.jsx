import FeatureGrid from '../../../components/FeatureGrid.jsx';
import { getAppById } from '../../../data/apps.js';
import '../shared/AppPages.css';

const app = getAppById('pasumithra');

const features = [
  {
    icon: 'cattle',
    title: 'Post Listings',
    description: 'Sellers can post livestock listings with details and photos for buyers to browse.',
  },
  {
    icon: 'mail',
    title: 'Chat with Sellers',
    description: 'Message sellers directly in-app to ask questions and negotiate before you buy.',
  },
  {
    icon: 'shield',
    title: 'Secure OTP Login',
    description: 'Sign in quickly and securely with one-time password authentication.',
  },
  {
    icon: 'layers',
    title: 'Favorites',
    description: 'Save listings you’re interested in and come back to them later.',
  },
  {
    icon: 'document',
    title: 'Listing Details',
    description: 'View complete details for each listing before reaching out to a seller.',
  },
  {
    icon: 'headset',
    title: 'Profile Management',
    description: 'Manage your buyer or seller profile and keep your listings up to date.',
  },
];

export default function Features() {
  return (
    <section className="page-section">
      <div className="page-section__inner app-doc">
        <div className="page-section__heading" style={{ marginBottom: 32 }}>
          <h2>Features</h2>
          <p>A direct, no-middleman marketplace connecting livestock buyers and sellers.</p>
        </div>
        <FeatureGrid features={features} accent={app.accent} />
      </div>
    </section>
  );
}
