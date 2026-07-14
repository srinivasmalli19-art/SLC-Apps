import { Link } from 'react-router-dom';
import Icon from '../../../components/Icon.jsx';
import '../shared/AppPages.css';

const DELETE_EMAIL = 'support@slcvet.com';
const SUBJECT = 'Account Deletion Request';
const MAILTO = `mailto:${DELETE_EMAIL}?subject=${encodeURIComponent(SUBJECT)}`;

export default function DeleteAccount() {
  return (
    <section className="page-section">
      <div className="page-section__inner app-doc">
        <h2>Delete Your JeevaMitra Account</h2>
        <p>
          You can request permanent deletion of your JeevaMitra account and the personal data
          associated with it at any time.
        </p>

        <h3>How to request deletion</h3>
        <p>
          Send an email to <a href="mailto:support@slcvet.com">{DELETE_EMAIL}</a> with the subject
          line <strong>"{SUBJECT}"</strong>, and include the following information so we can
          verify it's your account:
        </p>
        <ul>
          <li>Your registered phone number</li>
          <li>Your name</li>
          <li>Reason for deletion (optional)</li>
        </ul>

        <a className="button app-doc__contact-button" href={MAILTO}>
          <Icon name="mail" size={18} strokeOnly />
          Email {DELETE_EMAIL}
        </a>

        <h3>What happens next</h3>
        <p>
          Once we verify your identity using the details above, we will permanently delete your
          account and the personal data associated with it, including your farm, livestock, and
          booking records.
        </p>
        <p>
          Some information may be retained where required by law — for example, records we're
          obligated to keep for accounting, fraud prevention, or other regulatory compliance.
        </p>

        <h3>Related pages</h3>
        <p>
          See our <Link to="/apps/jeevamitra/privacy-policy">Privacy Policy</Link> for details on
          how JeevaMitra handles your data, or visit{' '}
          <Link to="/apps/jeevamitra/support">Support</Link> if you have other questions.
        </p>
      </div>
    </section>
  );
}
