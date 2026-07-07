import Icon from './Icon.jsx';
import { CONTACT_EMAIL } from '../data/apps.js';

export default function ContactCta({ appName }) {
  return (
    <div className="contact-cta">
      <h2>Questions about {appName}?</h2>
      <p>Reach out and our team will get back to you.</p>
      <a className="button" href={`mailto:${CONTACT_EMAIL}`}>
        <Icon name="mail" size={18} strokeOnly />
        {CONTACT_EMAIL}
      </a>
    </div>
  );
}
