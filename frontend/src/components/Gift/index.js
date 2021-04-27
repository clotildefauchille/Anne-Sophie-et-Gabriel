import React from 'react';
import './style.scss';
import giftPage from 'src/assets/svg/giftPage.svg';

const Gift = () => (
  <div>
    <h2 className="gift__title">Liste de cadeaux</h2>
    <img className="gift__icon" src={giftPage} alt="gift illustration" />
  </div>
);

export default Gift;
