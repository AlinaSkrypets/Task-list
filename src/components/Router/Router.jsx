import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

import CounterPage from "../../pages/CounterPage";
import TodosPage from "../../pages/TodosPage";
import Test from "../../pages/Test";

export default function AppRouter() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/counter">
            <CounterPage />
          </Route>
          <Route path="/todos">
            <TodosPage />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/">
            <Redirect to="/counter" />;
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
