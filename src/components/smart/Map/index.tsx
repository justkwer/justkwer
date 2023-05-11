import React from 'react';
import 'leaflet/dist/leaflet.css';
import { Marker, Popup, TileLayer } from 'react-leaflet';
import { icon } from 'leaflet';
import { MapStyled } from './styled';
import { mapProps } from '@core/constants';

const Map = () => {
  const marker = icon({
    iconUrl: '/svg/marker.svg',
    iconSize: [95, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });

  const { coords, zoom } = mapProps;

  return (
    <MapStyled center={coords} zoom={zoom}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={coords} icon={marker}>
        <Popup>My home</Popup>
      </Marker>
    </MapStyled>
  );
};

export default Map;
