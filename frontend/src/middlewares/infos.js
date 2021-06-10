import axios from 'axios';
import { FETCH_PLACE_INFOS, savePlaceInfos } from 'src/actions/infos';

const infos = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_PLACE_INFOS:
      const { token } = action;
      // console.log(token)
      axios
        .get(`${process.env.API_URL}/api/infos`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          console.log('response.data', response.data);
          store.dispatch(savePlaceInfos(response.data));
        });
      break;
    default:
      next(action);
  }
};

export default infos;
