import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// These are all components.
// Router -> Routes to different page
// Route -> Every single routes
// Switch -> The first route that matchs

// pages
import Home from "./Home";
import About from "./About";
import People from "./People";
import Error from "./Error";
import Person from "./Person";
// navbar
import Navbar from "./Navbar";
const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/people">
          <People />
        </Route>
        {/* URL Params and place holders */}
        <Route exact path="/person/:id" children={<Person />}></Route>
        <Route exact path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;
