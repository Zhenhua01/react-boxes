
/** Box Component: Renders a box
 *
 * Props:
 * - height
 * - width
 * - background color
 * - removeButton
 *
 * App -> BoxList -> (Box, NewBoxForm)
 */

function Box({ height, width, backgroundColor, removeClickHandler }) {

  const styles = {
    height: `${height}px`,
    width: `${width}px`,
    backgroundColor
  };

  return (
    <li className="Box">
      <div style={styles}></div>

      <button style={{ textAlign: "left" }} onClick={removeClickHandler}>
        Remove The Box!
      </button>
    </li>
  );
}


export default Box;