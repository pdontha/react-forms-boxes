import React, {useState } from "react";


/*


State: formData

       Props: Height
              Width
              Color

*/

function NewBoxForm(Props){

  const [formData, setFormData] = useState({
    height: "",
    width: "",
    color: ""
  });

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("Check out state ->", formData);
    Props.addBox(formData);
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