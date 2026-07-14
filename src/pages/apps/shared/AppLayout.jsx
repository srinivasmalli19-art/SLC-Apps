import { NavLink, Outlet } from 'react-router-dom';
import Layout from '../../../components/Layout.jsx';
import AppDetailHero from '../../../components/AppDetailHero.jsx';
import { getAppById } from '../../../data/apps.js';
import './AppLayout.css';

export default function AppLayout({ appId }) {
  const app = getAppById(appId);
  const base = `/apps/${appId}`;

  const tabs = [
    { to: `${base}/`, label: 'About', end: true },
    { to: `${base}/features`, label: 'Features' },
    { to: `${base}/privacy-policy`, label: 'Privacy Policy' },
    { to: `${base}/support`, label: 'Support' },
    ...(app.extraTabs || []).map((tab) => ({ to: `${base}/${tab.path}`, label: tab.label })),
    { to: `${base}/terms`, label: 'Terms & Conditions' },
    { to: `${base}/contact`, label: 'Contact' },
  ];

  return (
    <Layout>
      <AppDetailHero app={app} />
      <nav className="app-tabs" aria-label={`${app.name} sections`}>
        <div className="app-tabs__inner">
          {tabs.map((tab) => (
            <NavLink
              key={tab.to}
              to={tab.to}
              end={tab.end}
              className={({ isActive }) => 'app-tabs__link' + (isActive ? ' is-active' : '')}
            >
              {tab.label}
            </NavLink>
          ))}
        </div>
      </nav>
      <Outlet />
    </Layout>
  );
}
