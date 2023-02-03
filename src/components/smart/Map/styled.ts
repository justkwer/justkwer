import styled from 'styled-components';
import { MapContainer } from 'react-leaflet';

export const MapStyled = styled(MapContainer)`
  border: 2px solid ${({ theme }) => theme.colors.magenta};
  height: 600px;
  width: 100vw;
  opacity: 0;
  animation: ${({ theme }) => theme.keyframes.animation.opacity}
    ${({ theme }) => theme.keyframes.duration[0]} forwards;
  animation-delay: ${({ theme }) => theme.keyframes.delay[1]};

  .leaflet-right {
    display: none;
  }

  .leaflet-bar a {
    background-color: ${({ theme }) => theme.colors.magenta};
  }
`;
