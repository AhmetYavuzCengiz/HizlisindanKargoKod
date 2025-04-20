import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Hızlısından Kargo Takip Sistemi</h1>
          <p>
            Kargonuzun durumunu anlık olarak takip edin, bildirimler alın ve
            destek hizmetlerinden yararlanın.
          </p>
          <Link to="/tracking" className="cta-button">
            Kargo Takip Et
          </Link>
        </div>
      </section>

      <section className="features">
        <h2>Özelliklerimiz</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📦</div>
            <h3>Anlık Takip</h3>
            <p>
              Kargonuzun güncel durumunu ve konumunu anlık olarak takip edin.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🔔</div>
            <h3>Bildirimler</h3>
            <p>
              Kargonuzun durumu değiştiğinde anında bildirim alın.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">🗺️</div>
            <h3>Harita Üzerinde Takip</h3>
            <p>
              Kargonuzun konumunu harita üzerinde görüntüleyin.
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">⏱️</div>
            <h3>Tahmini Teslimat</h3>
            <p>
              Kargonuzun tahmini teslimat zamanını öğrenin.
            </p>
          </div>
        </div>
      </section>

      <section className="how-it-works">
        <h2>Nasıl Çalışır?</h2>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Takip Numarası Girin</h3>
            <p>Kargo takip numaranızı girin</p>
          </div>

          <div className="step">
            <div className="step-number">2</div>
            <h3>Durumu Görüntüleyin</h3>
            <p>Kargonuzun güncel durumunu görüntüleyin</p>
          </div>

          <div className="step">
            <div className="step-number">3</div>
            <h3>Bildirimleri Takip Edin</h3>
            <p>Durum değişikliklerinden haberdar olun</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Kargonuzu Hemen Takip Edin</h2>
        <p>
          Kargo takip numaranızı girerek kargonuzun durumunu öğrenin ve
          bildirimlerden haberdar olun.
        </p>
        <Link to="/tracking" className="cta-button">
          Takip Etmeye Başla
        </Link>
      </section>
    </div>
  );
};

export default Home; 