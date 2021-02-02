function IndecisionApp() {
  const title = "Indecision"
  const subtitle = "A to-do site in React"
  const [options, setOptions] = React.useState([])

  const clearOptions = () => {
    setOptions([])
  }

  // Fetching Data
  React.useEffect(() => {
    try {
      const json = localStorage.getItem("options")
      const options = JSON.parse(json)
      if (options) setOptions(options)
    } catch (e) {
      console.log(e)
    }
  }, [])

  // Saving Data
  React.useEffect(() => {
    const json = JSON.stringify(options)
    localStorage.setItem("options", json)
  }, [options])

  const handleAction = () => {
    const randomIndex = Math.floor(Math.random() * options.length)
    alert(options[randomIndex])
  }

  const handleAddOption = option => {
    if (!option) {
      return "Enter a valid value to add an item please"
    } else if (options.indexOf(option) != -1) {
      return "This option already exists."
    }

    setOptions([...options, option])
  }

  const handleDeleteOption = optionText => {
    const optionsNew = options.filter(option => option !== optionText)
    setOptions(optionsNew)
  }

  return (
    <div>
      <Header title={title} subtitle={subtitle} />
      <Action
        hasOptions={options.length > 0 ? true : false}
        handleAction={handleAction}
      />
      <Options
        options={options}
        clearOptions={clearOptions}
        handleDeleteOption={handleDeleteOption}
      />
      <AddOption handleAddOption={handleAddOption} />
    </div>
  )
}

function Header({ title = "some default", subtitle }) {
  return (
    <div>
      <h1>{title}</h1>
      {subtitle && <h2>{subtitle}</h2>}
    </div>
  )
}

function Action({ hasOptions, handleAction }) {
  return (
    <div>
      <button disabled={!hasOptions} onClick={handleAction}>
        What should I do?
      </button>
    </div>
  )
}

function Options({ options, clearOptions, handleDeleteOption }) {
  return (
    <div>
      {<button onClick={clearOptions}>Remove All</button>}
      {options.length === 0 && <p>Please add an option to get started</p>}
      {options.map(option => (
        <Option
          key={option}
          text={option}
          handleDeleteOption={handleDeleteOption}
        />
      ))}
    </div>
  )
}

function Option({ text, handleDeleteOption }) {
  return (
    <div>
      {text}
      <button onClick={() => handleDeleteOption(text)}>Remove</button>
    </div>
  )
}

function AddOption({ handleAddOption }) {
  const [error, setError] = React.useState("")
  const addOption = ev => {
    ev.preventDefault()
    const option = ev.target.elements.option.value.trim()
    const error = handleAddOption(option)
    setError(error)

    if (!error) ev.target.elements.option.value = ""
  }

  return (
    <div>
      {error && <p>{error}</p>}
      <form onSubmit={addOption}>
        <input type="text" name="option" placeholder="Add an option here" />
        <input type="submit" value="Add Option" />
      </form>
    </div>
  )
}

const appRoot = document.getElementById("app")

ReactDOM.render(<IndecisionApp />, appRoot)
