import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Home, About, Projects, Resume } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
            <Route path="/about" exact component={() => <About />} />
            <Route path="/projects" exact component={() => <Projects />} />
            <Route path="/resume" exact component={() => <Resume />} />
        </Switch>
        <Home />
        <About />
        <Projects />
        <Resume />
      </Router>
    </div>
  );
}

export default App;
