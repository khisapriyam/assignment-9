import React from 'react';
import {Navbar, Nav,NavDropdown, Form, FormControl, Button, CardDeck, Card} from 'react-bootstrap'
import logo from '../../Images/Logo.png'
import './ExistingUser.css'

const ExistingUser = () => {
    return (
        <div>
             <nav className="nav">
               <Navbar bg="" expand="lg">
                   <Nav href="#home">
                       <img src={logo}/>
                   </Nav>
                   <Navbar.Toggle aria-controls="basic-navbar-nav" />
                   <Navbar.Collapse id="basic-navbar-nav">
                       <Form inline>  
                       </Form>
                       <Nav className="mr-auto " >
                           <Nav id="heading1" href="/news">News</Nav>
                           <Nav id="heading2"  href="#destination">Destination</Nav>
                           <Nav id="heading3"  href="#blog">Blog</Nav>
                           <Nav id="heading4"  href="#contact">Contact</Nav>
                       </Nav>
                       <Button variant="warning" id="login-btn">LogIn</Button>
                   </Navbar.Collapse>
               </Navbar>
           </nav>
           <div className="form-container">
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <h4>Login</h4>
                    <Form.Label>Username or Email</Form.Label>
                    <Form.Control id="boxColor"type="email" placeholder="Enter username or email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control id="boxColor2" type="password" placeholder="Password" />
                </Form.Group>
                <div className="checkBox">
                    <div className="row">
                        <div className="col-md-6">
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Check me out" />
                            </Form.Group>
                        </div>
                        <div className= "col-md-6">
                            <a href="#">Forgot Password</a>
                        </div>
                    </div>
                </div>
            
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p id="createAccount">Don't have an account?<a href="#">Create an account</a></p>
                </Form>
           </div>
            <p id="or1"><span>Or</span></p>
            <div class="col">
                <a href="#" class="fb btn">
                <i class="fa fa-facebook fa-fw"></i> Login with Facebook
                </a>
                <a href="#" class="google btn">
                <i class="fa fa-google fa-fw"></i> Login with Google
                </a>
            </div>
        </div>
    );
};

export default ExistingUser;