import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'
import ContactPage from './components/ContactPage'
import ParamPage from './components/ParamPage'
import NotFoundPage from './components/NotFoundPage'

const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomePage} />
    <Route path='/home' component={HomePage} />
    <Route path='/about' component={AboutPage} />
    <Route exact path='/contact' component={ContactPage} />
    <Route path='/contact/params/:id/:name' component={ParamPage} />
    <Redirect from='/about-us' to='/about' />
    <Route component={NotFoundPage} />
  </Switch>
)

export default Routes
