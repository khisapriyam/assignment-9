import React, { useState } from 'react';
import TouristPlaces from '../TouristPlaces/TouristPlaces';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Sajek from '../Sajek/Sajek';
import Sreemongol from '../Sreemongol/Sreemongol';
import Sundorbon from '../Sundorbon/Sundorbon';
import './ClickToExplore.css'
import Heading from '../Heading/Heading';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../Login/firebase.config'



const ClickToExplore = () => {
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    const [user, setUser] = useState({
        isSignedIn: false,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        rewritePassword: ''
    })
    const handleBlur =(e) =>{
        //console.log(e.target.name,e.target.value)
        let isFieldValid = true;
        if(e.target.name === 'email'){
            isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
            // console.log(isFieldValid);
        }
        if(e.target.name === 'password'){
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            // console.log(isPasswordValid && passwordHasNumber)
            isFieldValid = isPasswordValid && passwordHasNumber;
        }
        // if (!input["password"]) {
        //     isFieldValid = false;
        //     errors["password"] = "Please enter your password.";
        //   }
        //   if (!["rewritePassword"]) {
        //     isFieldValid = false;
        //     errors["rewritePassword"] = "Please enter your confirm password.";
        //   }
        // if(e.target.name === 'rewritePassword'){
            

        // }
        // if(e.target.name === 'firstName'){
            
        // }
        // if(e.target.name === 'lastName'){
            

        // }
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
    const handleSubmit =(e) =>{
        console.log(user.email, user.password, user.rewritePassword, user.firstName, user.lastName)
        if(user.email && user.password){
            console.log('submitting')
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res =>{
                //making the error message disappear after successful id creation
                const newUserInfo = {...user};
                newUserInfo.error = '';
                //showing success message
                newUserInfo.success = true;
                setUser(newUserInfo);
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
        e.preventDefault();


    }
    
    
    return (
        <div >
            <form onSubmit ={handleSubmit}>
            
                <input type="text" onBlur={handleBlur} name="email" id=""required placeholder="email"/> <br/>
                <input type="password" onBlur={handleBlur} name="password" id=""required  placeholder ="password"/>
                <input type="password" onBlur={handleBlur} name="rewritePassword" id=""required  placeholder ="Rewrite Password"/>
                <input type="text" onBlur={handleBlur} name="firstName" id="" placeholder="firstName" required/>
                <input type="text" onBlur={handleBlur} name="lastName" id="" placeholder="lastName" required/>
                <input type="submit" value="Submit"/>
            </form>
            <p style ={{color: 'red'}}>{user.error}</p>
            {
              user.success &&  <p style ={{color: 'green'}}>User created sucessfully</p>  
            }
        </div>
        
    );
};

export default ClickToExplore;