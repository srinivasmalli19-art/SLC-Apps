import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import './AppCard.css';

export default function AppCard({ app }) {
  const isComingSoon = app.status === 'coming-soon';

  return (
    <Link to={app.path} className="app-card" style={{ '--app-accent': app.accent }}>
      <div className="app-card__icon">
        <Icon name={app.icon} size={26} strokeOnly />
      </div>
      <div className="app-card__body">
        <div className="app-card__title-row">
          <h3>{app.name}</h3>
          {isComingSoon && <span className="app-card__badge">Coming soon</span>}
        </div>
        <p className="app-card__tagline">{app.tagline}</p>
        <p className="app-card__description">{app.description}</p>
      </div>
      <div className="app-card__cta">
        <span>{isComingSoon ? 'Learn more' : 'View app'}</span>
        <Icon name="arrowRight" size={16} strokeOnly />
      </div>
    </Link>
  );
}
