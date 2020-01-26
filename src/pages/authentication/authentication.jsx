
import React from 'react'
import "./authentication.scss"

import Signin from "./signin/signin"

import { Switch, Route } from 'react-router-dom'

const Authentication = () => {
   return (
      <Switch>
         <Route exact to='/auth/signin' component={Signin} />
      </Switch>
   )
}

export default Authentication