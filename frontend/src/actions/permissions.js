export const FETCH_PERMISSIONS = 'FETCH_PERMISSIONS';
export const SET_PERMISSIONS = 'SET_PERMISSIONS';

export const fetchPermission = (token) => ({
  type: FETCH_PERMISSIONS,
  token,
});

export const setPermissions = (permissions, userId) => ({
  type: SET_PERMISSIONS,
  permissions,
  userId,
});
