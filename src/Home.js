import React from 'react'
import "./home.css";
import Product from './Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img 
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" 
        alt=""
        />

        <div className="home__row">
            <Product 
              id="1134565"
              title="Meditations"
              price= {29.99}
              image="https://images-na.ssl-images-amazon.com/images/I/41W7rdqEP9L._SX384_BO1,204,203,200_.jpg"
              rating={5} 
            />
          <Product 
            id="1234566"
            title="Meditations"
            price={39.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41W7rdqEP9L._SX384_BO1,204,203,200_.jpg"
            rating={5} 
          />
        </div>

        <div className="home__row">
          <Product 
            id="1334567"
            title="Meditations"
            price={49.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41W7rdqEP9L._SX384_BO1,204,203,200_.jpg"
            rating={5} 
          />
          <Product 
            id="1434568"
            title="Meditations"
            price={59.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41W7rdqEP9L._SX384_BO1,204,203,200_.jpg"
            rating={5} 
          />
          <Product 
            id="1534569"
            title="Meditations"
            price={69.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41W7rdqEP9L._SX384_BO1,204,203,200_.jpg"
            rating={5} 
          />
        </div>
        
        <div className="home__row">
          <Product 
            id="1634510"
            title="Meditations"
            price={79.99}
            image="https://i.pinimg.com/originals/cd/90/88/cd908869314450ba95aa517c6dd42e86.jpg"
            rating={5} 
          />
        </div>
        
      </div>
    </div>
  )
}

export default Home
