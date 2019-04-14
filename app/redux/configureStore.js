/**
 * @author Nam NH
 * Function to configure redux store
 */

import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

// creates the store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */
  const middleware = []
  const enhancers = []

  /* ------------- Saga Middleware ------------- */
  const sagaMiddleware = createSagaMiddleware()
  middleware.push(sagaMiddleware)

  /* ------------- Assemble Middleware ------------- */
  enhancers.push(applyMiddleware(...middleware))

  /* ------------- Attach redux dev tool for development environment ------------- */
  let composeEnhancers = null
  if (process.env.NODE_ENV === 'production') {
    composeEnhancers = compose
  } else {
    composeEnhancers = require('redux-devtools-extension').composeWithDevTools
  }

  /* ------------- Create store ------------- */
  const store = createStore(rootReducer, composeEnhancers(...enhancers))

  // kickoff root saga
  sagaMiddleware.run(rootSaga)

  return store
}
