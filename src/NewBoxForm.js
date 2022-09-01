import { useState } from "react";

/** NewBoxForm Component: Renders a form to create a Box
 *
 * Prop:
 * - addItem
 *
 * State:
 * - formData: { height, width, backgroundColor }
 *
 * App -> BoxList -> (Box, NewBoxForm)
 */

 function NewBoxForm({ addItem }) {
  const initialState = { height: "", width: "", backgroundColor: "" };
  const [formData, setFormData] = useState(initialState);

  /** Send {name, value} to parent
   *    & clear form. */
   function handleSubmit(evt) {
    evt.preventDefault();
    addItem(formData);
    setFormData(initialState);
  }

  /** Update local state w/curr state of input elem */
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

      <label htmlFor="backgroundColor">Background Color:</label>
      <input
        id="backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />

      <button>Add a new box!</button>
    </form>
  );
}


export default NewBoxForm;