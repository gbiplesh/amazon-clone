import React, { useState, useEffect } from 'react'
import {useSpring, useSprings, useTransition, animated } from "react-spring";
import './test.css';


const slides = [
  {
    id: 0,
    text: 'text1',
    color: 'hotpink'
  },
  {
    id: 1,
    text: 'text2',
    color: 'turquoise'
  },
  {
    id: 2,
    text: 'text3',
    color: 'lightblue'
  },
]

function Test() {
  const [rows, setRows] = useState(slides);
  const [hover, setHover] = useState(false);
  
  const handleClick = () => {
    console.log("items");
  }

  const deleteCard = (id) => {
    setRows(rows.filter((_,i) => i !== id));
    console.log("props", id, rows );
  }
  
  const transition = useTransition(rows, {
    from: { opacity: 0, marginLeft: -100, marginRight: 100 },
    enter: { opacity: 1, marginLeft: 0, marginRight: 0},
    leave: { opacity: 0, marginLeft: -100, marginRight: 100 },
    config: { tension: 220, friction: 120, duration: 500 },
  });

  const [ {y, color}, set ] = useSpring(() => ({ y: 100, color: '#fff'}));
  const hoverEffect = useSpring({
    transform: hover ? 'scale(1.2)' : 'scale(1)',
  });


  return (
    <>
          <animated.div 
              style={{ transform: hoverEffect.transform,}}
              onMouseOver={() => setHover(true)}
              onMouseOut={() => setHover(false)}
          >
              <div style={{backgroundColor: 'gray' }} className="text__items">
                item.text <br/>
                <button>delete</button>
              </div>
          </animated.div>
    
          {transition((props, item) => {
            return (
              <animated.div style={props} >
                
                <div style={{backgroundColor: item.color }} className="text__items">
                  {item.text} <br/>
                  <button onClick={()=> deleteCard(item.id)}>delete</button>
                </div>
              </animated.div>
            );
          })}
    </>
  )
}

export default Test
