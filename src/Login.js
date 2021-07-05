import React, { useState } from 'react'
import "./login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from './firebase.js';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push('/')
      })
      .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault();
    //firebase register
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // successfully created a new user with email and password
        console.log(auth);
        if(auth) {
          history.push('/')
        }
      })
      .catch(error => alert(error.message))
  }

  return (
    <div className="login">
      <Link to="/">
        <img
        className="login__logo" 
        src="https://pngimg.com/uploads/amazon/amazon_PNG6.png"
        alt=""
        />
      </Link>
      
      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
          
          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

          <button 
            className="login__signInButton"
            type="submit"
            onClick={signIn}
          >Sign In
          </button>
        </form>

        <p>
          By signing-in you agree to the Amazon Clone Conditions of Use & Sale. Please see our Privacy Notice, 
          our Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button
          className="login__registerButton"
          onClick={register}
          >Create your Amazon Account
        </button>

      </div>
    </div>
  )
}

export default Login
