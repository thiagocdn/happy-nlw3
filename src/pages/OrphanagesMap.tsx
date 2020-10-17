import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus, FiArrowRight } from 'react-icons/fi';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Leaflet from 'leaflet';

import 'leaflet/dist/leaflet.css';
import '../styles/pages/orphanage-map.css';

import mapMarker from '../images/map-marker.svg';

const mapIcon = Leaflet.icon({
  iconUrl: mapMarker,
  iconSize: [28, 38],
  iconAnchor: [14, 38],
  popupAnchor: [170, -2],
})

function OrphanagesMap () {

  console.log(process.env.REACT_APP_MAPBOX_TOKEN)
  return(
    <div id="page-map">
      <aside>
        <header>
          <img src={mapMarker} alt="Map Marker"/>
          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando sua visita :)</p>
        </header>

        <footer>
          <strong>Valinhos</strong>
          <span>São Paulo</span>
        </footer>
      </aside>

      <Map
        center={[-22.9722666,-46.9902287]}
        zoom={15}
        style={{
          width: '100%',
          height: '100%'
        }}
      >
        {/* <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />

        <Marker
          icon={mapIcon}
          position={[-22.9722666,-46.9902287]}
        >
          <Popup closeButton={false} minWidth={240} maxWidth={240} className='map-popup'>
            Lar das Meninas
            <Link to="/orphanages/1">
              <FiArrowRight size={20} color='#FFF'/>
            </Link>
          </Popup>
        </Marker>


      </Map>

      <Link to='/orphanages/create' className='create-orphanage'>
        <FiPlus size={32} color='#FFF'/>
      </Link>
    </div>
  );
};

export default OrphanagesMap;