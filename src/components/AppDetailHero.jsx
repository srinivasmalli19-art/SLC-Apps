import Icon from './Icon.jsx';
import './AppDetailHero.css';

export default function AppDetailHero({ app, children }) {
  return (
    <section className="app-hero" style={{ '--app-accent': app.accent }}>
      <div className="app-hero__inner">
        <div className="app-hero__icon">
          <Icon name={app.icon} size={34} strokeOnly />
        </div>
        <h1>{app.name}</h1>
        <p className="app-hero__tagline">{app.tagline}</p>
        <p className="app-hero__description">{app.description}</p>
        {children}
      </div>
    </section>
  );
}
