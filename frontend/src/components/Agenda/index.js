/* eslint-disable arrow-body-style */
import React, { useEffect } from 'react';
import img from 'src/assets/svg/agenda.svg';
import star from 'src/assets/svg/star.svg';
import stars from 'src/assets/svg/stars.svg';
import PropTypes from 'prop-types';
import Event from 'src/components/event';
import './style.scss';

const Agenda = ({ permission, events, fetchEventsInfos }) => {
  // console.log('permissions', permission);
  useEffect(() => {
    fetchEventsInfos();
  }, []);

  return (
    <div className="page">
      <div className="agenda">
        <h2 className="agenda__title">Agenda</h2>
        <div className="agenda__container">
          <div className="agenda__container-multiple-event">
            <h3 className="agenda__day-title">Samedi 11</h3>

            {permission === 'guest:cocktail' && events[0] && events[1] && (
              <>
                <Event {...events[0]} />
                <Event {...events[1]} />
              </>
            )}
            {permission === 'guest:diner' && events[0] && events[1] && (
              <>
                <Event {...events[0]} />
                <Event {...events[1]} />
              </>
            )}
            {permission === 'guest:brunch' && events[0] && events[1] && events[2] && (
              <>
                <Event {...events[0]} />
                <Event {...events[1]} />
                <Event {...events[2]} />
              </>
            )}
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

            {permission === 'guest:cocktail' && events[2] && (
              <>
                <Event {...events[2]} />
              </>
            )}

            {permission === 'guest:diner' && events[2] && events[3] && (
              <>
                <Event {...events[2]} />
                <Event {...events[3]} />
              </>
            )}
            {permission === 'guest:brunch' && events[3] && (
              <>
                <Event {...events[3]} />
              </>
            )}

            {permission === 'guest:brunch' && events[4] && (
              <>
                <h3 className="agenda__day-title">Dimanche 12</h3>
                <Event {...events[4]} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Agenda.propTypes = {
  permission: PropTypes.string.isRequired,
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  fetchEventsInfos: PropTypes.func.isRequired,
};

export default Agenda;
