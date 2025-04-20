import React, { useState } from 'react';
import './Tracking.css';
import AddressChange from './AddressChange';
import CargoMap from './CargoMap';

const Tracking = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingResults, setTrackingResults] = useState(null);
  const [error, setError] = useState('');

  const handleTrackingSubmit = (e) => {
    e.preventDefault();
    if (!trackingNumber) {
      setError('Lütfen takip numarası giriniz');
      return;
    }
    // Here we would typically make an API call to get tracking information
    // For now, we'll use mock data
    setTrackingResults({
      status: 'Yolda',
      estimatedDelivery: '2023-04-25',
      currentLocation: 'İstanbul',
      deliveryAddress: 'Atatürk Caddesi No:123, Kadıköy/İstanbul',
      location: { lat: 41.0082, lng: 28.9784 }, // Istanbul coordinates
      history: [
        { 
          date: '2023-04-20', 
          location: { lat: 39.9334, lng: 32.8597 }, // Ankara coordinates
          status: 'Kabul Edildi' 
        },
        { 
          date: '2023-04-21', 
          location: { lat: 38.4237, lng: 27.1428 }, // Izmir coordinates
          status: 'Dağıtım Merkezi' 
        },
        { 
          date: '2023-04-22', 
          location: { lat: 41.0082, lng: 28.9784 }, // Istanbul coordinates
          status: 'Yolda' 
        },
      ],
    });
    setError('');
  };

  return (
    <div className="tracking-container">
      <h2>Kargo Takip</h2>
      <form onSubmit={handleTrackingSubmit} className="tracking-form">
        <div className="input-group">
          <input
            type="text"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            placeholder="Kargo takip numarası giriniz"
            className="tracking-input"
          />
          <button type="submit" className="track-button">
            Takip Et
          </button>
        </div>
        {error && <p className="error-message">{error}</p>}
      </form>

      {trackingResults && (
        <div className="tracking-results">
          <div className="status-card">
            <h3>Mevcut Durum</h3>
            <p className="status">{trackingResults.status}</p>
            <p className="location">Konum: {trackingResults.currentLocation}</p>
            <p className="delivery">
              Tahmini Teslimat: {trackingResults.estimatedDelivery}
            </p>
          </div>

          <div className="history-card">
            <h3>Kargo Geçmişi</h3>
            <ul className="history-list">
              {trackingResults.history.map((item, index) => (
                <li key={index} className="history-item">
                  <span className="date">{item.date}</span>
                  <span className="location">{item.status}</span>
                  <span className="status">{item.status}</span>
                </li>
              ))}
            </ul>
          </div>

          <CargoMap 
            location={trackingResults.location}
            history={trackingResults.history}
          />

          <AddressChange 
            trackingNumber={trackingNumber}
            currentAddress={trackingResults.deliveryAddress}
          />
        </div>
      )}
    </div>
  );
};

export default Tracking; 