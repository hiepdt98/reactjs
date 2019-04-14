/**
 * @author NamNH
 * LoginService
 */

import apiClient from '../../shared'

export default class TodoService {
  list(data) {
    return apiClient.get(`/todos?userId=${data.userId}`)
  }
}
