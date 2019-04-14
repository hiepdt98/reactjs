/**
 * @author NamNH
 * ListLanguagesRedux
 */

import { createReducer, createActions } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  listLanguagesRequest: null,
  listLanguagesSuccess: ['data', 'selectedLanguage'],
  listLanguagesFailure: ['error']
})

export const ListLanguagesTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  processing: false,
  data: null,
  selectedLanguage: null,
  error: null
}

/* ------------- Reducers ------------- */
export const request = (state) => {
  return { ...state, processing: true }
}

export const success = (state, { data, selectedLanguage }) => {
  return { ...state, processing: false, data, selectedLanguage, error: null }
}

export const failure = (state, { error }) => {
  return { ...state, processing: false, error }
}

/* ------------- Hookup Reducers To Types ------------- */
export const reducer = createReducer(INITIAL_STATE, {
  [Types.LIST_LANGUAGES_REQUEST]: request,
  [Types.LIST_LANGUAGES_SUCCESS]: success,
  [Types.LIST_LANGUAGES_FAILURE]: failure
})
