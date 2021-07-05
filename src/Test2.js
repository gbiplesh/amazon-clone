
import React, { Component, useState } from 'react';
import shuffle from 'lodash.shuffle';
import {Flipper, Flipped} from 'react-flip-toolkit';


class Test extends Component {  

  //  const [cardState, setCardState] = useState(
  //    [
  //      "lorem ipsum 1",
  //      "lorem ipsum 2",
  //      "lorem ipsum 3",
  //    ]
  //  )

   //some data 
   
   state = {
     type: "list",
     sort: "asc",
     filteredIds: [],
     stagger: "forward",
     spring: "noWobble"
    };
    
  data = ([
   { id: 1, title: "Twas brillig and the slithy toves" },
   { id: 2, title: "Did gyre and gimbel in the wabe" },
   { id: 3, title: "All mimsy were the borogroves" },
   {
     id: 4,
     title: "The mome raths outgrabe"
   },
   {
     id: 5,
     title: "Beware the jabberwock my son!!"
   },
   { id: 6, title: "The jaws that bite, the claws that snatch" }
 ])

  function addToFilteredIds(id) {
    this.setState(prevState => {
      return {
        filteredIds: prevState.filteredIds.concat(id)
      };
    });
  };
  render() {
   return ( 

        <Flipper
          flipKey={`${this.state.type}-${this.state.sort}-${JSON.stringify(
            this.state.filteredIds
          )}-${JSON.stringify(this.state.stagger)}`}
          spring={this.state.spring}
          staggerConfig={{
            default: {
              reverse: this.state.stagger !== "forward",
              speed: 1
            }
          }}
          decisionData={this.state}
          >

          <div>
            <div>
                  <Flipped flipId='list'>
                  <div>
                    <Flipped inverseFlipId="list">
                      
                <ul className="list-contents">
                  {this.data
                    .filter(d => !this.state.filteredIds.includes(d.id))
                    .sort((a, b) => {
                      if (this.state.sort === "asc") {
                        return a.id - b.id;
                      } else {
                        return b.id - a.id;
                      }
                    })
                    .map(({ title, id }) => (

                        <div 
                        style={{border: "solid 1px black", width: "200px", backgroundColor: "lightgray", padding: "20px"}}
                        >
                            <p>{title}</p>
                            <button
                              onClick={() => addToFilteredIds(id)}
                              >close</button>
                        </div>
                    ))}
                </ul>
                    </Flipped>
                    </div>
                  </Flipped>
                  
            
            </div>
              <button
                onClick={""}
                >Shuffle
              </button>
          </div>
        </Flipper>
      )
    }
  }

export default Test
