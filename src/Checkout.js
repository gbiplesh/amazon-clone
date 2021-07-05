import React from 'react'
import './checkout.css';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal.js";
import shortid from "shortid";
import { useTransition, animated } from "react-spring";

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();

  const getRandomKey = () => {
    return shortid.generate();
  };

  const transition = useTransition(basket, {
    from: { opacity: 0, marginLeft: -100, marginRight: 100 },
    enter: { opacity: 1, marginLeft: 0, marginRight: 0},
    leave: { opacity: 0, marginLeft: -100, marginRight: 100 },
    config: { tension: 220, friction: 120, duration: 500 },

  });
  


  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://d3kjp0zrek7zit.cloudfront.net/report-images/socialad-banner.png"
          alt=""
        />

        <div>
          <h3>Hello, {user?.email }</h3>
          <h2 className ="checkout__title">Your Shopping Basket</h2>

          {transition((props, item) => {
            const keyNew = getRandomKey();
            return (
              <animated.div style={props} >
              <CheckoutProduct 
                key={keyNew}
                id ={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating} 
              />

              </animated.div>
            );
          })}
        </div>
      </div>

      <div className="checkout_right">
        <Subtotal />
      </div>

    </div>
  )
}

export default Checkout
