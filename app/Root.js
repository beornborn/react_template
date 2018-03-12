//@flow
import React from 'react'
import { render } from 'react-dom'
import { browserHistory, Router, Route, Redirect } from 'react-router'
import { Provider } from 'react-redux'

import Layout from 'components/layout/Layout'
import Example from 'containers/pages/Example'
import store from 'Store'
import 'assets/styles/global.css'

render(
  <Provider store={store}>
    <div style={{height: '100%'}}>
      <Router history={browserHistory}>
        <Redirect from='/' to='/example' />
        <Route path='/' component={Layout}>
          <Route path='example' component={Example} />
        </Route>
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
)
