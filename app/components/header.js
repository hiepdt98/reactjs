/**
 * @author Nam NH
 * Header component
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <header>
      </header>
    )
  }
}

Header.propTypes = {
  history: PropTypes.object
}

// eslint-disable-next-line no-unused-vars
const mapStateToProps = state => {
  return {}
}

// eslint-disable-next-line no-unused-vars
const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Header))
