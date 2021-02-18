import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import PersonDetails from "./components/Contact/PersonDetails";
import Home from "./components/Home/Home";
const App = () => {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/personDetails/:id" component={PersonDetails} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
