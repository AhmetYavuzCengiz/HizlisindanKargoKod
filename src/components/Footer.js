import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Hızlısından Kargo</h3>
          <p>
            Kargo takip sistemimiz ile kargonuzun durumunu anlık olarak takip
            edin.
          </p>
        </div>

        <div className="footer-section">
          <h4>Hızlı Bağlantılar</h4>
          <ul>
            <li>
              <Link to="/">Ana Sayfa</Link>
            </li>
            <li>
              <Link to="/tracking">Kargo Takip</Link>
            </li>
            <li>
              <Link to="/support">Destek</Link>
            </li>
            <li>
              <Link to="/notifications">Bildirimler</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>İletişim</h4>
          <ul>
            <li>E-posta: info@hizlisindankargo.com</li>
            <li>Telefon: 0850 123 45 67</li>
            <li>Adres: İstanbul, Türkiye</li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Sosyal Medya</h4>
          <div className="social-links">
            <a href="#" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 Hızlısından Kargo. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer; 