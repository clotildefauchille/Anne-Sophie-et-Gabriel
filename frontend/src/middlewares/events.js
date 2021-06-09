import axios from 'axios';
import { FETCH_EVENTS_INFOS, saveEventsInfos } from 'src/actions/events';

const events = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_EVENTS_INFOS:
      // console.log('hello events middleware');
      axios
        .get(`${process.env.API_URL}/api/events`)
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
