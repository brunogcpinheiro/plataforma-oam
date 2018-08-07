import React from "react";
import { Switch, Route } from "react-router-dom";
import Courses from "../pages/Courses";
import Users from "../pages/Users";
import Login from "../pages/Login";

const Routes = () => (
  <Switch>
    <Route exact path="/" render={() => <Login />} />
    <Route path="/courses" component={Courses} />
    <Route path="/users" component={Users} />
  </Switch>
);

export default Routes;
