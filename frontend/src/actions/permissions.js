export const FETCH_USER_ID = 'FETCH_USER_ID';
export const SET_PERMISSIONS = 'SET_PERMISSIONS';
export const SAVE_USER_INFOS = 'SAVE_USER_INFOS';
export const GET_PERMISSIONS = 'GET_PERMISSIONS';
export const SET_THE_PERMISSIONS = 'SET_THE_PERMISSIONS';

export const fetchUserId = (token) => ({
  type: FETCH_USER_ID,
  token,
});

export const setPermissions = (userId) => ({
  type: SET_PERMISSIONS,
  userId,
});

export const saveUserInfos = (data) => ({
  type: SAVE_USER_INFOS,
  data,
});

export const getPermission = () => ({
  type: GET_PERMISSIONS,
});

export const setThePermissions = (permission) => ({
  type: SET_THE_PERMISSIONS,
  permission,
})