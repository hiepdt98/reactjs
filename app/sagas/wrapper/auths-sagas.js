/**
 * @author Nam NH
 * AuthsSagas
 */

import {put, call} from 'redux-saga/effects'

import {authsService} from '../../services'
import AuthsActions from '../../redux/wrapper/auths-redux'

const AuthsSagas = {
    * register({data}) {
        try {
            let response = yield call(authsService.register, data)
            response.data.login = true
            yield put(AuthsActions.authsSuccess(response.data))
        } catch (err) {
            yield put(AuthsActions.authsFailure(err))
        }
    },

    * login({data}) {
        try {
            let response = yield call(authsService.login, data)
            response.data.login = true
            yield put(AuthsActions.authsSuccess(response.data))
        } catch (err) {
            yield put(AuthsActions.authsFailure(err))
        }
    },

    * logout({data}) {
        try {
          let response = yield call(authsService.logout, data)
          response.data.logout = true
          yield put(AuthsActions.authsSuccess(response.data))
        } catch (err) {
          yield put(AuthsActions.authsFailure(err))
        }
    },
    * forgotPassword({data}) {
        try {
            let response = yield call(authsService.forgotPassword, data)
            response.data.forgotPassword = true
            yield put(AuthsActions.authsSuccess(response.data))
        } catch (err) {
            yield put(AuthsActions.authsFailure(err))
        }
    },

    * resetPassword({data}) {
        try {
            let response = yield call(authsService.resetPassword, data)
            response.data.resetPassword = true
            yield put(AuthsActions.authsSuccess(response.data))
        } catch (err) {
            yield put(AuthsActions.authsFailure(err))
        }
    }
}

export default AuthsSagas
