/**
 * @author Duong Nguyen
 * LanguageSagas
 */

import { put } from 'redux-saga/effects'
import _ from 'lodash'

import ListLanguagesActions from '../../redux/wrapper/list-languages-redux'
import SetLanguageActions from '../../redux/wrapper/set-language-redux'
import { languageService } from '../../services'

const LanguageSagas = {
  *list() {
    try {
      let data = languageService.getList()
      let selectedLanguage = languageService.getSelectedLanguage()

      if (!selectedLanguage) {
        let primaryLanguage = _.find(data, { 'isPrimary': 'true' })
        selectedLanguage = primaryLanguage.lang
      }

      yield put(ListLanguagesActions.listLanguagesSuccess(data, selectedLanguage))
    } catch(err) {
      yield put(ListLanguagesActions.listLanguagesFailure(err))
    }
  },

  *set(action) {
    let { selectedLanguage } = action
    try {
      languageService.setSelectedLanguage(selectedLanguage)
      yield put(SetLanguageActions.setLanguageSuccess({ lang: selectedLanguage }))
    } catch (err) {
      yield put(SetLanguageActions.setLanguageFailure(err))
    }
  }
}

export default LanguageSagas
