import React from 'react';
// import './style.scss';
import diner from 'src/assets/svg/diner.svg';

const Diner = () => (
  <div className="agenda__container-event">
    <img className="agenda__event-icon" alt="diner" src={diner} />
    <div className="agenda__container-event-text">
      <h4 className="agenda__event-title">Dîner à 20H00</h4>
      <p className="agenda__event-paraph">
        Soirée à l’abbaye des Prémontrés <br />{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="agenda__address"
          href="https://goo.gl/maps/qDfQhdk6DhFuMH2d9"
        >
          {' '}
                    9 rue Saint Martin <br /> 54700 Pont-à-Moussone, France{' '}
        </a>
      </p>
    </div>
  </div>
);

export default Diner;
