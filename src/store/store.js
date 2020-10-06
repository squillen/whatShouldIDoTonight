import { combineReducers, createStore, applyMiddleware } from 'redux'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

// IMPORT REDUCERS
import activity from './activities/reducer'
import category from './categories/reducer'

const initialState = {
  state: { },
  activity: 'init',
  category: 'init'
}

const combinedReducer = combineReducers({
  activity,
  category
})

const reducer = (state = initialState, action) => {
  const actionType = action.type
  if (actionType === HYDRATE) {
    if (action.payload.activity === 'init') delete action.payload.activity
    if (action.payload.category === 'init') delete action.payload.category
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
