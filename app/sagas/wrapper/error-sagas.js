/**
 * @author Nam NH
 * ErrorSagas: saga to handle general errors
 */

import { showError } from '../../components/common-api'
import I18nUtils from '../../utils/i18n-utils'

const ErrorSagas = {
  handleError(action) {
    const err = action.error

    if (!err.response) {
      //yield call(alert, err)
      return
    }
    let message
    try {
      let data = err.response.data
      message = data.messageParams ? 
        I18nUtils.formatMessage({ id: data.messageCode }, data.messageParams) : I18nUtils.t(data.messageCode)
    } catch (err) {
      message = I18nUtils.t('CM001')
    }

    showError(message)
  }
}

export default ErrorSagas
