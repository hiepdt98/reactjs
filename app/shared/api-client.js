/**
 * @author Nam NH
 * ApiClient to interact with api server
 */

import axios from 'axios'

export default class ApiClient {
  constructor(defaultConfig, preRequest) {
    this.defaultConfig = defaultConfig
    this.preRequest = preRequest
  }

  request(config) { 
    if (this.preRequest !== undefined) {
      config = this.preRequest(config)
    }
    console.log(config.data)
    return axios.request(config)
  }

  get(url, config) {
    config = config || this.defaultConfig
    config.url = url
    config.method = 'get'
    return this.request(config)
  }

  post(url, data, config) {
    config = config || this.defaultConfig
    config.url = url
    config.method = 'post'
    config.data = data
    return this.request(config)
  }

  put(url, data, config) {
    config = config || this.defaultConfig
    config.url = url
    config.method = 'put'
    config.data = data

    return this.request(config)
  }

  delete(url, data, config) {
    config = config || this.defaultConfig
    config.url = url
    config.method = 'delete'
    config.data = data

    return this.request(config)
  }
}
