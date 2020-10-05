import { categoryActionTypes } from './action'

const categoryInitialState = {
  doActivities: {}
}

export default function reducer (state = categoryInitialState, action) {
  switch (action.type) {
    case categoryActionTypes.SET_DO_ACTIVITIES:
      console.log('ACTION ::::: :>> ', action)
      return {
        ...state,
        doActivities: action.payload
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
