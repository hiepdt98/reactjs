/**
 * @author EAS
 * Saga index: connects action type and saga
 */

import { takeLatest } from 'redux-saga/effects'

/* ------------- Types ------------- */
import { ListLanguagesTypes } from '../redux/wrapper/list-languages-redux'
import { SetLanguageTypes } from '../redux/wrapper/set-language-redux'
import { AuthsTypes } from '../redux/wrapper/auths-redux'
import { TodoTypes } from '../redux/wrapper/todo-redux'
import { ProjectListTypes } from '../redux/wrapper/project-list-redux'
/* ------------- Sagas ------------- */
import ErrorSagas from './wrapper/error-sagas'
import LanguageSagas from './wrapper/language-sagas'
import AuthsSagas from './wrapper/auths-sagas'
import TodoSagas from './wrapper/todo-sagas'
import ProjectListSaga from './wrapper/project-list-saga'

/* ------------- Connect Types To Sagas ------------- */
export default function* root() {
  yield [
    //language
    takeLatest(SetLanguageTypes.SET_LANGUAGE_REQUEST, LanguageSagas.set),
    takeLatest(SetLanguageTypes.SET_LANGUAGE_FAILURE, ErrorSagas.handleError),
    takeLatest(ListLanguagesTypes.LIST_LANGUAGES_REQUEST, LanguageSagas.list),
    takeLatest(ListLanguagesTypes.LIST_LANGUAGES_FAILURE, ErrorSagas.handleError),

    //authentication)
    takeLatest(AuthsTypes.REGISTER_REQUEST, AuthsSagas.register),
    takeLatest(AuthsTypes.LOGIN_REQUEST, AuthsSagas.login),
    takeLatest(AuthsTypes.FORGOT_PASSWORD_REQUEST, AuthsSagas.forgotPassword),
    takeLatest(AuthsTypes.RESET_PASSWORD_REQUEST, AuthsSagas.resetPassword),
    takeLatest(AuthsTypes.AUTHS_FAILURE, ErrorSagas.handleError),
    takeLatest(AuthsTypes.LOGOUT_REQUEST, AuthsSagas.logout),
    //todo
    takeLatest(TodoTypes.TODO_LIST, TodoSagas.list),
    takeLatest(TodoTypes.TODO_FAILURE, ErrorSagas.handleError),
    //get listS
    takeLatest(ProjectListTypes.ADD_PROJECT_REQUEST, ProjectListSaga.addList),
    takeLatest(ProjectListTypes.GET_PROJECT_LIST, ProjectListSaga.getlist),
    takeLatest(ProjectListTypes.PROJECT_LIST_ERROR, ErrorSagas.handleError),
    takeLatest(ProjectListTypes.SEARCH_PROJECT_REQUEST, ProjectListSaga.searchList)
  ]
}
