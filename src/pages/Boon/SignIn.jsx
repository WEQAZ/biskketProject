<<<<<<< Updated upstream
import React from 'react';
import './signin.css';
import logoboon from '../Boon/picture/logoboon.png';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../../config'; // Import your Firebase initialization
import { initializeApp } from 'firebase/app';

const SignIn = () => {
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate(); // Use useNavigate hook to get navigation function

  const handleGoogleSignIn = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      // After successful login, you can redirect the user to the main post page
      navigate('/MainPost'); // Use the navigate function to navigate
    } catch (error) {
      console.error('Google Sign-In Error:', error);
    }
  };

=======

import "./signin.css";
import logoboon from "../Boon/picture/logoboon.png";
import { Link } from "react-router-dom";
import { auth, provider } from "../../config";
import { signInWithPopup } from "firebase/auth";
import React, { useEffect, useState } from "react";

const SignIn = () => {
  const [user, setUser] = useState(null);
  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        setUser(user);
        localStorage.setItem("email", user.email);
        // You can also fetch and store the user's name here
        // user.displayName will contain the user's name if available
        if (user.displayName) {
          localStorage.setItem("displayName", user.displayName);
        }
      })
      .catch((error) => {
        console.error("Error signing in:", error);
      });
  }

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setUser({
        email: storedEmail,
        displayName: localStorage.getItem('displayName') || ""
      });
    }
  }, []);
  
>>>>>>> Stashed changes
  return (
    <div className="signinBackGround">
      <Link to="/">
        <div className="signinLogoBox">
          <div className="signinBiskketLogo">
            <img src={logoboon} width="93px" height="88px" />
            BISKKET
          </div>
        </div>
      </Link>
      <div className="signinBox">
        <img className="signinLogo" src={logoboon} width="180px" height="120px" />
        <div className="signinLogo"></div>
<<<<<<< Updated upstream
        <button className="signinGoogle" onClick={handleGoogleSignIn}>
          Sign in with Google
        </button>
=======
        <button className="signinGoogle"onClick={handleClick} >Signin with Google</button>
>>>>>>> Stashed changes

        <div className="signinText">
          Sign In To Enjoy<br></br> Biskket!
        </div>
      </div>
    </div>
  );
};

export default SignIn;
