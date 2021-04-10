import React from 'react';
// import './style.scss';

const CityInfo = (props) => {
  const { info } = props;

  return (
    <div>
      <div>
        {info.name}
        <br />
        {info.street}
        <br />
        {info.city}
      </div>
      <img width={240} src={info.image} />
    </div>
  );
};

export default CityInfo;
