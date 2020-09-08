import { activityActionTypes } from './action'

const activityInitialState = {
  allActivities: [],
  userActivities: [],
  currentActivity: {}
}

export default function reducer (state = activityInitialState, action) {
  switch (action.type) {
    case activityActionTypes.SET_ALL_ACTIVITIES:
      return {
        ...state,
        ...action.payload
      }
    case activityActionTypes.SET_USER_ACTIVITIES:
      return {
        ...state,
        originalUserActivities: action.payload,
        userActivities: action.payload
      }
    case activityActionTypes.GET_NEW_USER_ACTIVITY: {
      // copy userActivities
      const userActivities = state.userActivities || []
      const userActivitiesCopy = [...userActivities]

      // mutate userActivitiesCopy copy with one less activity
      const randomIndex = Math.floor(Math.random() * userActivitiesCopy.length - 1)
      const currentActivity = userActivitiesCopy.splice(randomIndex, 1)[0] || {}
      return {
        ...state,
        currentActivity,
        userActivities: userActivitiesCopy
      }
    }
    case activityActionTypes.RESET_ALL_ACTIVITIES:
      return {
        ...state,
        allActivities: activityInitialState.allActivities
      }
    case activityActionTypes.RESET_USER_ACTIVITIES:
      return {
        ...state,
        userActivities: activityInitialState.userActivities,
        currentActivity: activityInitialState.currentActivity
      }
    case activityActionTypes.RESTORE_USER_ACTIVITIES:
      return {
        ...state,
        userActivities: state.originalUserActivities || []
      }
    default:
      return state
  }
}
