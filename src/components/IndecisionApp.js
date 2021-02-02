import React, { useState, useEffect } from "react"
import AddOption from "./AddOption"
import Options from "./Options"
import Header from "./Header"
import Action from "./Action"
import OptionModal from "./OptionModal"

export default function IndecisionApp() {
  const title = "Indecision"
  const subtitle = "A to-do site in React"
  const [options, setOptions] = useState([])
  const [selectedOption, setSelectedOption] = useState(undefined)

  const clearOptions = () => {
    setOptions([])
  }

  // Fetching Data
  useEffect(() => {
    try {
      const json = localStorage.getItem("options")
      const options = JSON.parse(json)
      if (options) setOptions(options)
    } catch (e) {
      console.log(e)
    }
  }, [])

  // Saving Data
  useEffect(() => {
    const json = JSON.stringify(options)
    localStorage.setItem("options", json)
  }, [options])

  // Pick a random to-do from our options array
  const handleAction = () => {
    let randomIndex = Math.floor(Math.random() * options.length)
    setSelectedOption(options[randomIndex])
  }

  // This is an event handler for the button in the OptionModal
  const handleOptionModal = () => {
    setSelectedOption(undefined)
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
      <div className="container">
        <Action
          hasOptions={options.length > 1 ? true : false}
          handleAction={handleAction}
        />
        <div className="widget">
          <Options
            options={options}
            clearOptions={clearOptions}
            handleDeleteOption={handleDeleteOption}
          />
          <AddOption handleAddOption={handleAddOption} />
          <OptionModal
            selectedOption={selectedOption}
            handleOptionModal={handleOptionModal}
          />
        </div>
      </div>
    </div>
  )
}
