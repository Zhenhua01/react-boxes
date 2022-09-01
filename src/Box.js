
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

 function Box({ height, width, backgroundColor, removeButton }) {

  const styles = {
    height,
    width,
    backgroundColor
  }

  return (
    <div className="Box">
        <div style={styles}></div>

        <button onClick={removeButton}>
          Remove The Box!
        </button>
    </div>
  )
}


export default Box;