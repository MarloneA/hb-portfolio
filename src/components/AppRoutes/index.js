import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Home";
import Contact from "../Contact";


const AppRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/contact" exact>
        <Contact />
      </Route>
    </Switch>
  );
};
export default AppRoutes;
