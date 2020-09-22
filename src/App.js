import React from 'react';
import './App.css';

import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import Sajek from './components/Sajek/Sajek';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <div className ="App">
      {/* <Home></Home> */}
      <MainPage></MainPage>

      {/* <Router>
        <Switch>
          <Route path="/home">
            <Home/>
          </Route>
          <Route path="/sajek">
            <MainPage/>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
       */}
    </div>
  );
}

export default App;
