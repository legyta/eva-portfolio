import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Index from "./components/Index";
import Work from "./components/Work";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Contact from "./components/Contact";
class App extends Component {
  render() {
    const App = () => (
      <div className="App">
        <Switch>
          <Route path exact="./home" component={Index} />
          <Route path="/work" component={Work} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    );
    return (
      <Switch>
        <App />
      </Switch>
    );
  }
}

export default App;
