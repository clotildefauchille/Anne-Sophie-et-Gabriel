import axios from 'axios';

import {
  ON_SUBMIT_RSVP,
  FETCH_LAST_ANSWER,
  saveGuestAnswers,
  sendMessage,
} from 'src/actions/rsvp';

const rsvp = (store) => (next) => (action) => {
  const { userId } = store.getState().permissions;

  switch (action.type) {
    case ON_SUBMIT_RSVP:
      // console.log('hello middleware')
      const {
        presence,
        accompanied,
        firstname,
        lastname,
        firstnamePartner,
        childrenNumber,
      } = store.getState().rsvp;
      // console.log("userId, presence", userId, presence);

      axios
        .post(
          'http://localhost:3000/api/userAnswer',
          {
            userId,
            presence,
            accompanied,
            firstname,
            lastname,
            firstnamePartner,
            childrenNumber,
          },
          // {
          //   headers: {
          //     Authorization: `Bearer ${token}`,
          //   },
          // },
        )
        .then((response) => {
          console.log('réponse bien envoyée!');
          store.dispatch(
            sendMessage(
              'Votre réponse a été envoyée!',
            ),
          );
        });
      break;
    case FETCH_LAST_ANSWER:
      // console.log('fetchlastanswer middleware');
      // const { userId } = store.getState().permissions;
      axios
        .get(`http://localhost:3000/api/guestAnswer/${userId}`)
        .then((response) => {
          console.log('response.data', response.data);
          store.dispatch(saveGuestAnswers(response.data));
        });
      break;

    default:
      next(action);
  }
};

export default rsvp;
