import React from 'react';
import { Marker, Popup, TileLayer } from 'react-leaflet';
import { icon } from 'leaflet';
import myMarker from '../../../../../assets/img/marker.svg';
import { MeOnMapStyled } from './styled';
import 'leaflet/dist/leaflet.css';
import { mapProps } from '../../../../../constants/constants';

const MeOnMap = () => {
  const marker = icon({
    iconUrl: myMarker,
    iconSize: [95, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
  });

  const { coords, zoom } = mapProps;

  return (
    <MeOnMapStyled center={coords} zoom={zoom}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={coords} icon={marker}>
        <Popup>My home</Popup>
      </Marker>
    </MeOnMapStyled>
  );
};

export default MeOnMap;
