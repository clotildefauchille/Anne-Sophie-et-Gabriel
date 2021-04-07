import React from 'react';
import bell from 'src/assets/svg/bell.svg';

// import './style.scss';

const Eglise = () => (
  <div className="agenda__container-event">
    <img className="agenda__event-icon" alt="bell" src={bell} />
    <div className="agenda__container-event-text">
      <h4 className="agenda__event-title">Cérémonie religieuse à 15h00</h4>
      <p className="agenda__event-paraph">
        Rendez-vous à l'église Saint-Maximim <br />{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="agenda__address"
          href="https://goo.gl/maps/B8sCZf3yKLEFzj8r8"
        >
          3 Place de l’Eglise <br /> 57100 Thionville, France{' '}
        </a>
      </p>
    </div>
  </div>
);

export default Eglise;
