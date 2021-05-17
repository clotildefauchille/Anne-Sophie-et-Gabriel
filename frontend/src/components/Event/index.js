import React from 'react';
import separator from 'src/assets/svg/separator.svg';
import PropTypes from 'prop-types';
import icons from './icons';

const Event = ({ schedule, type, place, icon }) => (
  <div className="agenda__container-event">
    <div className="agenda__event-side-separator">
      <img className="agenda__event-icon" alt={icon} src={icons[icon]} />
      <img className="agenda__event-separator" src={separator} />
    </div>
    <div className="agenda__container-event-text">
      <h4 className="agenda__event-title">{schedule}</h4>
      <p className="agenda__event-paraph">
        {type} {place.name} <br />{' '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="agenda__address"
          href="https://goo.gl/maps/Ajmav14GCYdAVX5b7"
        >
          {place.street} <br /> {place.city} , France
        </a>
      </p>
    </div>
  </div>
);

Event.propTypes = {
  schedule: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  place: PropTypes.object.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Event;
