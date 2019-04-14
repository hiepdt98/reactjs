/**
 * @author Nam NH
 * Root component contains all top configuration that not relating to UI
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'

import App from './app'

export default class Root extends React.Component {
  render () {
    return (
      <Provider store={this.props.store}>
        <App />
      </Provider>
    )
  }
}

Root.propTypes = {
  store: PropTypes.object
}
