import AppCard from './AppCard.jsx';
import { apps } from '../data/apps.js';
import './AppGrid.css';

export default function AppGrid() {
  return (
    <section className="app-grid-section">
      <div className="app-grid-section__inner">
        <div className="app-grid">
          {apps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </div>
    </section>
  );
}
