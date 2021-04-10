import * as React from 'react';
import { useState } from 'react';
import ReactMapGL, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl } from 'react-map-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
import ControlPanel from 'src/components/ControlPanel';
import Pins from 'src/components/Pins';
import CityInfo from 'src/components/CityInfo';

import CITIES from 'src/data/cities.json';

const geolocateStyle = {
  top: 0,
  left: 0,
  padding: '10px',
};

const fullscreenControlStyle = {
  top: 36,
  left: 0,
  padding: '10px',
};

const navStyle = {
  top: 72,
  left: 0,
  padding: '10px',
};

const scaleControlStyle = {
  bottom: 36,
  left: 0,
  padding: '10px',
};

const Map = () => {
  const [viewport, setViewport] = useState({
    // width: 800,
    // height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
  });
  const [settings, setsettings] = useState({
    // mapStyle: 'mapbox://styles/mapbox/streets-v11',
    scrollZoom: false,
  });
  const [popupInfo, setPopupInfo] = useState(null);

  //pour les performances, utilise le cache au niveau des markers
  // const markers = React.useMemo(() => data.map(
  //   city => (
  //     <Marker key={city.name} longitude={city.longitude} latitude={city.latitude} >
  //       <img src="pin.png" />
  //     </Marker>
  //   )
  // ), [props.data]);

  return (
    <>
      <ReactMapGL
        {...viewport}
        onViewportChange={(nextViewport) => setViewport(nextViewport)}
        mapboxApiAccessToken={
          'pk.eyJ1IjoiY2xvdGlsZGVmYXVjaGlsbGUiLCJhIjoiY2ttbHNpM3JtMWR5ODJwazU3dmd4ZGt4bCJ9.HORGlrqRn7pZUd9ZWYdy6g'
        }
        width="50vw"
        height="50vh"
        {...settings}
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

        <GeolocateControl style={geolocateStyle} />
        <FullscreenControl style={fullscreenControlStyle} />
        <NavigationControl style={navStyle} />
        <ScaleControl style={scaleControlStyle} />
      </ReactMapGL>
      <ControlPanel />
    </>
  );
};

export default Map;
