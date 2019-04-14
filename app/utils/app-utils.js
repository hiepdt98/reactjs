import { StorageKeyConstants } from '../constants'

export default class AppUtils {
  static login(history, token, pathname = '/') {
    localStorage.setItem(StorageKeyConstants.TOKEN, token)
    history.push(pathname)
  }
  static logout() {
    localStorage.removeItem(StorageKeyConstants.STORE)
    window.location.href = '/login'
  }
}
