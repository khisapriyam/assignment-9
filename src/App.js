import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, NavLink
} from "react-router-dom";
import Sajek from './components/Sajek/Sajek';
import Sreemongol from './components/Sreemongol/Sreemongol';
import Sundorbon from './components/Sundorbon/Sundorbon';
import Login from './components/Login/Login';
import NoMatch from './components/NoMatch/NoMatch'
import SearchPlace from './components/SearchPlace/SearchPlace';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';


//creating context api
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <div>
      <UserContext.Provider id= "userNamePosition"value={[loggedInUser, setLoggedInUser]}>
        <p id="userName">User Name: {loggedInUser.email}</p>
        <Router>
          <Switch>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/sajek">
              <Sajek></Sajek>
            </Route>
            <Route path="/sreemongol">
              <Sreemongol></Sreemongol>
            </Route>
            <Route path="/sundorbon">
              <Sundorbon></Sundorbon>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/searchPlace">
              <SearchPlace></SearchPlace>
            </PrivateRoute>
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider> 
      
    </div>
  );
}

export default App;
