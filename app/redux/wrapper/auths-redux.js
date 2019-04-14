/**
 * @author NamNH
 * Task Confirmation
 */

import { createReducer, createActions } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  registerRequest: ['data'],
  loginRequest: ['data'],
  forgotPasswordRequest: ['data'],
  resetPasswordRequest: ['data'],
  logoutRequest : ['data'],
  authsSuccess: ['data'],
  authsFailure: ['error']
})

export const AuthsTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  processing: false,
  data: {},
  error: null
}

/* ------------- Reducers ------------- */
export const request = state => {
  return { ...state, processing: true }
}

export const success = (state, { data }) => {
  return { ...state, processing: false, data, error: null }
}

export const failure = (state, { error }) => {
  return { ...state, processing: false, error }
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.REGISTER_REQUEST]: request,
  [Types.LOGIN_REQUEST]: request,
  [Types.FORGOT_PASSWORD_REQUEST]: request,
  [Types.RESET_PASSWORD_REQUEST]: request,
  [Types.AUTHS_SUCCESS]: success,
  [Types.AUTHS_FAILURE]: failure,
  [Types.LOGOUT_REQUEST] : request
})
