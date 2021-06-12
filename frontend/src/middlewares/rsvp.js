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
  // console.log('email', email);
  switch (action.type) {
    case ON_SUBMIT_RSVP:
      const {token:submitToken} = action;
      // console.log('token in rsvp middleware', submitToken);
      const {
        presence,
        accompanied,
        firstnamePartner,
        childrenNumber,
        allergy,
      } = store.getState().rsvp;
      // console.log("userId, presence", userId, presence);
      let { userId, email } = store.getState().permissions;

      axios
        .post(
          `${process.env.API_URL}/api/userAnswer`,
          {
            userId,
            presence,
            accompanied,
            firstnamePartner,
            childrenNumber,
            allergy,
            email,
          },
          {
            headers: {
              Authorization: `Bearer ${submitToken}`,
            },
          },
        )
        .then((response) => {
          console.log('réponse bien envoyée!');
          store.dispatch(sendMessage('Votre réponse a été envoyée!'));
        });
      break;
    case FETCH_LAST_ANSWER:
      // console.log('fetchlastanswer middleware');
      let {token}=action
      // console.log('token in fetchlastanswer middlware', token)
      let { email: emailLastAnswer } = store.getState().permissions;
      axios
        .get(`${process.env.API_URL}/api/guestAnswer/${emailLastAnswer}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          // console.log('response.data middleware', response.data);
          store.dispatch(saveGuestAnswers(response.data));
        });
      break;
    case GET_USER_INFO:
      let {token: userInfoToken}=action;
      // console.log('token in getuserinfo middleware', userInfoToken);
      let { userId: id } = store.getState().permissions;

      console.log('userId', id);
      axios.get(`${process.env.API_URL}/api/v2/users/${id}`, {
        headers: {
          Authorization: `Bearer ${userInfoToken}`,
        },
      }).then((response) => {
        console.log('response.data getUserInfo', response.data);
        store.dispatch(saveUserInfos(response.data));
      });
      break;
    default:
      next(action);
  }
};

export default rsvp;
