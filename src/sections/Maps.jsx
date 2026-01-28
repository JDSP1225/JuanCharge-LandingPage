import React from 'react';
import './Maps.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

const Maps = ({ id }) => {
  const position = [14.756274, 121.0602838];
  return (
    <section id={id} className="maps">
      <div className="map-wrapper">
        <MapContainer center={position} zoom={16} scrollWheelZoom={false} className="leaflet-container">
          <TileLayer attribution='&copy; <a href="https://www.esri.com/">Esri</a>' url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}" />
          <Marker position={position}>
            <Popup>
              Target Deployment Area: <br /> <b>Barangay 178, Caloocan</b>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>
  );
};

export default Maps;
