import React, { useState } from 'react';
import './AddressChange.css';

const AddressChange = ({ trackingNumber, currentAddress }) => {
  const [newAddress, setNewAddress] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here we would typically make an API call to update the address
    console.log('Address change requested:', {
      trackingNumber,
      newAddress,
    });
    setMessage('Adres değişikliği talebiniz alınmıştır. En kısa sürede size dönüş yapılacaktır.');
    setShowForm(false);
  };

  return (
    <div className="address-change">
      <div className="current-address">
        <h3>Mevcut Adres</h3>
        <p>{currentAddress}</p>
        <button 
          onClick={() => setShowForm(!showForm)} 
          className="change-address-btn"
        >
          {showForm ? 'İptal' : 'Adres Değiştir'}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="address-form">
          <div className="form-group">
            <label htmlFor="newAddress">Yeni Adres</label>
            <textarea
              id="newAddress"
              value={newAddress}
              onChange={(e) => setNewAddress(e.target.value)}
              required
              rows="4"
              placeholder="Yeni teslimat adresini giriniz"
            />
          </div>
          <button type="submit" className="submit-btn">
            Adres Değişikliği Talebi Gönder
          </button>
        </form>
      )}

      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default AddressChange; 