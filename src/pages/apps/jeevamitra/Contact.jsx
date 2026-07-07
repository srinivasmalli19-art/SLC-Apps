import Icon from '../../../components/Icon.jsx';
import '../shared/AppPages.css';

export default function Contact() {
  return (
    <section className="page-section">
      <div className="page-section__inner app-doc">
        <h2>Contact</h2>
        <p>
          Have a question about JeevaMitra, a vet booking, or found a bug? We'd like to hear from
          you.
        </p>
        <a className="button app-doc__contact-button" href="mailto:support@slcvet.com">
          <Icon name="mail" size={18} strokeOnly />
          support@slcvet.com
        </a>
        <p className="app-doc__meta">We read every message sent to this address and respond as soon as we can.</p>
      </div>
    </section>
  );
}
