import axios from 'axios';

import {
  ON_SUBMIT_RSVP,
  FETCH_LAST_ANSWER,
  saveGuestAnswers,
  sendMessage,
  GET_USER_INFO,
} from 'src/actions/rsvp';
import { saveUserInfos } from 'src/actions/permissions';

const rsvp = (store) => (next) => (action) => {
  const { userId, email } = store.getState().permissions;
console.log('email', email);
  switch (action.type) {
    case ON_SUBMIT_RSVP:
      // console.log('hello middleware')
      const {
        presence,
        accompanied,
        firstnamePartner,
        childrenNumber,
        allergy,
      } = store.getState().rsvp;
      // console.log("userId, presence", userId, presence);

      axios
        .post(
          'http://localhost:3000/api/userAnswer',
          {
            userId,
            presence,
            accompanied,
            firstnamePartner,
            childrenNumber,
            allergy,
            email,
          },
          // {
          //   headers: {
          //     Authorization: `Bearer ${token}`,
          //   },
          // },
        )
        .then((response) => {
          console.log('réponse bien envoyée!');
          store.dispatch(sendMessage('Votre réponse a été envoyée!'));
        });
      break;
    case FETCH_LAST_ANSWER:
      // console.log('fetchlastanswer middleware');
      // const { userId } = store.getState().permissions;
      axios
        .get(`http://localhost:3000/api/guestAnswer/${userId}`)
        .then((response) => {
          // console.log('response.data', response.data);
          store.dispatch(saveGuestAnswers(response.data));
        });
      break;
    case GET_USER_INFO:
      console.log('getuserinfo middleware');
      axios
        .get(`http://localhost:3000/api/v2/users/${userId}`)
        .then((response) => {
          console.log('response.data getUserInfo', response.data);
          store.dispatch(saveUserInfos(response.data));
        });
      break;
    default:
      next(action);
  }
};

export default rsvp;
