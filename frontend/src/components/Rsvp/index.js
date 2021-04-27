import React, { useEffect } from 'react';
import img from 'src/assets/img/rsvp.jpg';
import './style.scss';
import PropTypes from 'prop-types';

const Rsvp = ({
  onChangeAccompanied,
  onChangePresence,
  onChangeName,
  firstname,
  lastname,
  firstnamePartner,
  childrenNumber,
  onSubmitRsvp,
  fetchLastAnswer,
  allergy,
  message,
}) => {
  useEffect(() => {
    fetchLastAnswer();
  }, []);

  const handleOnChangePresence = (e) => {
    // console.log('handleOnChange', e.target.value);
    onChangePresence(e.target.value);
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
                Je confirme ma présence si les conditions sanitaires le
                permettent :
              </p>
              <label className="container" htmlFor="oui">
                Oui
                <input
                  className="checkbox"
                  type="radio"
                  id="presence"
                  name="presence"
                  value="true"
                  onChange={handleOnChangePresence}
                  // defaultValue="false"
                  defaultChecked
                />
                <span className="checkmark" />
              </label>
              <label className="container" htmlFor="Non">
                Non
                <input
                  className="checkbox"
                  type="radio"
                  id="presence"
                  name="presence"
                  value="false"
                  onChange={handleOnChangePresence}
                  // defaultValue="true"
                />
                <span className="checkmark" />
              </label>
              {/* <input
          className="rsvp__radio-button"
          type="radio"
          id="oui"
          name="presence"
          value="oui"
          checked
        />
        <label className="rsvp__label" for="oui">
          Oui
        </label>
        <input
          className="rsvp__radio-button"
          type="radio"
          id="non"
          name="presence"
          value="non"
        />
        <label className="rsvp__label" for="non">
          Non
        </label> */}
            </div>

            <div className="rsvp__name-container">
              <input
                className="rsvp__firstname"
                type="text"
                id="firstname"
                name="firstname"
                required
                value={firstname}
                placeholder="Prénom"
                onChange={handleOnChangeName}
                // defaultValue={firstname}
              />
              <input
                className="rsvp__lastname"
                type="text"
                id="lastname"
                name="lastname"
                value={lastname}
                required
                placeholder="Nom"
                onChange={handleOnChangeName}
                // defaultValue="true"
              />
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
                required
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
                  value={childrenNumber}
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
  firstname: PropTypes.string.isRequired,
  firstnamePartner: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  childrenNumber: PropTypes.string.isRequired,
  onSubmitRsvp: PropTypes.func.isRequired,
  fetchLastAnswer: PropTypes.func.isRequired,
  message: PropTypes.string.isRequired,
  allergy: PropTypes.string.isRequired,
};
export default Rsvp;
