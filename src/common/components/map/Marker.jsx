import {Marker as GoogleMapMarker} from '@react-google-maps/api';
import React from 'react';

const Marker = ({position}) => {
  return (
    <GoogleMapMarker
      position={position}
      icon={{
        url: 'https://maps.google.com/mapfiles/kml/shapes/cycling.png', // Replace with your custom icon URL
        scaledSize: new window.google.maps.Size(25, 25),
      }}
    />
  );
};

export default Marker;
