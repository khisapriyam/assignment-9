import React, { useState } from 'react';
import {Navbar, Nav, Form, FormControl, Button} from 'react-bootstrap'
import logo from '../../Images/Logo.png'
import './ExistingUser.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Login/firebase.config';


const ExistingUser = () => {
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: ''
    })

    const handleBlur = (e) => {
        let isFieldValid = true;
        if(e.target.name === 'email'){
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name === 'password'){
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if(isFieldValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }

    }
    const handleSubmit = (e) => {
        console.log(user.email, user.password)
        if(user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage)
                // ...
              });

        }
        e.preventDefault();

    }
    
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
            <Form onSubmit ={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <h4>Login</h4>
                    <Form.Label>Username or Email</Form.Label>
                    <Form.Control id="boxColor" onBlur={handleBlur} type="email" placeholder="Enter username or email" required />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control id="boxColor2" onBlur={handleBlur} type="password" placeholder="Password" required />
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
            {/* <p>Email: {user.email}</p>
            <p>Password: {user.password}</p>
            <p>Name: {user.name}</p> */}

        </div>
    );
};

export default ExistingUser;