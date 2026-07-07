import Icon from './Icon.jsx';
import './FeatureGrid.css';

export default function FeatureGrid({ features, accent }) {
  return (
    <div className="feature-grid" style={{ '--app-accent': accent }}>
      {features.map((feature) => (
        <div className="feature-card" key={feature.title}>
          <div className="feature-card__icon">
            <Icon name={feature.icon || 'check'} size={20} strokeOnly />
          </div>
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
}
