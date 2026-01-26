import React from 'react';
import './Maps.css';
import mapSatellite from '../assets/map-satellite.png';

const Maps = ({ id }) => {
  return (
    <section id={id} className="maps">
      <div className="container">
        <div className="map-wrapper">
          <div className="map-overlay">
            {/* Satellite view of Barangay 178 territory */}
            <img 
              src={mapSatellite} 
              alt="Satellite Map of Barangay 178" 
              className="map-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Maps;
