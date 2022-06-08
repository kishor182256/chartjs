import React from 'react'
import { Map as LeafletMap, TileLayer } from "react-leaflet";
import { showDataOnMap } from '../helper/utils';
import '../styles/Map.css'
const Map = ({casesType,zoom,center,data}) => {
  console.log('selectedCountry====+++>>>',data);
  return (
    <div className="map">
      <LeafletMap center={center} zoom={3}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {showDataOnMap(data, casesType)}
       
      </LeafletMap>
    </div>
  )
}

export default Map