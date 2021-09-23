import React from 'react';
import './style.scss';
// import giftPage from 'src/assets/svg/giftPage.svg';
import nid from 'src/assets/img/nid.jpeg';
import voyage from 'src/assets/img/voyage.jpeg';

const Gift = () => (
  <div className="gift__container">
    <h2 className="gift__title">Liste de cadeaux </h2>
    {/* <img
      className="gift__illustration"
      src={giftPage}
      alt="gift illustration"
    /> */}
    <div className="gift__gift-container">
      <p className="gift__gift-para">
        Participation à notre voyage de noce au Vietnam <br />
        <a target="_blank" className="gift__gift-link" href="https://paypal.me/pools/campaign/116492153161224962?v=1&utm_source=unp&utm_medium=email&utm_campaign=RT000447&utm_unptid=74004ec0-eeb9-11eb-ba8b-ac1f6bdb0675&ppid=RT000447&cnac=FR&rsta=fr_FR%28fr-FR%29&cust=7UDTETDY7RHF8&unptid=74004ec0-eeb9-11eb-ba8b-ac1f6bdb0675&calc=b997f9fb8c8e2&unp_tpcid=money-pool-goal-created&page=main%3Aemail%3ART000447&pgrp=main%3Aemail&e=cl&mchn=em&s=ci&mail=sys&appVersion=1.53.0&xt=104038">Aller sur la cagnotte</a>
      </p>
      <img className="gift__gift-photo" src={voyage} alt="" />
    </div>
    <div className="gift__gift-container">
      <p className="gift__gift-para">
        Participation à notre futur nid douillet <br />
        <a target="_blank" href="https://paypal.me/pools/campaign/116492174636061498?v=1&utm_source=unp&utm_medium=email&utm_campaign=RT000447&utm_unptid=332612c6-eeba-11eb-b1a7-3cfdfeedc889&ppid=RT000447&cnac=FR&rsta=fr_FR%28fr-FR%29&cust=7UDTETDY7RHF8&unptid=332612c6-eeba-11eb-b1a7-3cfdfeedc889&calc=43634fec2ff46&unp_tpcid=money-pool-goal-created&page=main%3Aemail%3ART000447&pgrp=main%3Aemail&e=cl&mchn=em&s=ci&mail=sys&appVersion=1.53.0&xt=104038" className="gift__gift-link">Aller sur la cagnotte</a>
      </p>
      <img src={nid} alt="" className="gift__gift-photo" />
    </div>
  </div>
);

export default Gift;
