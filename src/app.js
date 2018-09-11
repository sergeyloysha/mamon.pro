import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Home, Privacy } from './components'

export default () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/privacy' component={Privacy} />
      </Switch>
    </BrowserRouter>
  )
}
