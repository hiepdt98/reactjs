/**
 * @author Nam NH
 * TodoSagas
 */

import { put, call } from 'redux-saga/effects'
import { projectListServices } from '../../services'
import ProjectListActions from '../../redux/wrapper/project-list-redux'
const ProjectListSagas = {
  * getlist({ data }) {
    try {
      let response = yield call(projectListServices.getList, data)
      response.data.getList = true
      yield put(ProjectListActions.projectListSuccess(response.data))
    } catch (err) {
      yield put(ProjectListActions.projectListError(err))
    }
  },
  * addList({ data }) {
    try {
      let response = yield call(projectListServices.addProject, data)
      response.data.addProject = true
      yield put(ProjectListActions.projectListSuccess(response.data))
    } catch (err) {
      yield put(ProjectListActions.projectListError(err))
    }
  },
  * searchList({ data }) {
    try {
      let response = yield call(projectListServices.searchProject, data)
      response.data.searchList = true
      yield put(ProjectListActions.projectListSuccess(response.data))
    } catch (err) {
      yield put(ProjectListActions.projectListError(err))
    }
  }
}

export default ProjectListSagas
