import React, { useState } from "react";

import NewBoxForm from "./NewBoxForm";

/*

Props: Height
       Width
       Color

State: formData
       boxList

*/


function BoxList(props) {
  const [boxes, setBoxes] = useState([]);

  // const createBoxList = boxes.map(box=> {
  //   <div><Box/></div>
  // }
  //   );

  // function addBox{
  //   //Add box to boxes state
  // }

  function addBox(boxObj) {

    setBoxes(boxList => [...boxList, boxObj]);

    console.log("BOX OBJECTTTT", boxObj);
  }


  console.log("BOX LIST", boxes);
  return (<div>
    <NewBoxForm addBox={addBox} />
  </div>
  )

  }


export default BoxList;