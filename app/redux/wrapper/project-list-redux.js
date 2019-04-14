/**
 * @author NamNH
 * Task Confirmation
 */

import { createReducer, createActions } from 'reduxsauce'

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  getProjectList: ['data'],
  addProjectRequest : ['data'],
  projectListSuccess : ['data'],
  projectListError : ['error'],
  searchProjectRequest : ['data']
})

export const ProjectListTypes = Types
export default Creators

/* ------------- Initial State ------------- */
export const INITIAL_STATE = {
  processing: false,
  data: [],
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
  [Types.GET_PROJECT_LIST]: request,
  [Types.ADD_PROJECT_REQUEST]: request,
  [Types.PROJECT_LIST_SUCCESS] : success,
  [Types.SEARCH_PROJECT_REQUEST] : request,
  [Types.PROJECT_LIST_ERROR] : failure
})
