import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./pages/Home";
import Post from "./pages/Post";

import "./App.css";

function App() {
  return (
    <main>
      <section>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/:subject/:id">
              <Post />
            </Route>
          </Switch>
        </Router>
      </section>
    </main>
  );
}

export default App;
