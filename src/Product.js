import React, { useState } from 'react'
import './product.css';
import { useStateValue } from './StateProvider';
import { useSpring, animated } from "react-spring";


function Product({ id, title, image, price, rating}) {
  const [{ basket}, dispatch] = useStateValue();
  const [hover, setHover] = useState(false);
const [clicked, setClicked] = useState(false);

  const hoverEffect = useSpring({
    transform: hover ? 'scale(1.05)' : 'scale(1)',
  });

  const clickEffect = useSpring({
    transform: clicked ? 'scale(1)' : 'scale(1.05)',
  });

  const clickedEffect = () => {
    console.log("clicked");
    setClicked(true);
  }

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };
  return (
    <>
        <animated.div 
            style={{ transform: hoverEffect.transform,}}
            onMouseOver={() => setHover(true)}
            onMouseOut={() => setHover(false)}
        >
          <animated.div
            style={{ transform: hoverEffect.transform,}}
          >
            <div className="product">
                <div className="product__info">
                  <p>{title}</p>
                  <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                  </p>
                  <div className="product__rating">
                    {Array(rating).fill().map((_, i) => ( <p>⭐</p> ))}
                  </div>
                </div>

                <img src={image} alt="" />
                
                <button onClick={addToBasket}>Add to Basket</button>
            </div>
          </animated.div>
        </animated.div>
  </>
  )
}

export default Product
