import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

// Importing Views
import HomeApp from "../views/home";

// Importing from assets
import RESUME from "../assets/resume.pdf";

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route
          path="/resume"
          exact
          component={() => {
            window.location.replace(RESUME);
          }}
        />
        <Route path="/" component={HomeApp} />
      </Switch>
    </Router>
  );
}

export default App;
