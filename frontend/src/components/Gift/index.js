import React from 'react';
import './style.scss';
import giftPage from 'src/assets/svg/giftPage.svg';

const Gift = () => (
  <div className="gift__container">
    <h2 className="gift__title">Liste de cadeaux à venir</h2>
    <img className="gift__illustration" src={giftPage} alt="gift illustration" />
  </div>
);

export default Gift;
