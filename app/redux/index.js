/**
 * @author Nam NH
 * This file combines all reducers and create redux store
 */

import { combineReducers } from 'redux'
import { reducer as modal } from 'redux-modal'
import configureStore from './configureStore'
import rootSaga from '../sagas/'

export default () => {
  const rootReducer = combineReducers({
    modal,
    listLanguages: require('./wrapper/list-languages-redux').reducer,
    setLanguage: require('./wrapper/set-language-redux').reducer,
    auths: require('./wrapper/auths-redux').reducer,
    todo: require('./wrapper/todo-redux').reducer,
    projectList : require('./wrapper/project-list-redux').reducer
  })

  return configureStore(rootReducer, rootSaga)
}
