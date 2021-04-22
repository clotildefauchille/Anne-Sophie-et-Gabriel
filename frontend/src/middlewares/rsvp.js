import axios from 'axios';

import { ON_SUBMIT_RSVP } from 'src/actions/rsvp';

const rsvp = (store) => (next) => (action) => {
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
      const { userId } = store.getState().permissions;
      // console.log("userId, presence", userId, presence);

      axios.post(
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
      );
      break;

    default:
      next(action);
  }
};

export default rsvp;
