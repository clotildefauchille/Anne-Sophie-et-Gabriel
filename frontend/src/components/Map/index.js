import * as React from 'react';
import { useState } from 'react';
import ReactMapGL, {
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl } from 'react-map-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
import Pins from 'src/components/Pins';
import CityInfo from 'src/components/CityInfo';

import CITIES from 'src/data/cities.json';

const geolocateStyle = {
  top: 0,
  right: 0,
  padding: '10px',
};

const fullscreenControlStyle = {
  bottom: 36,
  right: 0,
  padding: '10px',
};

const navStyle = {
  top: 0,
  right: 0,
  padding: '10px',
};

const scaleControlStyle = {
  bottom: 25,
  left: 0,
  padding: '10px',
};

const Map = () => {
  const [viewport, setViewport] = useState({
    // width: 800,
    // height: 400,
    latitude: 49.124831814144976,
    longitude: 6.176491247513364,
    zoom: 7,
    bearing: 0,
    pitch: 0,
  });
  // const [settings, setsettings] = useState({
  //   // mapStyle: 'mapbox://styles/mapbox/streets-v11',
  //   scrollZoom: false,
  // });
  const [popupInfo, setPopupInfo] = useState(null);

  return (
    <>
      <ReactMapGL
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapboxApiAccessToken={
          'pk.eyJ1IjoiY2xvdGlsZGVmYXVjaGlsbGUiLCJhIjoiY2ttbHNpM3JtMWR5ODJwazU3dmd4ZGt4bCJ9.HORGlrqRn7pZUd9ZWYdy6g'
        }
        width="100vw"
        height="60vh"
        mapStyle="mapbox://styles/mapbox/streets-v11"
      >
        <Pins data={CITIES} onClick={setPopupInfo} />
        {popupInfo && (
          <Popup
            tipSize={5}
            anchor="top"
            longitude={popupInfo.longitude}
            latitude={popupInfo.latitude}
            closeOnClick={false}
            onClose={setPopupInfo}
          >
            <CityInfo info={popupInfo} />
          </Popup>
        )}

        {/* <GeolocateControl style={geolocateStyle} /> */}
        <FullscreenControl style={fullscreenControlStyle} />
        <NavigationControl style={navStyle} />
        <ScaleControl style={scaleControlStyle} />
      </ReactMapGL>
    </>
  );
};

export default Map;
