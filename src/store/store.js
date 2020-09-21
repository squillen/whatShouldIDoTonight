import { combineReducers, createStore, applyMiddleware } from 'redux'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

// IMPORT REDUCERS
import activity from './activities/reducer'

const initialState = {
  state: { }
}

const combinedReducer = combineReducers({
  activity
})

const reducer = (state = initialState, action) => {
  const actionType = action.type
  if (actionType === HYDRATE) {
    return {
      ...state,
      server: {
        ...state.server,
        ...action.payload.server
      }
    }
  } else {
    return combinedReducer(state, action)
  }
}

const initStore = (preloadedState = initialState) => {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(logger, thunk))
  )
}
const wrapper = createWrapper(initStore, { debug: true })
export default wrapper
