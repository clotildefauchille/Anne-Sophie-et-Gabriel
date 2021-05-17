export const FETCH_EVENTS_INFOS = 'FETCH_EVENTS_INFOS';
export const SAVE_EVENTS_INFOS = 'SAVE_EVENTS_INFOS';

export const fetchEventsInfos = () => ({
  type: FETCH_EVENTS_INFOS,
});

export const saveEventsInfos = (events) => ({
  type: SAVE_EVENTS_INFOS,
  events,
});
