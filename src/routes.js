import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Card from "./Components/Card";
import Cart from "./Components/Cart";

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Card} />
      <Route path="/cart" exact component={Cart} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
