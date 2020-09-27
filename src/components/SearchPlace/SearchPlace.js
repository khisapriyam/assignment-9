import React, { useContext } from 'react';
import {Navbar, Nav,NavDropdown, Form, FormControl, Button, CardDeck, Card} from 'react-bootstrap'
import { UserContext } from '../../App';
import logo from '../../Images/Logo.png'
import BookingPlace from '../BookingPlace/BookingPlace';
import './SearchPlace.css'

const SearchPlace = () => {
    //working on sign out button
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="searchPlace">
             <nav className="nav">
               <Navbar bg="" expand="lg">
                   <Nav href="#home">
                       <img src={logo}/>
                   </Nav>
                   {/* <FormControl id ="searchBtn" type="text" placeholder="Search Destination" className="mr-sm-2" /> */}
                   <Navbar.Toggle aria-controls="basic-navbar-nav" />
                   <Navbar.Collapse id="basic-navbar-nav">
                       <Form inline>  
                       </Form>
                       <Nav className="mr-auto " >
                           <Nav id="heading5" href="/news">News</Nav>
                           <Nav id="heading6"  href="#destination">Destination</Nav>
                           <Nav id="heading7"  href="#blog">Blog</Nav>
                           <Nav id="heading8"  href="#contact">Contact</Nav>
                       </Nav>
                       <Button variant="warning" id="logout-btn" onClick={() =>setLoggedInUser({})}> 
                            Sign out
                      </Button>
                   </Navbar.Collapse>
               </Navbar>
           </nav>
           <hr/>
           <BookingPlace></BookingPlace>
        </div>
    );
};

export default SearchPlace;