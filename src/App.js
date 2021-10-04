import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Tp from './components/Tp';


function App() {
  return (
    <Router>

      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/tp" >
            <Tp />
          </Route>
          <Route path="/">

            <Home />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
