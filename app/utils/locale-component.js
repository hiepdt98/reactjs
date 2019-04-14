import React from 'react'
import { injectIntl } from 'react-intl'

// Does not actually render anything visible.
// We need it to provide access to internationalization for classes
// which are not a React component
class LocaleComponent extends React.Component {
  static instance = null;

  constructor(props) {
    super(props)

    if (!LocaleComponent.instance) {
      LocaleComponent.instance = this
    }
  }

  render() {
    return false
  }
}

export default injectIntl(LocaleComponent)

export function intl() {
  return LocaleComponent.instance.props.intl
}

export function formatMessage(...args) {
  return intl().formatMessage(...args)
}
