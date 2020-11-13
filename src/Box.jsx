import React from "react";

/**
 * Box dumb function, renders box and remove button
 * 
 * props: height
 *        width
 *        color
 *        id
 *        remove
 * 
 */

function Box(props) {

  function handleRemove() {    
    props.remove(props.id);  
  }

  return (
    <div>
      <div
        style={{ 
          height:`${props.height}px`,
          width:`${props.width}px`,
          backgroundColor: props.color}}>
      </div>
      <button onClick={handleRemove}>X</button>
    </div> 
  )
}
export default Box;
