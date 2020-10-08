import { combineReducers, createStore, applyMiddleware } from 'redux'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'

// IMPORT REDUCERS
import activity from './activities/reducer'
import categories from './categories/reducer'

const initialState = {
  state: { },
  activity: 'init',
  categories: 'init',
}

const combinedReducer = combineReducers({
  activity,
  categories,
})

const reducer = (state = initialState, action) => {
  const actionType = action.type
  if (actionType === HYDRATE) {
    if (action.payload.activity === 'init') delete action.payload.activity
    if (action.payload.categories === 'init') delete action.payload.categories
    return {
      ...state,
      server: {
        ...state.server,
        ...action.payload.server,
      },
    }
  } else {
    return combinedReducer(state, action)
  }
}

const initStore = (preloadedState = initialState) => {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(thunk)),
  )
}
const wrapper = createWrapper(initStore, { debug: true })
export default wrapper
