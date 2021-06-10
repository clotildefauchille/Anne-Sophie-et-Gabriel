import axios from 'axios';
import { FETCH_EVENTS_INFOS, saveEventsInfos } from 'src/actions/events';

const events = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_EVENTS_INFOS:
      const {token} = action
      // console.log('token', token);
      axios
        .get(`${process.env.API_URL}/api/events`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          // console.log(response.data);
          store.dispatch(saveEventsInfos(response.data));
        });
      break;
    default:
      next(action);
  }
 next(action);
};

export default events;
