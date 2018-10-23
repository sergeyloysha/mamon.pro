import React, { Fragment } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home, Services, Privacy } from './pages'
import { Cookies } from './components'

export default () => {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/services' component={Services} />
          <Route exact path='/privacy' component={Privacy} />
          <Route path='*' render={() => <span>404. Page Not Found</span>} />
        </Switch>
      </BrowserRouter>
      <Cookies />
    </Fragment>
  )
}
