import Box from "./Box";
import NewBoxForm from "./NewBoxForm";
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

/** BoxList Component: Renders UI for creating boxes with form
 *
 *
 * State:
 *  items = [{height, width ,backgroundColor}]
 *
 * App -> BoxList -> (Box, NewBoxForm)
 */

function BoxList() {
  const [items, setItems] = useState([]);

  /** remove a box with key */
  function removeBox(id) {
    setItems(items.filter(box => box.id !== id));
  }
  // TODO: required tag, docstring
  /** render html */
  function renderItems() {
    return (
      <ul>
        {/* TODO destructure */}
        {items.map(item => (
          <Box key={item.id}
            width={item.width}
            height={item.height}
            backgroundColor={item.backgroundColor}
            removeClickHandler={() => removeBox(item.id)}
          />

        ))}
      </ul>
    );
  }

  /** Add new item object to cart. */
  function addItem(item) {
    let newItem = { ...item, id: uuid() };
    setItems(items => [...items, newItem]);
  }


  return (
    <div className="BoxList">
      <NewBoxForm addItem={addItem} />
      {renderItems()}
    </div>
  );


}


export default BoxList;