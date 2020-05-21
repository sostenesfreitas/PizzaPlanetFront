import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Card from "./Components/Card";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Card} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
