import React, { useState } from 'react';
import './Support.css';

const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    trackingNumber: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here we would typically make an API call to submit the support request
    console.log('Support request submitted:', formData);
    alert('Destek talebiniz alınmıştır. En kısa sürede size dönüş yapılacaktır.');
    setFormData({
      name: '',
      email: '',
      trackingNumber: '',
      subject: '',
      message: '',
    });
  };

  return (
    <div className="support-container">
      <h2>Destek Merkezi</h2>
      <div className="support-content">
        <div className="support-info">
          <h3>Bize Ulaşın</h3>
          <p>
            Kargo takip sistemimizle ilgili her türlü soru ve öneriniz için bize
            ulaşabilirsiniz.
          </p>
          <div className="contact-methods">
            <div className="contact-method">
              <h4>E-posta</h4>
              <p>destek@hizlisindankargo.com</p>
            </div>
            <div className="contact-method">
              <h4>Telefon</h4>
              <p>0850 123 45 67</p>
            </div>
            <div className="contact-method">
              <h4>Çalışma Saatleri</h4>
              <p>Pazartesi - Cuma: 09:00 - 18:00</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="support-form">
          <div className="form-group">
            <label htmlFor="name">Ad Soyad</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-posta</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="trackingNumber">Kargo Takip Numarası (Opsiyonel)</label>
            <input
              type="text"
              id="trackingNumber"
              name="trackingNumber"
              value={formData.trackingNumber}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="subject">Konu</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Mesajınız</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
            />
          </div>

          <button type="submit" className="submit-button">
            Gönder
          </button>
        </form>
      </div>
    </div>
  );
};

export default Support; 