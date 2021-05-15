import React, { useEffect, useState } from 'react';
import img from 'src/assets/img/rsvp.jpg';
import './style.scss';
import PropTypes from 'prop-types';
import { useAuth0 } from '@auth0/auth0-react';

const Rsvp = ({
  onChangeAccompanied,
  onChangePresence,
  onChangeName,
  firstnamePartner,
  childrenNumber,
  onSubmitRsvp,
  fetchLastAnswer,
  allergy,
  message,
  getUserInfos,
  presence,
}) => {
  const { user } = useAuth0();
  // console.log('user', user);
  useEffect(() => {
    fetchLastAnswer();
    // getUserInfos();
  }, []);
  // si j'ai pas toutes mes info rsvp => je retourne <div>loading</div>
  // if (allergy || )
  const handleOnChangePresence = (e) => {
    console.log('handleOnChange', e.target.checked);
    onChangePresence(e.target.checked); 
  };
  const handleOnChangeName = (e) => {
    // console.log('handleOnChangeName', e.target.value, e.target.name);
    onChangeName(e.target.value, e.target.name);
  };
  const handleOnChangeAccompanied = (e) => {
    onChangeAccompanied(e.target.value);
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    onSubmitRsvp();
  };
  return (
    <div className="rsvp">
      <form onSubmit={handleOnSubmit}>
        <h2 className="rsvp__title">RSVP</h2>
        <div className="rsvp__message">{message}</div>
        <div className="rsvp__container-big-big">
          <div className="rsvp__container-big">
            <div className="rsvp__container-presence">
              <p>
                {user.given_name} {user.family_name}, je confirme ma présence si
                les conditions sanitaires le permettent :
              </p>
              <label className="container" htmlFor="oui">
                Oui
                <input
                  className="checkbox"
                  type="checkbox"
                  id="presence"
                  name="presence"
                  checked={presence}
                  onChange={handleOnChangePresence}
                />
                <span className="checkmark" />
              </label>
              <label className="container" htmlFor="Non">
                Non
                <input
                  className="checkbox"
                  type="checkbox"
                  id="presence"
                  name="presence"
                  checked={presence === false}
                  onChange={handleOnChangePresence}
                />
                <span className="checkmark" />
              </label>
            </div>
            <div className="rsvp__container-presence">
              <p>Si oui, je viens avec mon +1: </p>

              <label className="container" htmlFor="oui">
                Oui
                <input
                  className="checkbox"
                  type="radio"
                  id="plusOne"
                  name="plusOne"
                  value="true"
                  defaultChecked
                  onChange={handleOnChangeAccompanied}
                  // defaultValue="true"
                />
                <span className="checkmark"></span>
              </label>
              <label className="container" htmlFor="Non">
                Non
                <input
                  className="checkbox"
                  type="radio"
                  id="plusOne"
                  name="plusOne"
                  value="false"
                  onChange={handleOnChangeAccompanied}
                  // defaultValue="true"
                />
                <span className="checkmark" />
              </label>

              {/* <input className="rsvp__radio-button" 
              type="radio" id="plusOne" name="plusOne" value="non" />
        <label className="rsvp__label" for="non">Non</label> */}
            </div>
            <div className="rsvp__name-container">
              <input
                className="rsvp__firstname"
                type="text"
                id="firstnamePartner"
                name="firstnamePartner"
                value={firstnamePartner}
                placeholder="Prénom"
                onChange={handleOnChangeName}
                // defaultValue="true"
              />
            </div>

            <div className="rsvp__container-children">
              <p>
                Et avec{' '}
                <input
                  className="rsvp__child"
                  type="number"
                  id="childrenNumber"
                  name="childrenNumber"
                  min="0"
                  max="10"
                  placeholder="0"
                  value={`${childrenNumber}`}
                  onChange={handleOnChangeName}
                />{' '}
                enfant(s)
              </p>
              <p>
                Regimes particuliers:
                <input
                  className="rsvp__child"
                  type="text"
                  name="allergy"
                  placeholder="allergies ou végétalisme"
                  value={allergy}
                  onChange={handleOnChangeName}
                />{' '}
              </p>
            </div>
            <button type="submit" className="rsvp__submit-btn">
              J'envoie ma réponse
            </button>
          </div>
          <img className="img" src={img} alt="A&G" />
        </div>
      </form>
    </div>
  );
};

Rsvp.propTypes = {
  onChangePresence: PropTypes.func.isRequired,
  onChangeName: PropTypes.func.isRequired,
  onChangeAccompanied: PropTypes.func.isRequired,
  firstnamePartner: PropTypes.string.isRequired,
  childrenNumber: PropTypes.number.isRequired,
  onSubmitRsvp: PropTypes.func.isRequired,
  fetchLastAnswer: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  allergy: PropTypes.string.isRequired,
  getUserInfos: PropTypes.func.isRequired,
  presence: PropTypes.bool.isRequired,
};
export default Rsvp;
