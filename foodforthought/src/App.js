import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import foodform from "./foodform.js";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";


import './App.css';

function App() {
  return (
    <div>
      <div>
        <Navbar style={{ backgroundColor: 'white', color: 'black' }}>
          <Navbar.Brand >Food For Thought</Navbar.Brand>
          <Navbar.Toggle />
        </Navbar>
      </div>
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={foodform}></Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
