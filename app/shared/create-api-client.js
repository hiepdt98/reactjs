/**
 * @author Nam NH
 * Function to create and configure ApiClient
 */

import ApiClient from './api-client'
import config from '../config'
import { StorageKeyConstants } from '../constants'
import _ from 'lodash'

export default () => {
  let apiDefaultConfig = {
    baseURL: config.BASE_URL,
    timeout: config.API_TIMEOUT,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }

  let apiClient = new ApiClient(apiDefaultConfig, preRequest)
  return apiClient
}

const preRequest = (requestConfig) => {
  let extraHeaders = {}
  let tocken = localStorage.getItem(StorageKeyConstants.TOKEN)
  if (tocken) {
       extraHeaders['Authorization'] = 'JWT ' + tocken
  }
  requestConfig.headers = _.assign(requestConfig.headers, extraHeaders)
  return requestConfig
}
