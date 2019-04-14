/**
 * @author NamNH
 * SetLanguageRedux
 */

import { createReducer, createActions } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  setLanguageRequest: ['selectedLanguage'],
  setLanguageSuccess: ['data'],
  setLanguageFailure: ['error']
})

export const SetLanguageTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  processing: false,
  data: null,
  error: null
}

/* ------------- Reducers ------------- */
export const request = (state) => {
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
  [Types.SET_LANGUAGE_REQUEST]: request,
  [Types.SET_LANGUAGE_SUCCESS]: success,
  [Types.SET_LANGUAGE_FAILURE]: failure
})
