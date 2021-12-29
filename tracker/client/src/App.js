import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Register from "./components/registration/Register";
import Login from "./components/registration/Login";
import Nav from "./components/Nav";
import "./App.css";

const App = () => {
  return (
    <div>
      {/* <Router> */}
        <Nav />
{/* 
        <Switch>

          <Route exact path="/"></Route>

          <Route path="/Register">
            <Register />
          </Route>

          <Route path="/Login">
            <Login />
          </Route>

        </Switch> */}
      {/* </Router> */}
    </div>
  );
};

export default App;
