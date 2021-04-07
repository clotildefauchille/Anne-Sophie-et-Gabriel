import React from 'react';
// import './style.scss';
import coktail from 'src/assets/svg/coktail.svg';

const Cocktail = () => (
  <div className="agenda__container-event">
    {/* <img src={separation} /> */}
    <img className="agenda__event-icon" alt="coktail" src={coktail} />
    <div className="agenda__container-event-text">
      <h4 className="agenda__event-title">Vin d'honneur à 17H00</h4>
      <p className="agenda__event-paraph">
        Rendez-vous à l’abbaye des Prémontrés <br />{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="agenda__address"
          href="https://goo.gl/maps/qDfQhdk6DhFuMH2d9"
        >
          9 rue Saint Martin <br /> 54700 Pont-à-Moussone, France{' '}
        </a>
      </p>
    </div>
  </div>
);

export default Cocktail;
