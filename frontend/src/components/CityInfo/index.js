import React from 'react';
import './style.scss';
import weddingIcon from 'src/assets/svg/wedding.svg';
import bed from 'src/assets/svg/bed.svg';
const CityInfo = (props) => {
  const { info } = props;

  return (
    <div>
      <a href={info.google_map_link} target="_blank" rel="noopener noreferrer">
        <div>
          {info.name}
          {info.type === 'wedding' && (
            <img className="icon" src={weddingIcon} alt="wedding Icon" />
          )}
          {info.type === 'accomodation' && (
            <img className="icon" src={bed} alt="bed Icon" />
          )}
          <br />
          {info.street}
          <br />
          {info.city}
          <br />
          {info.contact}
        </div>
      </a>

      <img width={240} src={info.image} />
    </div>
  );
};

export default CityInfo;
