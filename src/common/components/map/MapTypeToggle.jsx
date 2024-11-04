import React from 'react';
import './Map.css';

const MapTypeToggle = ({mapType, setMapType}) => {
  return (
    <div className="toggle-container">
      <button
        className={`toggle-button ${mapType === 'roadmap' ? 'active' : ''}`}
        onClick={() => setMapType('roadmap')}>
        Map
      </button>
      <button
        className={`toggle-button ${mapType === 'satellite' ? 'active' : ''}`}
        onClick={() => setMapType('satellite')}>
        Satellite
      </button>
    </div>
  );
};

export default MapTypeToggle;
