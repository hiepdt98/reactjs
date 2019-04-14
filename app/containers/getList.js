/**
 * @author NamNH
 * Home page
 */

import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { bindActionCreators } from 'redux'
import { show, hide } from 'redux-modal'
import I18nUtils from '../utils/i18n-utils'
import TodoActions from '../redux/wrapper/todo-redux'

class GetProject extends React.Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.getProjectList
  }
  componentDidUpdate(prevProps) {
    if(prevProps.todo != this.props.todo) {
      this.setState({
        data: this.props.data
      })
    }
  }
  render() {
    return (
      <div className="project-list">
        {
          this.props.processing ?
            <span>{I18nUtils.t('loading...')}</span> :
            <ul>
              {this.state.data.getList && this.state.data.map(item => (
                <li key={item.id}>{item.name}</li>
              ))}
            </ul>
        }
      </div>
    )
  }
}

GetProject.propTypes = {
  history: PropTypes.object,
  show: PropTypes.func,
  hide: PropTypes.func,
  processing: PropTypes.bool,
  getProjectList : PropTypes.func
}

// eslint-disable-next-line no-unused-vars
const mapStateToProps = state => {
  return {
    processing: state.todo.processing,
    data: state.projectList.data
  }
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ show, hide }, dispatch),
  getProjectList: () => dispatch(TodoActions.getProjectList)
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(GetProject))
