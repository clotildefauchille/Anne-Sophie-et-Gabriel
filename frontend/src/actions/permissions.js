export const FETCH_USER_ID = 'FETCH_USER_ID';
export const SET_USER_ID = 'SET_USER_ID';
export const SAVE_USER_INFOS = 'SAVE_USER_INFOS';
export const GET_PERMISSION = 'GET_PERMISSION';
export const SET_THE_PERMISSIONS = 'SET_THE_PERMISSIONS';
export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const FETCH_USER_EMAIL = 'FETCH_USER_EMAIL';

export const fetchUserId = (token) => ({
  type: FETCH_USER_ID,
  token,
});

export const setUserId = (userId) => ({
  type: SET_USER_ID,
  userId,
});

export const saveUserInfos = (data) => ({
  type: SAVE_USER_INFOS,
  data,
});

export const getPermission = () => ({
  type: GET_PERMISSION,
});

export const setThePermissions = (permission) => ({
  type: SET_THE_PERMISSIONS,
  permission,
});

export const setUserEmail = (userInfos) => ({
  type: SET_USER_EMAIL,
  userInfos,
});

export const fetchUserEmail = () => ({
  type: FETCH_USER_EMAIL,
});