// Function components are the best!
function Toggler() {
  const [visible, setVisible] = React.useState(false)
  const buttonTogglerText = visible ? "Hide Details" : "Show Details"
  const details = (
    <p>Here are the details that the Toggler can show or not show.</p>
  )
  const toggle = () => {
    setVisible(!visible)
  }
  return (
    <div>
      <h1>Visibility Toggler</h1>
      <button onClick={toggle}>{buttonTogglerText}</button>
      {visible && details}
    </div>
  )
}

const appRoot = document.getElementById("app")

ReactDOM.render(<Toggler />, appRoot)

// function buttonTogglerText(visible) {
//   return visible ? "Hide details" : "Show details"
// }

// let details = <p>This is some extra details about a certain thing."</p>

// const handleToggle = (visible) => {
//   const newVisible = !visible
//   renderToggler(newVisible)
// }

// function renderToggler(visible) {
//   const page = (
//     <div>
//       <h1>Visibility Toggler</h1>
//       <button onClick={() => handleToggle(visible)}>
//         {buttonTogglerText(visible)}
//       </button>
//       {visible && details}
//     </div>
//   )
//   const appRoot = document.getElementById("app")
//   ReactDOM.render(page, appRoot)
// }

// renderToggler(false)
