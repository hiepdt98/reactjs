/**
 * @author Nam NH
 * I18nUtils provide utility methods relating to localization
 */

import _ from 'lodash'

import config from '../config'
import { formatMessage } from './locale-component'
import { languageService } from '../services'
import i18nConfig from '../i18n'

export default class I18nUtils {
  static getDataText(data, field) {
    let postFix = this.getLocalePostFix()
    let fieldName = `${field}[${postFix}]`
    return data[fieldName]
  }

  static getLocalePostFix() {
    let locale = this.getCurrentLocale()
    let postFix = config.LOCALE_MAP[locale]
    return postFix
  }

  static getCurrentLocale() {
    let locale = i18nConfig.default

    let currentLanguage = languageService.getSelectedLanguage()
    if (currentLanguage && this.getLocaleOfLanguage(currentLanguage)) {
      locale = this.getLocaleOfLanguage(currentLanguage)
    }

    return locale
  }

  static getLocaleOfLanguage(language) {
    return _.invert(config.LOCALE_MAP)[language]
  }

  static formatMessage(...args) {
    return formatMessage(...args)
  }

  static t(messageId, values) {
    let params = { id: messageId }
    if (values) {
      return I18nUtils.formatMessage(params, values)
    } else {
      return I18nUtils.formatMessage(params)
    }
  }
}
