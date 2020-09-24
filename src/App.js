import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link, NavLink
} from "react-router-dom";
import TouristPlaces from './components/TouristPlaces/TouristPlaces';
import Sajek from './components/Sajek/Sajek';
import Sreemongol from './components/Sreemongol/Sreemongol';
import Sundorbon from './components/Sundorbon/Sundorbon';
import ClickToExplore from './components/ClickToExplore/ClickToExplore';
import Login from './components/Login/Login';
import Heading from './components/Heading/Heading';
import NoMatch from './components/NoMatch/NoMatch'
import DashBoard from './components/Dashboard/DashBoard';
import ExistingUser from './components/ExistingUser/ExistingUser';



//creating context api
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <div>
      {/* <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>name: {loggedInUser.name}</p>
      <Home></Home>
      <Heading></Heading>

      </UserContext.Provider> */}
      <Router>
        {/* <NavLink exact activeClassName="active" to="/"> Home</NavLink>
        <NavLink exact activeClassName="active" to="/about"> About</NavLink>
        <NavLink activeClassName="active" to="/sreemongol"> Sreemongol</NavLink>
        <NavLink activeClassName="active" to="/sundorbon"> Sundorbon</NavLink>
        <NavLink activeClassName="active" to="/sajek"> Sajek</NavLink>
        <NavLink activeClassName="active" to="/dashboard"> Dashboard</NavLink>
        <NavLink activeClassName="active" to="/login"> Login</NavLink> */}
      
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
          <Route path="/dashboard">
            <DashBoard></DashBoard>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/heading">
            <Heading></Heading>
          </Route>
          <Route path="/existinguser">
            <ExistingUser></ExistingUser>
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
