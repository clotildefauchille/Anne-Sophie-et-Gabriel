import React from 'react';
import './style.scss';

const Rsvp = () => (
  <div className="rsvp">
    <h2 className="rsvp__title">RSVP</h2>
    <div className="rsvp__container">
      <div className="rsvp__container-presence">
        <p>
          Je confirme ma présence si les conditions sanitaires le permettent :
        </p>
        <label className="container" for="oui">
          Oui
          <input
            className="checkbox"
            type="radio"
            id="presence"
            name="presence"
            value="oui"
            checked
          />
          <span className="checkmark"></span>
        </label>
        <label className="container" for="Non">
          Non
          <input
            className="checkbox"
            type="radio"
            id="presence"
            name="presence"
            value="non"
            
          />
          <span className="checkmark"></span>
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
          placeholder="prénom"
        />
        <input
          className="rsvp__lastname"
          type="text"
          id="lastname"
          name="lastname"
          required
          placeholder="nom"
        />
      </div>

      <div className="rsvp__container-presence">
        <p>Si oui, je viens avec mon +1: </p>

        <label className="container" for="oui">
          Oui
          <input
            className="checkbox"
            type="radio"
            id="plusOne"
            name="plusOne"
            value="oui"
            checked
          />
          <span className="checkmark"></span>
        </label>
        <label className="container" for="Non">
          Non
          <input
            className="checkbox"
            type="radio"
            id="plusOne"
            name="plusOne"
            value="non"
            // checked
          />
          <span className="checkmark"></span>
        </label>

        {/* <input className="rsvp__radio-button" type="radio" id="plusOne" name="plusOne" value="non" />
        <label className="rsvp__label" for="non">Non</label> */}
      </div>
      <div className="rsvp__name-container">
        <input
          className="rsvp__firstname-plus-one"
          type="text"
          id="firstname"
          name="firstname"
          required
          placeholder="prénom"
        />
      </div>

      <div className="rsvp__container-children">
        <p>
          Et avec{' '}
          <input
            type="number"
            id="tentacles"
            name="tentacles"
            min="0"
            max="10"
          />{' '}
          enfant(s)
        </p>
      </div>
    </div>
  </div>
);

export default Rsvp;
