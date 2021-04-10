import { SAVE_PLACE_INFOS} from 'src/actions/infos';

const initialState = {
  placeDetails: [],
};

const infos = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_PLACE_INFOS:
      return {
        ...state,
        placeDetails: action.data,
      };
    default:
      return state;
  }
};

export default infos;
