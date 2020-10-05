export const categoryActionTypes = {
  RESET_ALL: 'RESET_ALL',
  SET_DO_ACTIVITIES: 'SET_DO_ACTIVITIES'
}

export const resetAll = () => (dispatch) => {
  return dispatch({ type: categoryActionTypes.RESET_ALL })
}

export const setDoActivities = (payload) => (dispatch) => {
  return dispatch({ type: categoryActionTypes.SET_DO_ACTIVITIES, payload })
}
