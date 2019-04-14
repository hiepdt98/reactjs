/**
 * @author Nam NH
 * Bootstrap file of react app
 */

import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import 'bootstrap/dist/css/bootstrap.css';
import createStore from './redux'
import Root from './root'

var moment = require('moment')
import 'moment/locale/ja'
moment.locale('ja-JP')

const store = createStore()

render(<Root store={store} />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept('./root', () => {
    const newStore = createStore()
    const NewRoot = require('./root').default
    render(
      <AppContainer>
        <NewRoot store={newStore} />
      </AppContainer>,
      document.getElementById('root')
    )
  })
}
