import React from 'react';
import { Link } from 'react-router-dom';
import { FiPlus } from 'react-icons/fi';

import '../styles/pages/orphanage-map.css';

import mapMarker from '../images/map-marker.svg';

function OrphanagesMap () {
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

      <div></div>

      <Link to='' className='create-orphanage'>
        <FiPlus size={32} color='#FFF'/>
      </Link>
    </div>
  );
};

export default OrphanagesMap;