import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./container/Navbar";

import Topsongs from "./components/Topsongs";

const App = () => {
  return (
    <Router>
      <>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Topsongs} />
          </Switch>
        </div>
      </>
    </Router>
  );
};

export default App;
