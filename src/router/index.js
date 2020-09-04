import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../pages/Home';
import Course from '../pages/Courses';

const Router = (props) => {
  return (
    <Switch>
      <Route path={"/"} exact component={Home} />

      {/* Courses */}
      <Route path={"/courses"} exact component={Course} />
    </Switch>
  )
}

export default Router

