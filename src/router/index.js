import React from 'react'
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import Course from '../pages/Courses/';
import CourseDetail from '../pages/Courses/CourseDetail/';
import Blog from '../pages/Blog';
import NotFound from '../pages/NotFound';
import Login from '../pages/Login';
import Register from '../pages/Register';

const Router = (props) => {
  return (
    <Switch>
      <Route path={"/"} exact component={Home} />
      <Route path={"/login"} component={Login} />
      <Route path={"/register"} component={Register} />

      {/* Courses */}
      <Route path={"/course"} exact component={Course} />
      <Route path={"/course/:id"} exact component={CourseDetail} />

      {/* Blog */}
      <Route path={"/blog"} exact component={Blog} />

      {/* NoutFound */}
      <Route component={NotFound} />
    </Switch>
  )
}

export default Router

