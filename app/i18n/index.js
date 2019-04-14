/**
 * @author Nam NH
 * I18n configuration
 */

import { addLocaleData } from 'react-intl'
import _ from 'lodash'

import config from '../config'

_.each(config.LOCALES, (locale) => {
  let localeData = require(`react-intl/locale-data/${locale}`)
  addLocaleData(localeData)
})

/* Define your translations */
const i18nConfig = {}
_.each(config.LOCALES, (locale) => {
  i18nConfig[locale] = require(`./languages/${locale}.json`)
})
i18nConfig.default = config.DEFAULT_LOCALE

export default i18nConfig
