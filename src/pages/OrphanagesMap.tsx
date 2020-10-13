import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';
import '../styles/pages/orphanage-map.css';

import mapMarker from '../images/map-marker.svg';

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
      </Map>

      <Link to='' className='create-orphanage'>
        <FiPlus size={32} color='#FFF'/>
      </Link>
    </div>
  );
};

export default OrphanagesMap;