export const FETCH_PLACE_INFOS = 'FETCH_PLACE_INFOS';
export const SAVE_PLACE_INFOS = 'SAVE_PLACE_INFOS';

export const fetchPlaceInfos = () => ({
  type: FETCH_PLACE_INFOS,
});

export const savePlaceInfos = (data) => ({
  type: SAVE_PLACE_INFOS,
  data,
});
