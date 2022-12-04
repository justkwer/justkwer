import styled from 'styled-components';
import { MapContainer } from 'react-leaflet';

export const MeOnMapStyled = styled(MapContainer)`
  border: 2px solid ${({ theme }) => theme.colors.magenta};
  height: 600px;
  width: 100vw;

  .leaflet-right {
    display: none;
  }

  .leaflet-bar a {
    background-color: ${({ theme }) => theme.colors.magenta};
  }
`;
