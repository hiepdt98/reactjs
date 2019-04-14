/**
 * @author Nam NH
 * This file contains all route declaration
 */

import React from 'react'
import { Route, Redirect, withRouter, Switch } from 'react-router-dom'
//header & navigation
import Header from './components/header'
//Test page
import Home from './containers/home'
import login from './containers/login'
import reset from './containers/reset'

import { StorageKeyConstants } from './constants'

class Routes extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const isAuthenticated = () => {
      let isLogin = false
      var code = localStorage.getItem(StorageKeyConstants.TOKEN)

      if (code && code != '') {
        isLogin = true
      }

      return isLogin
    }

    // eslint-disable-next-line no-unused-vars
    const requireLogin = Component => props => {
      return isAuthenticated() ? (
        <Component {...props} />
      ) : (
          <Redirect to="/login" />
        )
    }

    return (
      <div className="wrapper">
        <React.Fragment>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/home" component={Home} />
            <Route path="/login" component={login} />
            <Route path="/reset" component={reset} />
          </Switch>
        </React.Fragment>
      </div>
    )
  }
}

export default withRouter(Routes)
