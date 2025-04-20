import React, { useEffect, useRef } from 'react';
import './CargoMap.css';

const CargoMap = ({ location, history }) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);
  const markers = useRef([]);

  useEffect(() => {
    // Initialize the map
    const initMap = () => {
      if (window.google && mapRef.current) {
        const map = new window.google.maps.Map(mapRef.current, {
          zoom: 8,
          center: { lat: 41.0082, lng: 28.9784 }, // Default to Istanbul
          styles: [
            {
              featureType: 'all',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#2c3e50' }]
            }
          ]
        });
        mapInstance.current = map;
      }
    };

    // Load Google Maps script
    if (!window.google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAcdquJc_3pPfL8z2NteCWJ60rvli5uaXU`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }
  }, []);

  useEffect(() => {
    if (mapInstance.current && location) {
      // Clear existing markers
      markers.current.forEach(marker => marker.setMap(null));
      markers.current = [];

      // Add current location marker
      const currentMarker = new window.google.maps.Marker({
        position: location,
        map: mapInstance.current,
        title: 'Mevcut Konum',
        icon: {
          url: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
        }
      });
      markers.current.push(currentMarker);

      // Add history markers
      history.forEach((point, index) => {
        const marker = new window.google.maps.Marker({
          position: point.location,
          map: mapInstance.current,
          title: point.status,
          icon: {
            url: 'http://maps.google.com/mapfiles/ms/icons/green-dot.png'
          }
        });
        markers.current.push(marker);
      });

      // Center map on current location
      mapInstance.current.setCenter(location);
    }
  }, [location, history]);

  return (
    <div className="cargo-map-container">
      <h3>Kargo Konumu</h3>
      <div ref={mapRef} className="cargo-map" />
      <div className="map-legend">
        <div className="legend-item">
          <div className="legend-color blue"></div>
          <span>Mevcut Konum</span>
        </div>
        <div className="legend-item">
          <div className="legend-color green"></div>
          <span>Geçmiş Konumlar</span>
        </div>
      </div>
    </div>
  );
};

export default CargoMap; 