import React, {useState } from "react";


/*
Renders form for user input to create boxes.

State: formData

       props: newBoxForm

*/

function NewBoxForm(props){
  const initialState = {
    height: "",
    width: "",
    color: ""
  }
  const [formData, setFormData] = useState(initialState);

  function handleSubmit(evt) {
    evt.preventDefault();
    props.addBox(formData);
    setFormData(initialState)
  }


  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value,
    }));
  }


  return (

    <form onSubmit={handleSubmit}>
    <label htmlFor="height">Height:</label>
    <input
        id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
    />

    <label htmlFor="width">Width:</label>
    <input
        id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
    />
     <label htmlFor="color">Background Color:</label>
    <input
        id="color"
        name="color"
        value={formData.color}
        onChange={handleChange}
    />
    <button>Add a new box!</button>
  </form>
  )
}

export default NewBoxForm;