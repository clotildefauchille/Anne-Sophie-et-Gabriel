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
  accompanied,
  presence,
}) => {
  const { user } = useAuth0();
  const firstNameVisibility = accompanied ? 'show-firstname' : '';
  const buttonIsDisabled = accompanied && !firstnamePartner;
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

  const handleOnCheckNotPresent = (e) => {
    console.log('handleOnCheckNotPresent: e.target.checked?', e.target.checked);
    onChangePresence(e.target.checked ? false : true);
  };

  const handleOnChangeName = (e) => {
    onChangeName(e.target.value, e.target.name);
  };
  const handleOnChangeAccompanied = (e) => {
    onChangeAccompanied(e.target.checked);
  };
  const handleOnChangeNotAccompanied = (e) => {
    onChangeAccompanied(e.target.checked ? false : true);
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
        <div className="rsvp__container-imgAndForm">
          <div className="rsvp__container-form">
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
                  id="oui"
                  name="oui"
                  checked={presence}
                  onChange={handleOnChangePresence}
                />
                <span className="checkmark" />
              </label>
              <label className="container" htmlFor="non">
                Non
                <input
                  className="checkbox"
                  type="checkbox"
                  id="non"
                  name="non"
                  checked={presence === false}
                  onChange={handleOnCheckNotPresent}
                />
                <span className="checkmark" />
              </label>
            </div>
            <div className="rsvp__container-presence">
              <p>Je confirme la présence de mon +1 :</p>
              <label className="container" htmlFor="oui">
                Oui
                <input
                  className="checkbox"
                  type="checkbox"
                  name="plusOne"
                  checked={accompanied}
                  onChange={handleOnChangeAccompanied}
                />
                <span className="checkmark"></span>
              </label>
              <label className="container" htmlFor="Non">
                Non
                <input
                  className="checkbox"
                  type="checkbox"
                  name="plusOne"
                  checked={accompanied === false}
                  onChange={handleOnChangeNotAccompanied}
                />
                <span className="checkmark" />
              </label>

              {/* <input className="rsvp__radio-button" 
              type="radio" id="plusOne" name="plusOne" value="non" />
        <label className="rsvp__label" for="non">Non</label> */}
            </div>
            <div className="rsvp__name-container">
              <input
                className={`rsvp__firstname ${firstNameVisibility}`}
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
                Je viens avec{' '}
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
                J'ai de régimes ou des allergies :
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
            <button type="submit" className="rsvp__submit-btn" disabled={buttonIsDisabled}>
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
  presence: PropTypes.bool.isRequired,
  accompanied : PropTypes.bool.isRequired,
};
export default Rsvp;
