import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home';
import Course from '../pages/Courses';

const Router = (props) => {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/courses"} component={Course} />
    </Switch>
  )
}

export default Router

