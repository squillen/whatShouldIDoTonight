import { categoryActionTypes } from './action'

const categoryInitialState = {
  doActivities: {},
  eatActivities: {},
  listenActivities: {},
  learnActivities: {},
  readActivities: {},
  watchActivities: {}
}

export default function reducer (state = categoryInitialState, action) {
  switch (action.type) {
    case categoryActionTypes.SET_DO_ACTIVITIES:
      return {
        ...state,
        doActivities: action.payload
      }
    case categoryActionTypes.SET_EAT_ACTIVITIES:
      return {
        ...state,
        eatActivities: action.payload
      }
    case categoryActionTypes.SET_LISTEN_ACTIVITIES:
      return {
        ...state,
        listenActivities: action.payload
      }
    case categoryActionTypes.SET_LEARN_ACTIVITIES:
      return {
        ...state,
        learnActivities: action.payload
      }
    case categoryActionTypes.SET_READ_ACTIVITIES:
      return {
        ...state,
        readActivities: action.payload
      }
    case categoryActionTypes.SET_WATCH_ACTIVITIES:
      return {
        ...state,
        watchActivities: action.payload
      }
    case categoryActionTypes.RESET_ALL:
      return {
        ...state,
        ...categoryInitialState
      }
    default:
      return state
  }
}
