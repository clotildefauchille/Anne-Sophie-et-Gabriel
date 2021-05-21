import React from 'react';
import cross from 'src/assets/svg/cross.svg';
import { useAuth0 } from '@auth0/auth0-react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

import './style.scss';

const ConfirmationModal = ({ displayed, closeModal }) => {
  const { user, logout } = useAuth0();
  return (
    <>
      {displayed && (
        <div className="modal">
          <div className="modal__container">
            <img
              onClick={closeModal}
              src={cross}
              alt=""
              className="icon modal__bt-close"
            />
            <div className="modal__text" onClick={closeModal}>
              Merci {user.name}, 
              <br/>nous avons reçu votre réponse!
            </div>
            <button className="modal__button" type="button" onClick={closeModal}>OK</button>
          </div>
        </div>
      )}
    </>
  );
};

ConfirmationModal.propTypes = {
  displayed: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};
export default ConfirmationModal;
