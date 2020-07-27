import React from "react";
import "./App.css";
import EventList from "./Components/EventList";
import Add from "./Components/AddEvent";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Add />
        <Switch>
          <Route exact path="/">
            <EventList />
          </Route>
          <Route path="/:id">
            <EventList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
