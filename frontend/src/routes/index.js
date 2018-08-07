import React from "react";
import { Switch, Route } from "react-router-dom";
import Courses from "../pages/Courses";
import Users from "../pages/Users";

const Routes = () => (
  <Switch>
    <Route path="/courses" component={Courses} />
    <Route path="/users" component={Users} />
  </Switch>
);

export default Routes;
