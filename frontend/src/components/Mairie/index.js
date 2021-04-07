import React from 'react';
import cityHall from 'src/assets/svg/cityHall.svg';

const Mairie = () => (
  <div className="agenda__container-event">
    <img className="agenda__event-icon" alt="cityHall" src={cityHall} />
    <div className="agenda__container-event-text">
      <h4 className="agenda__event-title">Voeux à la Mairie à 14h00</h4>
      <p className="agenda__event-paraph">
        Rendez-vous à mairie de Thionville <br />{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="agenda__address"
          href="https://goo.gl/maps/Ajmav14GCYdAVX5b7"
        >
          2 Cours du Château, <br /> 57100 Thionville, France
        </a>
      </p>
    </div>
  </div>
);

export default Mairie;
