export const categoryActionTypes = {
  RESET_ALL: 'RESET_ALL',
  SET_DO_ACTIVITIES: 'SET_DO_ACTIVITIES',
  SET_EAT_ACTIVITIES: 'SET_EAT_ACTIVITIES',
  SET_LEARN_ACTIVITIES: 'SET_LEARN_ACTIVITIES',
  SET_LISTEN_ACTIVITIES: 'SET_LISTEN_ACTIVITIES',
  SET_READ_ACTIVITIES: 'SET_READ_ACTIVITIES',
  SET_WATCH_ACTIVITIES: 'SET_WATCH_ACTIVITIES'
}

export const resetAll = () => (dispatch) => {
  return dispatch({ type: categoryActionTypes.RESET_ALL })
}

export const setDoActivities = (payload) => (dispatch) => {
  return dispatch({ type: categoryActionTypes.SET_DO_ACTIVITIES, payload })
}

export const setEatActivities = (payload) => (dispatch) => {
  return dispatch({ type: categoryActionTypes.SET_EAT_ACTIVITIES, payload })
}

export const setLearnActivities = (payload) => (dispatch) => {
  return dispatch({ type: categoryActionTypes.SET_LEARN_ACTIVITIES, payload })
}

export const setListenActivities = (payload) => (dispatch) => {
  return dispatch({ type: categoryActionTypes.SET_LISTEN_ACTIVITIES, payload })
}

export const setReadActivities = (payload) => (dispatch) => {
  return dispatch({ type: categoryActionTypes.SET_READ_ACTIVITIES, payload })
}

export const setWatchActivities = (payload) => (dispatch) => {
  return dispatch({ type: categoryActionTypes.SET_WATCH_ACTIVITIES, payload })
}
