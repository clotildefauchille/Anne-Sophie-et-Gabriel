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
import { MobileView, BrowserView } from 'react-device-detect';
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

  const placeInPontAMousson = placeDetails.filter(
    (place) => place.is_in_pont_a_mousson === true,
  );
  const placeInThionville = placeDetails.filter(
    (place) => place.is_in_pont_a_mousson === false && place.is_an_hostel === true,
  );

  return placeInPontAMousson.length === 0 || placeInThionville.length === 0 ? (
    <span>loading</span>
  ) : (
    <div className="infos__infos">
      <h2 className="infos__title">Infos Pratiques</h2>
      <div className="infos__container">
        <div className="infos__pratical">
          <h4 className="infos__h4">Où loger ?</h4>
          <div className="infos__city">Sur Pont à Mousson :</div>
          <br />
          {placeInPontAMousson.map((info) => (
            <div key={info.id}>
              <strong className="infos__accomodation">{info.name}</strong>{' '}
              dispose de {info.room_number} chambres à {info.price}€.{' '}
              {info.comment}
              <br />
            </div>
          ))}
          <strong className="infos__accomodation">AirBnb </strong>propose une
          dizaine d’offres à proximité de l'Abbaye.
          <br />
          <div className="infos__city-thionville">Sur Thionville :</div>
          <br />
          Les Hôtels dans le centre ville à proximité de la Mairie et de
          l’Eglise :
          <br />
          {placeInThionville.map((info) => (
            <div key={info.id}>
              <strong className="infos__accomodation">{info.name}</strong>{' '}
              dispose de {info.room_number} chambres à {info.price}€.{' '}
              {info.comment}
              <br />
            </div>
          ))}
        </div>
        <div className="infos__map">
          <BrowserView>
            <ReactMapGL
              {...viewport}
              onViewportChange={(nextViewport) => setViewport(nextViewport)}
              mapboxApiAccessToken="pk.eyJ1IjoiY2xvdGlsZGVmYXVjaGlsbGUiLCJhIjoiY2ttbHNpM3JtMWR5ODJwazU3dmd4ZGt4bCJ9.HORGlrqRn7pZUd9ZWYdy6g"
              width="50vw"
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
          </BrowserView>
          <MobileView>
            <ReactMapGL
              {...viewport}
              onViewportChange={(nextViewport) => setViewport(nextViewport)}
              mapboxApiAccessToken="pk.eyJ1IjoiY2xvdGlsZGVmYXVjaGlsbGUiLCJhIjoiY2ttbHNpM3JtMWR5ODJwazU3dmd4ZGt4bCJ9.HORGlrqRn7pZUd9ZWYdy6g"
              width="82vw"
              height="50vh"
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
          </MobileView>
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
