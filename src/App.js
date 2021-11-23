import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import { Navigation, Footer, Home, About, Projects, Resume } from "./components";
function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/projects" exact component={() => <Projects />} />
          <Route path="/resume" exact component={() => <Resume />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
