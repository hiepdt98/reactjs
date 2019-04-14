/**
 * @author NamNH
 * Home page
 */
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { show, hide } from 'redux-modal'
import Actions from '../redux/wrapper/todo-redux'
import logout from '../utils/app-utils'
import {withRouter} from 'react-router-dom'
import GetProject from './getList'
import Search from './searchProject'
import Create from './createProject'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.toggle = this.toggle.bind(this);
  }
  handleLogout = (e) =>{
    e.preventDefault();
    logout();
  }
  componentDidMount() {

  }
  render() {
    return (
      <div className="home-page">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="container">
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
              <a class="navbar-brand" href="#">KanBoard</a>
              <Search />
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a href="" class="nav-link"><i class="fas fa-sign-out-alt" onClick={this.handleLogout}></i>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="container">
          <div class="row">
            <div class="col-4 left-bar">
              <div class="project-title">
                <i class="fas fa-tasks"></i>
                <h2>Project</h2>
                <Create />
              </div>
              <GetProject />
            </div>
          </div>
          <div class="col-sm-8 right-bar">
          </div>
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  history: PropTypes.object,
  show: PropTypes.func,
  hide: PropTypes.func,
  processing: PropTypes.bool,
  auths : PropTypes.object,
  logoutRequest : PropTypes.func,
}

// eslint-disable-next-line no-unused-vars
const mapStateToProps = state => {
  return {
    processing: state.todo.processing,
    auths : state.auths.data
  }
}
const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ show, hide }, dispatch),
  logoutRequest: data => (dispatch(Actions.logoutRequest(data))),

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Home))
