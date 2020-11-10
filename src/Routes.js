import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header, Footer } from "./components";

import { ProductSelection, About, Home, ConfirmationPage } from "./pages";

function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/order" component={ProductSelection} />
        <Route exact path="/about" component={About} />
        <Route exact path="/confirm" component={ConfirmationPage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routes;
