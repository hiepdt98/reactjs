/**
 * @author Nam NH
 * TodoSagas
 */

import { put, call } from 'redux-saga/effects'

import { todoService } from '../../services'
import TodoActions from '../../redux/wrapper/todo-redux'

const TodoSagas = {
  * list({ data }) {
    try {
      let response = yield call(todoService.list, data)
      response.data.list = true
      yield put(TodoActions.todoSuccess(response.data))
    } catch (err) {
      yield put(TodoActions.todoFailure(err))
    }
  }
}

export default TodoSagas
