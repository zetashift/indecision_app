import React, { useState } from "react"

export default function AddOption({ handleAddOption }) {
  const [error, setError] = useState("")
  const addOption = ev => {
    ev.preventDefault()
    const option = ev.target.elements.option.value.trim()
    const error = handleAddOption(option)
    setError(error)

    if (!error) ev.target.elements.option.value = ""
  }

  return (
    <div>
      {error && <p className="add-option-error">{error}</p>}
      <form className="add-option" onSubmit={addOption}>
        <input
          className="add-option__input"
          type="text"
          name="option"
          placeholder="Add an option here"
        />
        <input className="button" type="submit" value="Add Option" />
      </form>
    </div>
  )
}
