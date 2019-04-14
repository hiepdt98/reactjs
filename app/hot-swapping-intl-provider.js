/**
 * @author Nam NH
 * HotSwappingIntlProvider wraps IntlProvider and support for hot swapping locale
 */

import React from 'react'
import PropTypes from 'prop-types'
import i18nConfig from './i18n'
import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'

import I18nUtils from './utils/i18n-utils'

class HotSwappingIntlProvider extends React.Component {
  constructor(props) {
    super(props)

    let locale = I18nUtils.getCurrentLocale()

    this.state = {
      locale,
      messages: i18nConfig[locale]
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.newSelectedData !== nextProps.newSelectedData) {
      let newLanguage = nextProps.newSelectedData.lang
      let locale = I18nUtils.getLocaleOfLanguage(newLanguage)

      this.setState({
        locale,
        messages: i18nConfig[locale]
      })
    }
  }

  render() {
    return (
      <IntlProvider {...this.state}>
        {this.props.children}
      </IntlProvider>
    )
  }
}

HotSwappingIntlProvider.propTypes = {
  newSelectedData: PropTypes.object,
  children: PropTypes.element
}

const mapStateToProps = (state) => {
  return {
    newSelectedData: state.setLanguage.data
  }
}

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HotSwappingIntlProvider)
