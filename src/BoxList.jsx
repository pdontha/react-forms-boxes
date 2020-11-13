import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import NewBoxForm from "./NewBoxForm";
import Box from "./Box"

/*
 Does all the heavy lifting. Passes down functions to children to 
 change state.

State: boxList

*/

function BoxList() {
  const [boxes, setBoxes] = useState([]);

function addBox(boxObj) {
  let id = uuid()
  setBoxes(boxList => [...boxList,  {...boxObj, id}]);

}
  function createBoxes() {
    
    return boxes.map((box) => 
    
      (<Box 
        height={box.height}
        key={box.id}
        id={box.id} 
        width={box.width}
        color={box.color} 
        remove={remove}/> )) 
  } 

  function remove(id) {
    setBoxes(boxes.filter(box => box.id !== id));
  }

  
  return (<div>
          <NewBoxForm addBox={addBox} />
          <div>{createBoxes()}</div>
          </div>
         )
}

export default BoxList;