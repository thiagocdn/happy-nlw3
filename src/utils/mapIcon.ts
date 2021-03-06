import Leaflet from 'leaflet';
import mapMarkerImg from '../images/map-marker.svg';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,

  iconSize: [28, 38],
  iconAnchor: [14, 38],
  popupAnchor: [0, -60]
});

export default mapIcon;
