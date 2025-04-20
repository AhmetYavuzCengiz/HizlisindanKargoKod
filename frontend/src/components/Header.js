import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>Hızlısından Kargo</h1>
        </Link>
        <nav className="main-nav">
          <ul>
            <li><Link to="/">Ana Sayfa</Link></li>
            <li><Link to="/tracking">Kargo Takip</Link></li>
            <li><Link to="/support">Destek</Link></li>
            <li><Link to="/notifications">Bildirimler</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 