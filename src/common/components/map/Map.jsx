import {GoogleMap, useLoadScript} from '@react-google-maps/api';
import React, {useState} from 'react';
import './Map.css';
import MapTypeToggle from './MapTypeToggle';
import MarkerComponent from './Marker';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const center = {lat: -34.397, lng: 150.644};

const Map = () => {
  const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // Replace with your API key
  });

  const [mapType, setMapType] = useState('roadmap');

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading Maps</div>;

  return (
    <div className="map-container">
      <MapTypeToggle mapType={mapType} setMapType={setMapType} />
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={14}
        center={center}
        mapTypeId={mapType}>
        <MarkerComponent position={{lat: -34.397, lng: 150.644}} />
        <MarkerComponent position={{lat: -34.398, lng: 150.645}} />
        {/* Add more MarkerComponents as needed */}
      </GoogleMap>
    </div>
  );
};

export default Map;
