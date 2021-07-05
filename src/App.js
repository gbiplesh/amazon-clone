import React, { useEffect } from 'react';
import './App.css';
import Header from './Header.js';
import Home from "./Home.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Test from './Test';
import Payment from './Payment.js';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe('pk_test_51J0psKBZj2VZc5nynF435xniLOfnI6cIQjL3Cg4GZjoFa0xHm5SVsOv9f39liOTBFFTYh0E8qHDX9MQdCeTLwuPn00YltSFfH4');

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when app component loads...
    auth.onAuthStateChanged((authUser) => {
      console.log('user is >>>', authUser);

      if(authUser) {
        // the user just logged in or was before..
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
          // the user is logged out
        dispatch({
          type: "SET_USER" ,
          user: null,
        });
      }
    });
  }, [] );

  return (
    // BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
