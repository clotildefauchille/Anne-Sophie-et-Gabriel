import * as React from 'react';
import { useState, useEffect } from 'react';
import './style.scss';
import ReactMapGL, {
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
} from 'react-map-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
import Pins from 'src/components/Pins';
import CityInfo from 'src/components/CityInfo';
import PropTypes from 'prop-types';

// import CITIES from 'src/data/cities.json';

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

const Map = ({ fetchPlaceInfos, placeDetails }) => {
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

  useEffect(() => {
    fetchPlaceInfos();
  }, []);

  return (
    <div className="infos__infos">
      <h2 className="agenda__title">Infos Pratiques</h2>
      <div className="infos__container">
        <div className="infos__pratical">
          <h4 className="infos__h4">Où loger ?</h4>
          <div className="infos__city">Sur Pont à Mousson :</div>
          <br />
          <strong className="infos__accomodation">
            L'Abbaye des Prémontrés
          </strong>{' '}
          dispose de 70 chambres à 90€. Cela vous permettra de profiter
          pleinement des festivités sans risquer de prendre la voiture !
          {/* <br />Les Hôtels à proximité
          de l'Abbaye :  */}
          <br />
          <strong className="infos__accomodation">
            Le Bagatelle Hôtel
          </strong>{' '}
          dispose de XX chambres à 60€
          <br />
          <strong className="infos__accomodation">Le Kyriad Hôtel </strong>
          dispose de XX chambres à 40€
          <br />
          <strong className="infos__accomodation">
            Le Logis des tuileries
          </strong>{' '}
          dispose de XX chambres à 70€ (à 20 min de route de l'Abbaye)
          <br />
          <strong className="infos__accomodation">AirBnb </strong>propose une
          dizaine d’offres à proximité de l'Abbaye.
          <br />
          <div className="infos__city-thionville">Sur Thionville :</div>
          <br />
          Les Hôtels dans le centre ville à proximité de la Mairie et de
          l’Eglise :
          <br />
          <strong className="infos__accomodation">Le Kyriad Hôtel </strong>
          dispose de XX chambres à 70€
          <br />
          <strong className="infos__accomodation">Le Mercure </strong>dispose de
          XX chambres à 70€
          <br />
          <strong className="infos__accomodation">
            Le Logis hôtel des Oliviers
          </strong>{' '}
          dispose de XX chambres à 60€
          <br />
          <strong className="infos__accomodation">Le B&B Care </strong>dispose
          de XX chambres à 60€
        </div>
        <div className="infos__map">
          <ReactMapGL
            {...viewport}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
            mapboxApiAccessToken="pk.eyJ1IjoiY2xvdGlsZGVmYXVjaGlsbGUiLCJhIjoiY2ttbHNpM3JtMWR5ODJwazU3dmd4ZGt4bCJ9.HORGlrqRn7pZUd9ZWYdy6g"
            width="40vw"
            height="60vh"
            mapStyle="mapbox://styles/mapbox/streets-v11"
          >
            <Pins data={placeDetails} onClick={setPopupInfo} />
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
        </div>
      </div>
    </div>
  );
};

Map.propTypes = {
  fetchPlaceInfos: PropTypes.func.isRequired,
  placeDetails: PropTypes.array.isRequired,
};

export default Map;
