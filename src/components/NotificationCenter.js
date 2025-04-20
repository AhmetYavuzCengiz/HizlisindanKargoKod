import React, { useState } from 'react';
import './NotificationCenter.css';

const NotificationCenter = () => {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      trackingNumber: 'TR123456789',
      message: 'Kargonuz İstanbul dağıtım merkezine ulaştı',
      date: '2023-04-20 14:30',
      read: false,
    },
    {
      id: 2,
      trackingNumber: 'TR987654321',
      message: 'Kargonuz teslim edildi',
      date: '2023-04-19 10:15',
      read: true,
    },
    {
      id: 3,
      trackingNumber: 'TR456789123',
      message: 'Kargonuz yola çıktı',
      date: '2023-04-18 09:45',
      read: true,
    },
  ]);

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({ ...notification, read: true }))
    );
  };

  const deleteNotification = (id) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id));
  };

  return (
    <div className="notification-center">
      <div className="notification-header">
        <h2>Bildirimler</h2>
        <button onClick={markAllAsRead} className="mark-all-read">
          Tümünü Okundu İşaretle
        </button>
      </div>

      <div className="notifications-list">
        {notifications.length === 0 ? (
          <p className="no-notifications">Henüz bildiriminiz bulunmamaktadır.</p>
        ) : (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className={`notification-item ${notification.read ? 'read' : 'unread'}`}
            >
              <div className="notification-content">
                <div className="notification-message">
                  <span className="tracking-number">
                    {notification.trackingNumber}
                  </span>
                  <p>{notification.message}</p>
                </div>
                <span className="notification-date">{notification.date}</span>
              </div>
              <div className="notification-actions">
                {!notification.read && (
                  <button
                    onClick={() => markAsRead(notification.id)}
                    className="mark-read"
                  >
                    Okundu İşaretle
                  </button>
                )}
                <button
                  onClick={() => deleteNotification(notification.id)}
                  className="delete"
                >
                  Sil
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default NotificationCenter; 