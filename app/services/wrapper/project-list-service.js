

import apiClient from '../../shared'

export default class ProjectListService {
  getList() {
    return apiClient.get(`/api/project`)
  }
  addProject(data){
    return apiClient.post('/api/project/store', data)
  }
  searchProject(data){
    return apiClient.get(`/api/project/search?data=${data}`)
  }
}
