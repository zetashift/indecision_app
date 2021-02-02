function Counter() {
  const [count, setCount] = React.useState(0)
  const addOne = () => {
    setCount(count + 1)
  }

  React.useEffect(() => {
    const numAsString = localStorage.getItem("count")
    const num = parseInt(numAsString, 10)
    if (!isNaN(num)) {
      setCount(num)
    }
  }, [])

  // Save our count to localStorage
  React.useEffect(() => {
    localStorage.setItem("count", count.toString())
  }, [count])

  const removeOne = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={addOne}>Add One</button>
      <button onClick={removeOne}>Remove One</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

const appRoot = document.getElementById("app")

ReactDOM.render(<Counter />, appRoot)
