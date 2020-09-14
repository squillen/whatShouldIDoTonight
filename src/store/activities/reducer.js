import { activityActionTypes } from './action'

const activityInitialState = {
  userActivities: [],
  originalUserActivities: [],
  currentActivity: {},
  showActivities: []
}

export default function reducer (state = activityInitialState, action) {
  switch (action.type) {
    case activityActionTypes.SET_ALL_ACTIVITIES:
      return {
        ...state,
        activities: action.payload
      }
    case activityActionTypes.SET_USER_ACTIVITIES:
      return {
        ...state,
        originalUserActivities: action.payload,
        showActivities: [],
        userActivities: action.payload
      }
    case activityActionTypes.GET_NEW_USER_ACTIVITY: {
      // copy userActivities
      const userActivities = state.userActivities || []
      const userActivitiesCopy = [...userActivities]

      // copy shownActivities
      const shownActivities = state.shownActivities || []
      const shownActivitiesCopy = [...shownActivities]

      // mutate userActivitiesCopy copy with one less activity
      const randomIndex = Math.floor(Math.random() * userActivitiesCopy.length)
      const currentActivity = userActivitiesCopy.splice(randomIndex, 1)[0] || {}
      return {
        ...state,
        currentActivity,
        showActivities: [...shownActivitiesCopy, currentActivity],
        userActivities: userActivitiesCopy
      }
    }
    case activityActionTypes.RESET_ALL:
      return {
        ...state,
        ...activityInitialState
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
