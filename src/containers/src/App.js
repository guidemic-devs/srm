import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./containers/Home";

import Refer from "./containers/Refer";
import Blog from "./containers/Blog";
import Contact from "./containers/Contact";
import About from "./containers/About";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";

function App() {
  return (
    <div className="App">
     <Router>
      <Switch>
        <Route path="/" exact component = {Home} />
        <Route path="/blog" component = {Blog} />
        <Route path="/refer" component = {Refer} />
        <Route path="/about" component = {About} />
        <Route path="/contact" component = {Contact} />
        <Route path="/signin"  component = {Signin} />
        <Route path="/signup" component = {Signup} />
      </Switch>
    </Router>
    </div>
  );
}

export default App;
