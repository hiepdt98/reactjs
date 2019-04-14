/**
 * @author NamNH
 * App component: It is the top component relating to UI
 */

import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import HotSwappingIntlProvider from './hot-swapping-intl-provider'
import LocaleComponent from './utils/locale-component'
import CommonModal from './components/common-modal'
import CommonApi from './components/common-api'
import Routes from './routes'
import 'font-awesome/css/font-awesome.css'
import './styles/bootstrap.scss'
import './styles/styles.scss'

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.basename = ''
    if (process.env.BASENAME) {
      this.basename = process.env.BASENAME
    }
    this.state = {}
  }

  render() {
    return (
      <HotSwappingIntlProvider>
        <Router basename={this.basename}>
          <div className="root-content">
            <LocaleComponent />
            <Routes />
            <CommonModal />
            <CommonApi />
          </div>
        </Router>
      </HotSwappingIntlProvider>
    )
  }
}
