import { Link } from 'react-router-dom';
import { apps, CONTACT_EMAIL, COMPANY_NAME } from '../data/apps.js';
import './Footer.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__col">
          <strong>SLC Applications</strong>
          <p>Developed by {COMPANY_NAME}</p>
        </div>
        <div className="site-footer__col">
          <span className="site-footer__heading">Company</span>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/apps/">Apps</Link>
        </div>
        <div className="site-footer__col">
          <span className="site-footer__heading">Applications</span>
          {apps.map((app) => (
            <Link key={app.id} to={app.path}>
              {app.name}
            </Link>
          ))}
        </div>
        <div className="site-footer__col">
          <span className="site-footer__heading">Support</span>
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>&copy; {year} {COMPANY_NAME}. All rights reserved.</span>
      </div>
    </footer>
  );
}
