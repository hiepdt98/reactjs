/**
 * @author NamNH
 * LoginService
 */

import apiClient from '../../shared'

export default class AuthsService {
    register(data) {
        return apiClient.post(`/api/user/signup`, data)
    }

    login(data) {
        return apiClient.post(`/api/user/login`, data)
    }

    logout(data) {
      return apiClient.post(`/api/user/logout`, data)
    }

    forgotPassword(data) {
        return apiClient.post(`/api/user/forgot/password`, data)
    }

    resetPassword(data) {
        return apiClient.post(`/api/user/reset/password`, data)
    }
}
