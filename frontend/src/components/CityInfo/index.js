import React from 'react';
import './style.scss';
import weddingIcon from 'src/assets/svg/wedding.svg';
import bed from 'src/assets/svg/bed.svg';
const CityInfo = (props) => {
  const { info } = props;

  return (
    <div className="place-infos">
      <div className="place-infos__text-icon">
        <a href={info.google_map_link} className="place-infos__icon" target="_blank" rel="noopener noreferrer">
          <div>
            {info.name}
            <br />
            {info.street}
            <br />
            {info.city}
            <br />
            {info.contact}
          </div>
        </a>
        {info.type === 'wedding' && (
          <img className="place-infos__icon" src={weddingIcon} alt="wedding Icon" />
        )}
        {info.type === 'accomodation' && (
          <img className="icon" src={bed} alt="bed Icon" />
        )}
      </div>
      <img width={240} src={info.image} className="place-infos__img" />
    </div>
  );
};

export default CityInfo;
