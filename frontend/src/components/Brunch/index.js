import React from 'react';
// import './style.scss';
import brunch from 'src/assets/svg/brunch.svg';

const Brunch = () => (
  <div className="agenda__container-event">
    <img className="agenda__event-icon" alt="brunch" src={brunch} />
    <div className="agenda__container-event-text">
      <h4 className="agenda__event-title">Brunch à 11H00</h4>
      <p className="agenda__event-paraph">
        Brunch à l’abbaye des Prémontrés <br />{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="agenda__adress"
          href="https://goo.gl/maps/qDfQhdk6DhFuMH2d9"
        >
          9 rue Saint Martin <br /> 54700 Pont-à-Mousson, France{' '}
        </a>
      </p>
    </div>
  </div>
);

export default Brunch;
