export const FETCH_PERMISSIONS = 'FETCH_PERMISSIONS';
export const SET_PERMISSIONS = 'SET_PERMISSIONS';
export const SAVE_USER_INFOS = 'SAVE_USER_INFOS';

export const fetchPermission = (token) => ({
  type: FETCH_PERMISSIONS,
  token,
});

export const setPermissions = (permissions, userId) => ({
  type: SET_PERMISSIONS,
  permissions,
  userId,
});

export const saveUserInfos = (data) => ({
  type: SAVE_USER_INFOS,
  data,
});
