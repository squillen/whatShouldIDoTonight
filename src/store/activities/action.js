export const activityActionTypes = {
  SET_ALL_ACTIVITIES: 'SET_ALL_ACTIVITIES',
  SET_USER_ACTIVITIES: 'SET_USER_ACTIVITIES',
  GET_NEW_USER_ACTIVITY: 'GET_NEW_USER_ACTIVITY',
  RESET_USER_ACTIVITIES: 'RESET_USER_ACTIVITIES',
  RESTORE_USER_ACTIVITIES: 'RESTORE_USER_ACTIVITIES',
  RESET_ALL_ACTIVITIES: 'RESET_ALL_ACTIVITIES'
}

export const setAllActivities = () => (dispatch) => {
  return dispatch({ type: activityActionTypes.SET_ALL_ACTIVITIES })
}

export const setUserActivities = (payload) => (dispatch) => {
  return dispatch({ type: activityActionTypes.SET_USER_ACTIVITIES, payload })
}

export const getNewUserActivity = () => (dispatch) => {
  return dispatch({ type: activityActionTypes.GET_NEW_USER_ACTIVITY })
}

export const resetUserActivities = () => (dispatch) => {
  return dispatch({ type: activityActionTypes.RESET_USER_ACTIVITIES })
}

export const restoreUserActivities = () => (dispatch) => {
  return dispatch({ type: activityActionTypes.RESTORE_USER_ACTIVITIES })
}

export const resetAllActivities = () => (dispatch) => {
  return dispatch({ type: activityActionTypes.RESET_ALL_ACTIVITIES })
}
