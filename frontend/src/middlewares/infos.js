import axios from 'axios';
import { FETCH_PLACE_INFOS, savePlaceInfos } from 'src/actions/infos';

const infos = (store) => (next) => (action) => {
 switch (action.type) {
    case FETCH_PLACE_INFOS:
      axios
        .get('http://localhost:3000/api/infos')
        .then((response) => {
          console.log(response.data);
          store.dispatch(savePlaceInfos(response.data));
        });
      break;
    default:
      next(action);
  }
};

export default infos;
