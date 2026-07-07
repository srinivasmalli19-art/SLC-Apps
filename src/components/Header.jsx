import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';
import './Header.css';

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="site-header__brand">
          <span className="site-header__mark" aria-hidden="true">
            <Icon name="layers" size={20} strokeOnly />
          </span>
          <span className="site-header__brand-text">
            <strong>SLC Applications</strong>
            <small>SLC Technologies</small>
          </span>
        </Link>
        <nav className="site-header__nav" aria-label="Primary">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/apps/">Apps</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
