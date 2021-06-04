
import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./containers/Home";

import Blog from "./containers/Blog";
import Contact from "./containers/Contact";
import About from "./containers/About";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import PrivateRoute from "./components/HOC/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import {isUserLoggedIn} from "./actions";
import BlogPage from './containers/BlogPage/blogPage';
import Profile from './containers/Profile';

function App() {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
  }, []);

  return (
    <div className="App">
     <Router>
      <Switch>
        <Route exact path="/" exact component = {Home} />
        <Route exact path="/blog" component = {Blog} />
        <Route path="/blog/blogpage" component = {BlogPage} />
        <Route path="/profile" component = {Profile} />
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
