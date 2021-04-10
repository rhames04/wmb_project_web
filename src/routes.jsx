import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home/index";
import Login from "./pages/Login/index";
import AdminPage from "./pages/AdminPage/index";
import EmployeePage from "./pages/EmployeePage/index";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login/:type" exact component={Login} />
      <Route path="/admin_page/:id" exact component={AdminPage} />
      <Route path="/employee_page/:id" exact component={EmployeePage} />
    </Switch>
  );
}
