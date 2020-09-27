import React, { useState, useContext} from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import './Login.css'
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import {UserContext} from '../../../src/App'
import {Navbar, Nav, Form} from 'react-bootstrap'
import logo from '../../Images/Logo.png'
import googleLogo from '../../Images/Icon/google.png'
import fbLogo from '../../Images/Icon/fb.png'


const Login = () => {
     //solving firebase default already exists
     if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignedIn: false,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        rewritePassword: ''
    })
    
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    let history = useHistory();
    let location = useLocation();
  
    let { from } = location.state || { from: { pathname: "/searchPlace" } };
   
    const [isAuth, setIsAuth] = useState(true)
    if(!isAuth){
        return <Redirect to="/searchPlace"></Redirect>
    }
    
    const googleProvider = new firebase.auth.GoogleAuthProvider();//for google login
    const fbProvider = new firebase.auth.FacebookAuthProvider();//fro FB login

    //creating function for google sign in
    const handleGoogleSignIn =() =>{
        firebase.auth().signInWithPopup(googleProvider)
        .then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName, email}
                setLoggedInUser(signedInUser);
        
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }
    //creating function for fb sign in
    const handleFbSignIn =() =>{
        firebase.auth().signInWithPopup(fbProvider)
        .then(function(result) {
            const {displayName, email} = result.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName, email}
            setLoggedInUser(signedInUser);
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log('fb user after sign in',user);
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }
    //creating function for email and password login method
    const handleBlur =(e) =>{
        let isFieldValid = true;
        if(e.target.name === 'email'){
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name === 'password'){
            const isPasswordValid = e.target.value;
            //const isPasswordValid = e.target.value.length > 6;
            // const passwordHasNumber = /\d{1}/.test(e.target.value);
            // isFieldValid = isPasswordValid && passwordHasNumber;
            isFieldValid = isPasswordValid;
        }
        
        if(isFieldValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    //sign out functions
    const handleSignOut = () =>{
        firebase.auth().signOut()
        .then(res => {
            const signOutUser ={
                isSignedIn: false,
                firstName: '',
                lastName: '',
                email: '',
                password: '',
                rewritePassword: '',
                error: '',
                success: false//showing successful msg after log in
            }
            // Sign-out successful.
          }).catch(function(error) {
            // An error happened.
          });
    }
    
    //handle submit
    const handleSubmission =(e) =>{
        if(newUser && user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res =>{
                //making the error message disappear after successful id creation
                const newUserInfo = {...user};
                newUserInfo.error = '';
                //showing success message
                newUserInfo.success = true;
                setUser(newUserInfo);
                alert(`User created successfully. Please log in to continue`);
                
            })
            .catch(error => {
                // Handle Errors here.
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
                // ...
              });

        }
        if(!newUser && user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
                //making the error message disappear after successful id creation
                const newUserInfo = {...user};
                newUserInfo.error = '';
                //showing success message
                newUserInfo.success = true;
                setUser(newUserInfo);
                setLoggedInUser(newUserInfo);//added this
                history.replace(from);
                console.log('sign in user info', res.user);
            })
            .catch(function(error) {
                // Handle Errors here.
                const newUserInfo = {...user};
                newUserInfo.error = error.message;
                newUserInfo.success = false;
                setUser(newUserInfo);
              });
        }
        e.preventDefault();
    }
    // //updating user info 
    const updateUserInfo = name => {
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name,
        }).then(function() {
            console.log('user name updated successfully');
            // Update successful.
        }).catch(function(error) {
            // An error happened.
            console.log(error);
        });
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
                   </Navbar.Collapse>
               </Navbar>
           </nav>
           <div className="form-container">
            <Form onSubmit ={handleSubmission}>
                <Form.Group controlId="formBasicEmail">
                    {newUser && <h4>Create an account</h4>}

                    {newUser && <label for="firstName">First Name</label>}
                        {newUser && <input type="text" onBlur={handleBlur} name="firstName" id="" placeholder="FirstName" required/>}
                    {newUser && <label for="lastName">Last Name</label>}
                        {newUser && <input type="text" onBlur={handleBlur} name="lastName" id="" placeholder="lastName" required/>}
                    <label for="email">Username or Email</label>
                        <input type="text" onBlur={handleBlur} name="email" id=""required placeholder="Email"/>
                    <label for="psw">Password</label>
                        <input type="password" onBlur={handleBlur} name="password" id=""required  placeholder ="Password"/>
                    {/* <label>Password</label>
                        <input
                            name="password"
                            type="password"
                            ref={register({
                            required: "You must specify a password",
                            minLength: {
                                value: 8,
                                message: "Password must have at least 8 characters"
                            }
                            })}
                        />
                        {errors.password && <p>{errors.password.message}</p>}
                        {newUser && <label>Repeat password</label>}
                            {newUser && <input
                                name="password_repeat"
                                type="password"
                                ref={register({
                                validate: value =>
                                    value === password.current || "The passwords do not match"
                                })}
                            />}
                            {errors.password_repeat && <p>{errors.password_repeat.message}</p>}
                            <input type="submit" onClick={handleSubmit(onSubmit)} /> */}

                        {/* {newUser && <label for="psw-repeat">Confirm Password</label>}
                            {newUser && <input type="password" onBlur={handleBlur} name="rewritePassword" id=""required  placeholder ="Rewrite Password"/> } */}
                </Form.Group>
            
                <div className="checkBox">
                    <div className="row">
                        <div className="col-md-6">
                            <Form.Group id="rememberMe"  controlId="formBasicCheckbox">
                                <Form.Check  type="checkbox"  label='Remember me'  />
                            </Form.Group>
                        </div>
                        <div className= "col-md-6">
                            <a id= "forgotPassword" href="#">Forgot Password</a>
                        </div>
                    </div>
                </div>
                
                <input  class="registerbtn" type="submit" value ={newUser ? 'Sign up' : 'Sign in'} ></input>
                <p id="createAccount" name="newUser">Don't have an account?</p>
                <input type="checkbox" onChange = {() => setNewUser(!newUser)}name="newUser"></input>
                <label htmlFor="newUser"id ="create-account">Create new account</label>
            </Form>

           </div>
            <p id="or1"><span>Or</span></p>
            <div class="col">
                <button onClick ={handleFbSignIn} class="googleButton" >
                    <img src={fbLogo} alt=""/>
                     Login with Facebook</button>
                    { 
                        loggedInUser.isSignedIn && <Redirect to="/searchPlace"></Redirect>  
                    }
                <button onClick={handleGoogleSignIn} class="fbButton">
                    <img src={googleLogo} alt=""/>
                    Login with Google</button>
                    { 
                        loggedInUser.isSignedIn && <Redirect to="/searchPlace"></Redirect>  
                    }
            </div>
                <div className="alert">
                    <p style ={{color: 'red'}}>{user.error}</p>
                    {user.success && <p style ={{color: 'green'}}>User { newUser ? 'created' : 'Logged in'} Succesfully</p>}
                </div>
           
        </div>
    );
};

export default Login;