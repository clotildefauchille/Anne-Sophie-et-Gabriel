/* eslint-disable arrow-body-style */
import React, { useState, useEffect } from 'react';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import img from 'src/assets/svg/agenda.svg';
import separation from 'src/assets/svg/separation.svg';
import star from 'src/assets/svg/star.svg';
import stars from 'src/assets/svg/stars.svg';
import PropTypes from 'prop-types';
import Mairie from 'src/components/Mairie';
import Eglise from 'src/components/Eglise';
import Cocktail from 'src/components/Cocktail';
import Diner from 'src/components/Diner';
import Brunch from 'src/components/Brunch';
import './style.scss';

const Agenda = ({ permissions }) => {
  console.log('permissions', permissions[0]);

  return (
    <div className="page">
      <div className="agenda">
        <h2 className="agenda__title">Agenda</h2>
        <div className="agenda__container">
          <div className="agenda__container-multiple-event">
            <h3 className="agenda__day-title">Samedi 11</h3>
            {permissions[0] === 'guest:cocktail' && (
              <>
                <Mairie />
                <Eglise />
              </>
            )}
            {permissions[0] === 'guest:diner' && (
              <>
              <Mairie />
              <Eglise />
              </>
            )}
            {permissions[0] === 'guest:brunch' && (
              <>
                <Mairie />
                <Eglise />
                <Cocktail />
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

            {permissions[0] === 'guest:cocktail' && (
              <>
                <Cocktail />
              </>
            )}

            {permissions[0] === 'guest:diner' && (
              <>
                <Cocktail />
                <Diner />
              </>
            )}
            {permissions[0] === 'guest:brunch' && (
              <>
                <Diner />
              </>
            )}

            {permissions[0] === 'guest:brunch' && (
              <>
                <h3 className="agenda__day-title">Dimanche 12</h3>
                <Brunch />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Agenda.propTypes = {
  permissions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Agenda;
