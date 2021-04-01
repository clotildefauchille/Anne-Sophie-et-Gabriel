import React from 'react';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import img from 'src/assets/svg/agenda.svg';
import separation from 'src/assets/svg/separation.svg';
import coktail from 'src/assets/svg/coktail.svg';
import bell from 'src/assets/svg/bell.svg';
import brunch from 'src/assets/svg/brunch.svg';
import cityHall from 'src/assets/svg/cityHall.svg';
import diner from 'src/assets/svg/diner.svg';
import star from 'src/assets/svg/star.svg';
import stars from 'src/assets/svg/stars.svg';

import './style.scss';

const Agenda = () => (
  <div className="page">
    <div className="agenda">
      <h2 className="agenda__title">Agenda</h2>
      <div className="agenda__container">
        <div className="agenda__container-multiple-event">
          <h3 className="agenda__day-title">Samedi 11</h3>
          <div className="agenda__container-event">
            <img className="agenda__event-icon" alt="cityHall" src={cityHall} />
            <div className="agenda__container-event-text">
              <h4 className="agenda__event-title">Voeux à la Mairie à 14h00</h4>
              <p className="agenda__event-paraph">
                Rendez-vous à mairie de Thionville <br />{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="agenda__adress"
                  href="https://goo.gl/maps/Ajmav14GCYdAVX5b7"
                >
                  2 Cours du Château, <br /> 57100 Thionville, France
                </a>
              </p>
            </div>
          </div>

          <div className="agenda__container-event">
            <img className="agenda__event-icon" alt="bell" src={bell} />
            <div className="agenda__container-event-text">
              <h4 className="agenda__event-title">
                Cérémonie religieuse à 15h00
              </h4>
              <p className="agenda__event-paraph">
                Rendez-vous à l'église Saint-Maximim <br />{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="agenda__adress"
                  href="https://goo.gl/maps/B8sCZf3yKLEFzj8r8"
                >
                  3 Place de l’Eglise <br /> 57100 Thionville, France{' '}
                </a>
              </p>
            </div>
          </div>

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
                  className="agenda__adress"
                  href="https://goo.gl/maps/qDfQhdk6DhFuMH2d9"
                >
                  9 rue Saint Martin <br /> 54700 Pont-à-Moussone, France{' '}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="agenda__container-img">
          <img src={star} alt="star" className="agenda__star" />
          <img src={star} alt="star" className="agenda__star4" />
          <img src={star} alt="star" className="agenda__star3" />
          <img src={star} alt="star" className="agenda__star2" />
          <img src={stars} alt="stars" className="agenda__stars" />
          <img
            className="agenda__img"
            src={img}
            alt="anne_sophie & gab picture"
          />
        </div>

        <div className="agenda__container-multiple-event">
          <h3 className="agenda__day-title">Samedi Soir</h3>
          <div className="agenda__container-event">
            <img className="agenda__event-icon" alt="diner" src={diner} />
            <div className="agenda__container-event-text">
              <h4 className="agenda__event-title">Dîner à 20H00</h4>
              <p className="agenda__event-paraph">
                Soirée à l’abbaye des Prémontrés <br />{' '}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="agenda__adress"
                  href="https://goo.gl/maps/qDfQhdk6DhFuMH2d9"
                >
                  {' '}
                  9 rue Saint Martin <br /> 54700 Pont-à-Moussone, France{' '}
                </a>
              </p>
            </div>
          </div>

          <h3 className="agenda__day-title">Dimanche 12</h3>

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
        </div>
      </div>
    </div>
  </div>
);

export default Agenda;
