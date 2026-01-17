import React from 'react';
import './Maps.css';

const Maps = ({ id }) => {
  return (
    <section id={id} className="maps">
      <div className="container">
        <div className="map-wrapper">
          <div className="map-overlay">
            {/* The image shows a satellite view with markers */}
            <img 
              src="https://via.placeholder.com/1160x500?text=Satellite+Map+View" 
              alt="Satellite Map" 
              className="map-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Maps;
