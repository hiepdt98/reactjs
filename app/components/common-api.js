/**
 * @author Nam NH
 * Header component
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { show } from 'redux-modal'
import { bindActionCreators } from 'redux'
import { ModalName } from '../constants'

let f

class CommonApi extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentWillMount() {
    f = this
  }

  render() {
    return <div>{}</div>
  }
}

CommonApi.propTypes = {
  history: PropTypes.object,
  show: PropTypes.func
}

// eslint-disable-next-line no-unused-vars
const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ show }, dispatch)
})

export function showError(message) {
  f.props.show(ModalName.COMMON, { message: message })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CommonApi))
